-- name: GetFruit :one
SELECT * FROM fruits
WHERE id = $1 LIMIT 1;

-- name: ListFruits :many
SELECT * FROM fruits
ORDER BY id
LIMIT $1
OFFSET $2;

-- name: CreateFruit :one
INSERT INTO fruits (
  name
) VALUES (
  $1
)
RETURNING *;

-- name: UpdateFruit :one
UPDATE fruits
  set name = $2
WHERE id = $1
RETURNING *;

-- name: DeleteFruit :exec
DELETE FROM fruits
WHERE id = $1;