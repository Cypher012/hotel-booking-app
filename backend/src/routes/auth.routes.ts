import express from "express";
import { validateResource } from "../middleware/validateResource";
import { loginHandler } from "../controllers/auth.controller";
import { LoginSchema } from "../schema/auth.schema";

const router = express.Router();

router.post("/login", validateResource(LoginSchema), loginHandler);

export default router;
