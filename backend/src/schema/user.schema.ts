import { object, string, TypeOf } from "zod";

const CreateUserSchema = object({
  body: object({
    firstName: string().min(1, "First name cannot be empty"),
    lastName: string().min(1, "Last name cannot be empty"),
    email: string().email().min(1, "Email cannot be empty"),
    password: string()
      .min(1, "Password cannot be empty")
      .min(6, "Password must not be less than 6 character"),
  }),
});

export type CreateUserSchemaInput = TypeOf<typeof CreateUserSchema>["body"];
