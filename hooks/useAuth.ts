"use client";

import { toast } from "@/components/ui/toast";
import { LoginFormValues, RegisterFormValue } from "@/schemas/auth.schema";
import { CartService } from "@/services/cart-service";
import { UserService } from "@/services/user-service";
import { useCartStore } from "@/store/cart.store";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { setCart } = useCartStore();
  const router = useRouter();

  const Login = async (data: LoginFormValues) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!res?.ok) {
      setError("Email or Password is wrong!");
      toast.error("Email or Password is wrong!");
      setLoading(false);
      return;
    } else {
      setLoading(false);
      await CartService.mergeCart();
      const res = await CartService.fetchCard();
      setCart(res.payload.data);
      window.location.href = "/shop";
    }
  };

  const Register = async (data: RegisterFormValue) => {
    try {
      setLoading(true);
      await UserService.register(data);
      toast.success("Register is success");
      router.push("/login");
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
