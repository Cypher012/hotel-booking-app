import express, { NextFunction, Request, Response } from "express";
import createResponse from "../../utils/createResponse";

const router = express.Router();

router.get("/users", (req: any, res: Response) => {
  createResponse(res, 200, { message: "Good to go" });
});

export default router;
