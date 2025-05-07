package api

import (
	"net/http"

	db "github.com/fephu/fresh-fruit/db/sqlc"
	"github.com/fephu/fresh-fruit/util"
	"github.com/gin-gonic/gin"
)

func (server *Server) listCategories(ctx *gin.Context) {
	categories, err := server.store.ListCategories(ctx)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
	}

	ctx.JSON(http.StatusOK, categories)
}

type createCategoryRequest struct {
	Name string `json:"name" binding:"required"`
}

func (server *Server) createCategory(ctx *gin.Context) {
	var req createCategoryRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	slug := util.Slugify(req.Name)

	arg := db.CreateCategoryParams{
		Name:  req.Name,
		Value: slug,
	}

	category, err := server.store.CreateCategory(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
	}

	ctx.JSON(http.StatusOK, category)
}
