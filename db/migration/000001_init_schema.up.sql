CREATE TYPE "type_fruit" AS ENUM (
  'big',
  'small'
);

CREATE TYPE "order_status" AS ENUM (
  'waiting',
  'done',
  'failure'
);

CREATE TABLE "users" (
  "id" bigserial PRIMARY KEY,
  "hashed_password" varchar NOT NULL,
  "full_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password_changed_at" timestamptz NOT NULL DEFAULT '0001-01-01 00:00:00Z',
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "fruits" (
  "id" bigserial PRIMARY KEY,
  "name" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint NOT NULL,
  "fruit_id" bigint NOT NULL,
  "status" order_status NOT NULL,
  "type" type_fruit NOT NULL,
  "amount" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE INDEX ON "orders" ("user_id");

CREATE INDEX ON "orders" ("fruit_id");

COMMENT ON COLUMN "orders"."amount" IS 'can be negative or positive';

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("fruit_id") REFERENCES "fruits" ("id");
