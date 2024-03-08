"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AuthForm from "./components/AuthForm";
import Button from "@/components/Button";

const Login = () => {
  const router = useRouter();

  return <AuthForm />;
};

export default Login;
