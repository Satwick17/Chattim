import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/app.routes.js"; // Assuming you have an auth.routes.js file
import messageRoutes from "./routes/message.route.js"; // Assuming you have a message.route.js file
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const Port = process.env.PORT;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your client URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(Port, () => {
  console.log("Server is running on port:" + Port);
  connectDB();
});
