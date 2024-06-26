import express from "express";
import {
  isAuthenticatedUser,
  login,
  logout,
  signup,
} from "../controllers/auth.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/userauthcheck", protectRoute, isAuthenticatedUser);

export default router;
