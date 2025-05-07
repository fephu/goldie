package api

import (
	"net/http"

	db "github.com/fephu/fresh-fruit/db/sqlc"
	"github.com/gin-gonic/gin"
)

type createProductRequest struct {
	Name     string   `json:"name" binding:"required"`
	Price    int64    `json:"price" binding:"required"`
	Color    string   `json:"color" binding:"required"`
	Size     []string `json:"size" binding:"required"`
	Category string   `json:"category" binding:"required"`
	Features []string `json:"features" binding:"required"`
}

func (server *Server) createProduct(ctx *gin.Context) {
	var req createProductRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"Error": "failed to bind json"})
		return
	}

	// form, err := ctx.MultipartForm()
	// if err != nil {
	// 	ctx.JSON(http.StatusInternalServerError, gin.H{"Error": "failed to create muitle form"})
	// 	return
	// }
	var imageURLs []string

	// cld, _ := cloudinary.NewFromParams(server.config.CloudinaryCloudName, server.config.CloudinaryApiKey, server.config.CloudinaryApiSecret)
	// files := form.File["images"]
	// for _, file := range files {
	// 	rsp, err := cld.Upload.Upload(ctx, file, uploader.UploadParams{})
	// 	if err != nil {
	// 		ctx.JSON(http.StatusBadRequest, gin.H{"Error": "Failed to upload"})
	// 		return
	// 	}
	// 	imageURLs = append(imageURLs, rsp.URL)
	// }

	arg := db.CreateProductParams{
		Name:     req.Name,
		Price:    req.Price,
		Images:   imageURLs,
		Color:    req.Color,
		Size:     req.Size,
		Category: req.Category,
		Features: req.Features,
	}

	product, err := server.store.CreateProduct(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, product)
}

type listProductsRequest struct {
	PageID   int32 `form:"page_id" binding:"required,min=1"`
	PageSize int32 `form:"page_size" binding:"required,min=5,max=10"`
}

func (server *Server) listProducts(ctx *gin.Context) {
	var req listProductsRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.ListProductsParams{
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}

	products, err := server.store.ListProducts(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
	}

	ctx.JSON(http.StatusOK, products)
}

type listProductsByCategoryRequest struct {
	Name     string `uri:"name" binding:"required"`
	PageID   int32  `form:"page_id" binding:"required,min=1"`
	PageSize int32  `form:"page_size" binding:"required,min=5,max=10"`
}

func (server *Server) listProductsByCategory(ctx *gin.Context) {
	var req listProductsByCategoryRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.ListProductsByCategoryParams{
		Category: req.Name,
		Limit:    req.PageSize,
		Offset:   (req.PageID - 1) * req.PageSize,
	}

	products, err := server.store.ListProductsByCategory(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
	}

	ctx.JSON(http.StatusOK, products)
}

type getFruitRequest struct {
	ID int64 `uri:"id" binding:"required"`
}

func (server *Server) getProduct(ctx *gin.Context) {
	var req getFruitRequest
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	fruit, err := server.store.GetProduct(ctx, req.ID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, fruit)
}

// type deleteFruitRequest struct {
// 	ID int64 `json:"id" binding:"required"`
// }

// func (server *Server) deleteFruit(ctx *gin.Context) {
// 	var req deleteFruitRequest
// 	if err := ctx.ShouldBindJSON(&req); err != nil {
// 		ctx.JSON(http.StatusBadRequest, errorResponse(err))
// 		return
// 	}

// 	err := server.store.DeleteFruit(ctx, req.ID)
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
// 		return
// 	}

// 	ctx.JSON(http.StatusOK, req.ID)
// }

// type updateFruitRequest struct {
// 	ID   int64  `json:"id" binding:"required"`
// 	Name string `json:"name" binding:"required"`
// }

// func (server *Server) updateFruit(ctx *gin.Context) {
// 	var req updateFruitRequest
// 	if err := ctx.ShouldBindJSON(&req); err != nil {
// 		ctx.JSON(http.StatusBadRequest, errorResponse(err))
// 		return
// 	}

// 	arg := db.UpdateFruitParams{
// 		ID:   req.ID,
// 		Name: req.Name,
// 	}

// 	fruit, err := server.store.UpdateFruit(ctx, arg)
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
// 		return
// 	}

// 	ctx.JSON(http.StatusOK, fruit)
// }
