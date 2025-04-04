package api

import (
	"net/http"

	db "github.com/fephu/fresh-fruit/db/sqlc"
	"github.com/gin-gonic/gin"
)

type verifyEmailRequest struct {
	EmailId    int64  `form:"email_id" binding:"required"`
	SecretCode string `form:"secret_code" binding:"required"`
}

type verifyEmailResponse struct {
	IsVerified bool `json:"is_verified"`
}

func (server *Server) verifyEmail(ctx *gin.Context) {
	var req verifyEmailRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	txResult, err := server.store.VerifyEmailTx(ctx, db.VerifyEmailTxParams{
		EmailId:    req.EmailId,
		SecretCode: req.SecretCode,
	})
	if err != nil {
		ctx.JSON(http.StatusNotFound, errorResponse(err))
		return
	}

	rsp := verifyEmailResponse{
		IsVerified: txResult.User.IsEmailVerified,
	}

	ctx.JSON(http.StatusOK, rsp)
}
