const express = require("express");
const upload = require("../middleware/upload")

const router = express.Router();

const {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");

router.post("/",upload.single("image"), createCategory);
router.get("/", getAllCategories);
router.get("/:id", getSingleCategory);
router.patch("/:id",upload.single("image"), updateCategory);
router.delete("/:id", deleteCategory);


module.exports = router;
