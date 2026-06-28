const express = require("express");

const {
  generateDescription,
  saveDescription,
  getAllContent,
  getSingleContent,
  updateContent,
  deleteContent,
} = require("../controllers/contentController");

const { protect } = require("../middlewares/authMiddlewares");

const router = express.Router();

router.post("/generate", protect, generateDescription);
router.post("/save", protect, saveDescription);

router.get("/", protect, getAllContent);
router.get("/:id", protect, getSingleContent);

router.put("/:id", protect, updateContent);

router.delete("/:id", protect, deleteContent);

module.exports = router;