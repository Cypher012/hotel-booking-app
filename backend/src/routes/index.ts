import express from "express";
import user from "./user.routes";
import auth from "./auth.routes";

const router = express.Router();

router.use("/api", user);
router.use("/api", auth);

export default router;
