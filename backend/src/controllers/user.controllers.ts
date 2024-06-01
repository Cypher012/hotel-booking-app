import { NextFunction, Request, Response } from "express";
import { CreateUserSchemaInput } from "../schema/user.schema";
import { createUser, findEmail } from "../service/user.service";
import createResponse from "../../utils/createResponse";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserSchemaInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const existingEmail = await findEmail(body.email);

    existingEmail &&
      createResponse(res, 400, {
        message: "User with this email already exist",
      });

    const user = createUser(body);

    createResponse(res, 200, user);
  } catch (e: any) {
    createResponse(res, 500, { message: e });
  }
};
