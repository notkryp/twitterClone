import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  commentPost,
  createPost,
  deletePost,
  likeUnlikePost,
  getAllPosts,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/getlikedposts/:id", protectRoute, getLikedPosts);
router.get("/getuserposts/:username", protectRoute, getUserPosts);
router.get("/followingposts", protectRoute, getFollowingPosts);
router.get("/allposts", protectRoute, getAllPosts);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
