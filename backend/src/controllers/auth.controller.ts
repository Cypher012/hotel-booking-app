import { NextFunction, Request, Response } from "express";
import { findEmail } from "../service/user.service";
import createResponse from "../../utils/createResponse";
import { signJwt } from "../../utils/jwt";
import { LoginSchemaInput } from "../schema/auth.schema";
export const loginHandler = async (
  req: Request<{}, {}, LoginSchemaInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await findEmail(email);

    if (!user)
      return createResponse(res, 400, { message: "Wrong email or password" });

    const isValid = await user.validatePassword(password);

    if (!isValid)
      return createResponse(res, 400, { message: "Wrong email or password" });

    const token = signJwt({ userId: user.id }, "accessTokenKey");

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 20 * 60 * 1000,
    });

    return createResponse(res, 200);
  } catch (e: any) {
    createResponse(res, 500, { message: "Something went wrong" });
  }
};
