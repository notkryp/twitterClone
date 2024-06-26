import express from "express";
import * as dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { mongoConn } from "./db/connectMongo.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  mongoConn();
});
