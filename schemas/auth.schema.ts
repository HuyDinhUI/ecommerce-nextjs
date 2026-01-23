import { z } from "zod";

export const LoginSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 character.")
      .max(50, "Password must be at most 50 character."),
  })
  .strict();

export type LoginFormValues = z.infer<typeof LoginSchema>;

export const RegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is require")
      .max(50, "First name be at most 50 characters."),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name be at most 50 characters."),
    email: z.string().email(),
    confirmEmail: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 character.")
      .max(50, "Password must be at most 50 character."),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 character.")
      .max(50, "Password must be at most 50 character."),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.confirmEmail !== data.email) {
      ctx.addIssue({
        path: ["confirmEmail"],
        message: "Email is not match.",
        code: z.ZodIssueCode.custom,
      });
    }

    if (data.confirmPassword !== data.password) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "Password is not match.",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type RegisterFormValue = z.infer<typeof RegisterSchema>
