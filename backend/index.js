import express from "express";
import * as dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";
import { mongoConn } from "./db/connectMongo.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 8080;

app.use("/api/auth", authRoutes);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  mongoConn();
});
