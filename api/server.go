package api

import (
	"fmt"

	db "github.com/fephu/fresh-fruit/db/sqlc"
	"github.com/fephu/fresh-fruit/token"
	"github.com/fephu/fresh-fruit/util"
	"github.com/fephu/fresh-fruit/worker"
	"github.com/gin-gonic/gin"
)

type Server struct {
	config          util.Config
	store           db.Store
	tokenMaker      token.Maker
	router          *gin.Engine
	taskDistributor worker.TaskDistributor
}

func NewServer(config util.Config, store db.Store, taskDistributor worker.TaskDistributor) (*Server, error) {
	tokenMaker, err := token.NewPasetoMaker(config.TokenSymmetricKey)
	if err != nil {
		return nil, fmt.Errorf("cannot create token maker: %w", err)
	}

	server := &Server{
		config:          config,
		store:           store,
		tokenMaker:      tokenMaker,
		taskDistributor: taskDistributor,
	}

	server.setupRouter()

	return server, nil
}

func (server *Server) setupRouter() {
	router := gin.Default()

	// auth router
	router.POST("/users", server.createUser)
	router.POST("/users/login", server.loginUser)
	router.POST("/tokens/renew_access", server.renewAccessToken)
	router.GET("/verify_email", server.verifyEmail)

	authRoutes := router.Group("/").Use(authMiddleware(server.tokenMaker))

	// fruit router
	authRoutes.GET("/fruits", server.listFruits)
	authRoutes.POST("/fruits", server.createFruit)
	authRoutes.GET("/fruits/:id", server.getFruit)
	authRoutes.PATCH("/fruits/:id", server.deleteFruit)

	server.router = router
}

// Start runs the HTTP server on a spetific address.
func (server *Server) Start(address string) error {
	return server.router.Run(address)
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}
