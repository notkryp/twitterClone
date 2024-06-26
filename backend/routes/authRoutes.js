import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ message: "This is Signup Route" });
});
router.post("/login", (req, res) => {
  res.json({ message: "This is login Route" });
});
router.post("/logout", (req, res) => {
  res.json({ message: "This is logout Route" });
});

export default router;
