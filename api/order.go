package api

// type createOrderRequest struct {
// 	UserId  int64  `json:"user_id" binding:"required"`
// 	FruitId int64  `json:"fruit_id" binding:"required"`
// 	Status  string `json:"status" binding:"required"`
// 	Type    string `json:"type" binding:"required"`
// 	Amount  int64  `json:"amount" binding:"required"`
// }

// type createOrderResponse struct {
// 	IsOrder bool `json:"is_order"`
// }

// func (server *Server) createOrder(ctx *gin.Context) {
// 	var req createOrderRequest
// 	if err := ctx.ShouldBindJSON(&req); err != nil {
// 		ctx.JSON(http.StatusBadRequest, errorResponse(err))
// 		return
// 	}

// 	taskPayload := &worker.PayloadOrder{
// 		UserId:  req.UserId,
// 		FruitId: req.FruitId,
// 		Status:  req.Status,
// 		Type:    req.Type,
// 		Amount:  req.Amount,
// 	}

// 	opts := []asynq.Option{
// 		asynq.MaxRetry(10),
// 		asynq.ProcessIn(10 * time.Second),
// 		asynq.Queue(worker.QueueCritical),
// 	}

// 	err := server.taskDistributor.DistributeTaskOrder(ctx, taskPayload, opts...)

// 	if err != nil {
// 		ctx.JSON(http.StatusNotFound, errorResponse(err))
// 		return
// 	}

// 	rsp := createOrderResponse{
// 		IsOrder: true,
// 	}

// 	ctx.JSON(http.StatusOK, rsp)
// }
