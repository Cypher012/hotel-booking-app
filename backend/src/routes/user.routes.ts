import express, { NextFunction, Request, Response } from "express";
import createResponse from "../../utils/createResponse";
import { validateResource } from "../middleware/validateResource";
import { CreateUserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controllers/user.controllers";
const router = express.Router();

router.post("/users", validateResource(CreateUserSchema), createUserHandler);

export default router;
