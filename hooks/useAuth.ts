"use client";

import { toast } from "@/components/ui/toast";
import { LoginFormValues, RegisterFormValue } from "@/schemas/auth.schema";
import { UserService } from "@/services/user-service";
import { signIn } from "next-auth/react";
import { useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const Login = async (data: LoginFormValues) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    });

    if (!res?.ok) {
      setError("Email or Password is wrong!");
      toast.error("Email or Password is wrong!")
      setLoading(false);
      return;
    } else {
      setLoading(false);
      window.location.href = "/shop"
    }
  };

  const Register = async (data: RegisterFormValue) => {
    try {
      setLoading(true);
      await UserService.register(data);
      toast.success("Register is success")
      window.location.href = '/login'
    } catch (error: any) {
      console.log(error);
      setError(error.payload.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    Login,
    Register,
    loading,
    error,
  };
};

export default useAuth;
