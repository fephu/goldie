package token

import "time"

type Maker interface {
	CreateToken(userID int64, duration time.Duration) (string, *Payload, error)

	// VerifyToken checks if the token is valid or not
	VerifyToken(token string) (*Payload, error)
}
