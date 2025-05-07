package worker

const (
	TaskOrder = "task:order"
)

// type PayloadOrder struct {
// 	UserId  int64  `json:"user_id" binding:"required"`
// 	FruitId int64  `json:"fruit_id" binding:"required"`
// 	Status  string `json:"status" binding:"required"`
// 	Type    string `json:"type" binding:"required"`
// 	Amount  int64  `json:"amount" binding:"required"`
// }

// func (distributor *RedisTaskDistributor) DistributeTaskOrder(
// 	ctx context.Context,
// 	payload *PayloadOrder,
// 	opts ...asynq.Option,
// ) error {
// 	jsonPayload, err := json.Marshal(payload)
// 	if err != nil {
// 		return fmt.Errorf("failed to marshal task payload: %w", err)
// 	}

// 	task := asynq.NewTask(TaskOrder, jsonPayload, opts...)
// 	info, err := distributor.client.EnqueueContext(ctx, task)
// 	if err != nil {
// 		return fmt.Errorf("failed to enqueue task: %w", err)
// 	}

// 	log.Info().Str("type", task.Type()).Bytes("payload", task.Payload()).Str("queue", info.Queue).Int("max_retry", info.MaxRetry).Msg("enqueued task")

// 	return nil
// }

// func (processor *RedisTaskProcessor) ProcessorTaskOrder(ctx context.Context, task *asynq.Task) error {
// 	var payload PayloadOrder
// 	if err := json.Unmarshal(task.Payload(), &payload); err != nil {
// 		return fmt.Errorf("failed to unmarsal payload: %w", asynq.SkipRetry)
// 	}

// 	arg := db.CreateOrderParams{
// 		UserID:  payload.UserId,
// 		FruitID: payload.FruitId,
// 		Status:  db.OrderStatus(payload.Status),
// 		Type:    db.TypeFruit(payload.Type),
// 		Amount:  payload.Amount,
// 	}

// 	txResult, err := processor.store.CreateOrderTx(ctx, db.CreateOrderTxParams{
// 		CreateOrderParams: arg,
// 	})
// 	if err != nil {
// 		return fmt.Errorf("failed to create order: %w", err)
// 	}

// 	log.Info().Str("type", task.Type()).Bytes("payload", task.Payload()).Str("status", string(txResult.Order.Status)).Msg("processed task")

// 	return nil
// }
