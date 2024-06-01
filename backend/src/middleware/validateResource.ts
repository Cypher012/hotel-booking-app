import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import createResponse from "../../utils/createResponse";

export const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      createResponse(res, 400, { message: e.errors });
    }
  };
