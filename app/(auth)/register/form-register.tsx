"use client";

import { RegisterFormValue, RegisterSchema } from "@/schemas/auth.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import FieldError from "@/components/ui/form-field/field-error";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { Spinner } from "@/components/ui/loading";

const FormRegister = () => {
  const { Register, loading } = useAuth();
  const form = useForm<RegisterFormValue>({
    resolver: zodResolver(RegisterSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmEmail: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="p-7">
      <h1 className="my-5 text-center">Register your account</h1>
      <form onSubmit={form.handleSubmit(Register)}>
        <Controller
          name="firstName"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                type="text"
                placeholder="First name"
                autoComplete="firstName"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
        <Controller
          name="lastName"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                type="text"
                placeholder="Last name"
                autoComplete="lastName"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
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
          name="confirmEmail"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                type="email"
                placeholder="Confirm email"
                autoComplete="confirmEmail"
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
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="grid gap-2 mb-2 relative">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                type="password"
                placeholder="Confirm password"
              />
              <FieldError message={fieldState.error?.message ?? ""} />
            </div>
          )}
        />
        <Button
          title={loading ? "" : "Submit"}
          icon={loading ? <Spinner /> : null}
          disabled={loading}
          className="w-full justify-center"
          variant="dark"
        />
        <p className="text-center my-3 text-sm">
          Already have an account?
          <Link href={"/login"} className="underline">
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormRegister;
