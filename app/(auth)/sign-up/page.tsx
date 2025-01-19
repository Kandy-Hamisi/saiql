"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import { signUp } from "@/lib/actions/auth";

const SignInPage = () => {
  return (
    <AuthForm
      type={"SIGN_IN"}
      schema={signUpSchema}
      defaultValues={{ email: "", password: "", fullName: "" }}
      onSubmit={signUp}
    />
  );
};
export default SignInPage;
