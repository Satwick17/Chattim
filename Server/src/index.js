import express from "express";
import authRoutes from "./routes/app.routes.js"; // Assuming you have an auth.routes.js file

const app = express();

app.use("/api/auth", authRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
