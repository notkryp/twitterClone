import express from "express";
import {
  deleteNotifications,
  deleteSingleNotification,
  getNotifications,
} from "../controllers/notiController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
// router.delete("/:id", protectRoute, deleteSingleNotification);

export default router;
