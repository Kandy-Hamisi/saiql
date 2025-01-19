import {
  pgTable,
  text,
  integer,
  uuid,
  varchar,
  pgEnum,
  date,
  timestamp,
} from "drizzle-orm/pg-core";

export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN", "MODERATOR"]);
export const EXPERIENCE_ENUM = pgEnum("ride_experience", [
  "BEGINNER",
  "INTERMEDIATE",
  "ADVANCED",
]);
export const STYLE_ENUM = pgEnum("riding_style", [
  "ROAD",
  "MOUNTAIN",
  "COMMUTER",
]);

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  profilePicture: text().default(
    "https://ik.imagekit.io/87oy0vazw/default-image.jpg?updatedAt=1735908789755",
  ),
  email: text("email").notNull().unique(),
  bio: text("bio"),
  country: text("country"),
  city: text("city"),
  password: text("password").notNull(),
  role: ROLE_ENUM("role").default("USER"),
  rideExperience: EXPERIENCE_ENUM("ride_experience").default("BEGINNER"),
  ridingStyle: STYLE_ENUM("riding_style").default("ROAD"),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
