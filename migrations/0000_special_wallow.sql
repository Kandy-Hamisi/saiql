CREATE TYPE "public"."ride_experience" AS ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('USER', 'ADMIN', 'MODERATOR');--> statement-breakpoint
CREATE TYPE "public"."riding_style" AS ENUM('ROAD', 'MOUNTAIN', 'COMMUTER');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"profilePicture" text DEFAULT 'https://ik.imagekit.io/87oy0vazw/default-image.jpg?updatedAt=1735908789755',
	"email" text NOT NULL,
	"bio" text,
	"country" text,
	"city" text,
	"password" text NOT NULL,
	"role" "role" DEFAULT 'USER',
	"ride_experience" "ride_experience" DEFAULT 'BEGINNER',
	"riding_style" "riding_style" DEFAULT 'ROAD',
	"last_activity_date" date DEFAULT now(),
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
