const mongoose = require("mongoose");
const CategoryModel = require("../models/CategoryModel");

const createCategory = async (req, res) => {
  const { name, img_url } = req.body;

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
    return res.status(404).json({ message: "Id Not Found" });
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
    return res.status(404).json({ message: "Id Not Found" });
  }
  try {
    const editCategory = await CategoryModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      }
    );
    res.status(200).json(editCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Id Not Found" });
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
