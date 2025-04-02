postgres:
	docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=2311 -d postgres:12-alpine

createdb:
	docker exec -it postgres12 createdb --username=root --owner=root fresh_fruit

dropdb:
	docker exec -it postgres12 dropdb fresh_fruit

migrateup:
	migrate -path db/migration -database "postgresql://root:2311@localhost:5432/fresh_fruit?sslmode=disable" -verbose up

migratedown:
	migrate -path db/migration -database "postgresql://root:2311@localhost:5432/fresh_fruit?sslmode=disable" -verbose down

sqlc:
	sqlc generate

test:
	go test -v -cover ./...

server:
	go run main.go

.PHONY: createdb dropdb migrateup migratedown sqlc test server