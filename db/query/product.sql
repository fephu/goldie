-- name: GetProduct :one
SELECT * FROM products
WHERE id = $1 LIMIT 1;

-- name: ListProducts :many
SELECT * FROM products
ORDER BY id
LIMIT $1
OFFSET $2;

-- name: ListProductsByCategory :many
SELECT * FROM products
WHERE category = $1
ORDER BY id
LIMIT $2
OFFSET $3;

-- name: CreateProduct :one
INSERT INTO products (
  name,
  price,
  images,
  color,
  size,
  category,
  features
) VALUES (
  $1, $2, $3, $4, $5, $6, $7
)
RETURNING *;

-- -- name: UpdateFruit :one
-- UPDATE fruits
--   set name = $2
-- WHERE id = $1
-- RETURNING *;

-- -- name: DeleteFruit :exec
-- DELETE FROM fruits
-- WHERE id = $1;