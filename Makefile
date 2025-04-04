DB_URL=postgresql://root:2311@localhost:5432/fresh_fruit?sslmode=disable

postgres:
	docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=2311 -d postgres:12-alpine

createdb:
	docker exec -it postgres12 createdb --username=root --owner=root fresh_fruit

dropdb:
	docker exec -it postgres12 dropdb fresh_fruit

migrateup:
	migrate -path db/migration -database "$(DB_URL)" -verbose up

migrateup1:
	migrate -path db/migration -database "$(DB_URL)" -verbose up 1

migratedown:
	migrate -path db/migration -database "$(DB_URL)" -verbose down

migratedown1:
	migrate -path db/migration -database "$(DB_URL)" -verbose down 1

new_migration:
	migrate create -ext sql -dir db/migration -seq $(name)

sqlc:
	sqlc generate

test:
	go test -v -cover ./...

server:
	go run main.go

redis:
	docker run --name redis7 -p 6379:6379 -d redis:7.4-alpine

.PHONY: createdb dropdb migrateup migratedown sqlc test server