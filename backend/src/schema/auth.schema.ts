import { object, string, TypeOf } from "zod";

export const LoginSchema = object({
  body: object({
    email: string()
      .min(1, "Email is required")
      .email("Invalid email or password"),
    password: string()
      .min(1, "Password is required")
      .min(6, "Invalid email or password"),
  }),
});

export type LoginSchemaInput = TypeOf<typeof LoginSchema>["body"];
