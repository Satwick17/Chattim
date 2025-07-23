import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/app.routes.js"; // Assuming you have an auth.routes.js file
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const Port = process.env.PORT;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies

app.use("/api/auth", authRoutes);

app.listen(Port, () => {
  console.log("Server is running on port:" + Port);
  connectDB();
});
