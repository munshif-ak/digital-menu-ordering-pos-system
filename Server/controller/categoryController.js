const mongoose = require("mongoose");
const CategoryModel = require("../models/CategoryModel");
const fs = require("fs");
const path = require("path");

const createCategory = async (req, res) => {
  const { name } = req.body;
  const img_url = req.file
    ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
    : null;

  try {
    const category = await CategoryModel.create({ name, img_url });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Category not found" });
  }
  try {
    const singleCategory = await CategoryModel.findById(id);
    res.status(200).json(singleCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid ID" });
  }

  try {
    const category = await CategoryModel.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // If new image is uploaded, delete old one
    let img_url = category.img_url;
    if (req.file) {
      // delete old file if it exists
      if (img_url) {
        const oldPath = path.join(
          __dirname,
          "..",
          img_url.replace(`${req.protocol}://${req.get("host")}/`, "")
        );
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      // set new image url
      img_url = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;
    }

    // Update category
    category.name = req.body.name || category.name;
    category.img_url = img_url;

    const updatedCategory = await category.save();

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Category not found" });
  }
  try {
    const deleteCategory = await CategoryModel.findByIdAndDelete(id);
    res.status(200).json(deleteCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
