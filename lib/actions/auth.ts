"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">,
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.error(result.error);
      return { success: false, error: result?.error };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password } = params;

  //     check if the user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return {
      success: false,
      error: "User already exists",
    };
  }

  const hashedPassword = await hash(password, 10);

  try {
    //     insert the user into the database
    await db
      .insert(users)
      .values({ fullName, email, password: hashedPassword });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.error(error, "Signup error");
    return {
      success: false,
      error: "Signup Error",
    };
  }
};
