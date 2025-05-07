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

CREATE TABLE "categories" (
  "value" varchar PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "products" (
  "id" bigserial PRIMARY KEY,
  "name" varchar NOT NULL,
  "price" bigint NOT NULL,
  "images" varchar[] not null,
  "color" varchar NOT NULL,
  "size" varchar[] NOT NULL,
  "category" varchar NOT NULL,
  "features" varchar[] NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint NOT NULL,
  "status" order_status NOT NULL,
  "amount" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "address" varchar NOT NULL,
  "phone_number" varchar NOT NULL
);

CREATE TABLE "order_items" (
  "id" bigserial PRIMARY KEY,
  "order_id" bigint NOT NULL,
  "product_id" bigint NOT NULL,
  "quantity" int NOT NULL,
  "total_price" bigint NOT NULL
);

CREATE INDEX ON "orders" ("user_id");

CREATE INDEX ON "order_items" ("order_id");

CREATE INDEX ON "order_items" ("product_id");

COMMENT ON COLUMN "orders"."amount" IS 'can be negative or positive';

ALTER TABLE "products" ADD FOREIGN KEY ("category") REFERENCES "categories" ("value");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
