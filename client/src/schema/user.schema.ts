import { object, string, TypeOf } from "zod";

export const registerSchema = object({
  firstName: string().min(1),
  lastName: string().min(1),
  email: string().email("Invalid email format").min(1),
  password: string().min(1).min(6, "Password cannot be less than 6 characters"),
  confirmPassword: string().min(1, "Confirm Password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password does not match",
  path: ["confirmPassword"],
});

export const loginSchema = object({
  email: string().email().min(1),
  password: string().min(1),
});

export type registerType = TypeOf<typeof registerSchema>;
export type loginType = TypeOf<typeof loginSchema>;
