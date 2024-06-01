import { NextFunction, Request, Response } from "express";
import { CreateUserSchemaInput } from "../schema/user.schema";
import { createUser, findEmail } from "../service/user.service";
import createResponse from "../../utils/createResponse";
import crypto from "crypto";
import { sign } from "jsonwebtoken";
import config from "config";
import { signJwt } from "../../utils/jwt";
export const createUserHandler = async (
  req: Request<{}, {}, CreateUserSchemaInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const existingEmail = await findEmail(body.email);

    if (existingEmail) {
      return createResponse(res, 400, {
        message: "User with this email already exists",
      });
    }

    const user = await createUser(body);

    const token = signJwt({ userId: user.id }, "accessTokenKey");

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 20 * 60 * 1000,
    });

    return createResponse(res, 200, user);
  } catch (e: any) {
    createResponse(res, 500, { message: "Something went wrong" });
  }
};
