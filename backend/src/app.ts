import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes";
import { connectDb } from "../utils/connectDb";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(router);

app.listen(port, () => {
  connectDb();
  console.log(`Server running on http://localhost:${port}`);
});
