import express from "express";
import { getUserProfileForSidebar } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { sendMessage } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/user", protectRoute, getUserProfileForSidebar);
router.get("/:id", protectRoute, getUserProfileForSidebar); // Assuming you want to fetch user profile by ID
router.post("/send/:id", protectRoute, sendMessage);

export default router;
