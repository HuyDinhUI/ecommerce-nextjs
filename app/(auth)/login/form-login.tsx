"use client";

import { LoginFormValues, LoginSchema } from "@/schemas/auth.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import FieldError from "@/components/ui/form-field/field-error";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FormLogin = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitLogin = (data: LoginFormValues) => {
    console.log(data);
  };
  return (
    <div className="p-7">
      <h1 className="my-5 text-center">Login your account</h1>
      <form onSubmit={form.handleSubmit(submitLogin)}>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2 relative">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                type="password"
                placeholder="Password"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
        <Button
          title="Login"
          className="w-full justify-center"
          variant="dark"
        />
        <p className="text-center my-3 text-sm">
          Forgot password?
          <Link href={"/reset-password"} className="underline">
            reset
          </Link>
        </p>
        <p className="text-center my-3 text-sm">
          You {`don't`} have account?
          <Link href={"/register"} className="underline">
            register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormLogin;
