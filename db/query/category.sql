-- name: GetCategory :one
SELECT * FROM categories
WHERE value = $1 LIMIT 1;

-- name: ListCategories :many
SELECT * FROM categories
ORDER BY name;

-- name: CreateCategory :one
INSERT INTO categories (
  name,
  value
) VALUES (
  $1, $2
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