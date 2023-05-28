import { z } from "zod";

export const signupSchema = z
  .object({
    full_name: z
      .string({
        required_error: "full_name is required",
      })
      .min(3, {
        message: "full_name must be at least 3 characters long",
      }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Email is not valid",
      }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters long",
      }),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });

export const signinSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});
