package db

// type CreateOrderTxParams struct {
// 	CreateOrderParams
// }

// type CreateOrderTxResult struct {
// 	Order Order
// }

// func (store *SQLStore) CreateOrderTx(ctx context.Context, arg CreateOrderTxParams) (CreateOrderTxResult, error) {
// 	var result CreateOrderTxResult

// 	err := store.exectTx(ctx, func(q *Queries) error {
// 		var err error

// 		result.Order, err = q.CreateOrder(ctx, arg.CreateOrderParams)
// 		if err != nil {
// 			return err
// 		}

// 		return err
// 	})

// 	return result, err
// }
