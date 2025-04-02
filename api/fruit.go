package api

import (
	"net/http"

	db "github.com/fephu/fresh-fruit/db/sqlc"
	"github.com/gin-gonic/gin"
)

type createFruitRequest struct {
	Name string `json:"name" binding:"required"`
}

func (server *Server) createFruit(ctx *gin.Context) {
	var req createFruitRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	fruit, err := server.store.CreateFruit(ctx, req.Name)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, fruit)
}

type listFruitsRequest struct {
	PageID   int32 `form:"page_id" binding:"required,min=1"`
	PageSize int32 `form:"page_size" binding:"required,min=5,max=10"`
}

func (server *Server) listFruits(ctx *gin.Context) {
	var req listFruitsRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.ListFruitsParams{
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}

	fruits, err := server.store.ListFruits(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
	}

	ctx.JSON(http.StatusOK, fruits)
}

type getFruitRequest struct {
	ID int64 `uri:"id" binding:"required,min=1"`
}

func (server *Server) getFruit(ctx *gin.Context) {
	var req getFruitRequest
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	fruit, err := server.store.GetFruit(ctx, req.ID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, fruit)
}

type deleteFruitRequest struct {
	ID int64 `json:"id" binding:"required"`
}

func (server *Server) deleteFruit(ctx *gin.Context) {
	var req deleteFruitRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	err := server.store.DeleteFruit(ctx, req.ID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, req.ID)
}

type updateFruitRequest struct {
	ID   int64  `json:"id" binding:"required"`
	Name string `json:"name" binding:"required"`
}

func (server *Server) updateFruit(ctx *gin.Context) {
	var req updateFruitRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.UpdateFruitParams{
		ID:   req.ID,
		Name: req.Name,
	}

	fruit, err := server.store.UpdateFruit(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, fruit)
}
