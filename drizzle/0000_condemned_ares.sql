CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"username" text NOT NULL,
	"photo" text DEFAULT 'default-48x48.png',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "profiles_id_unique" UNIQUE("id"),
	CONSTRAINT "profiles_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "profiles_username_unique" UNIQUE("username")
);
