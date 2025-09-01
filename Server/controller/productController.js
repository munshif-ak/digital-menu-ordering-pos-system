const mongoose = require("mongoose");
const productModel = require("../models/ProductModel");
const CategoryModel = require("../models/CategoryModel");

const fs = require("fs");
const path = require("path");

// ✅ Create Product
const createProduct = async (req, res) => {
  try {
    const { name, categoryId, price, isAvailable } = req.body;

    // Basic validations
    if (!name || !categoryId || !price) {
      return res.status(400).json({ message: "Name, CategoryId and Price are required" });
    }

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ message: "Invalid categoryId" });
    }

    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const img_url = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : null;

    const product = await productModel.create({
      name,
      categoryId,
      categoryName: category.name,
      img_url,
      price,
      isAvailable: isAvailable ?? true, // default true if not provided
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Single Product
const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product id" });
  }

  try {
    const singleProduct = await productModel.findById(id);
    if (!singleProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update Product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product id" });
  }

  try {
    const { name, categoryId, price, isAvailable } = req.body;

    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (categoryId) {
      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({ message: "Invalid categoryId" });
      }
      const category = await CategoryModel.findById(categoryId);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      product.categoryId = categoryId;
      product.categoryName = category.name;
    }

    // Handle image update
    if (req.file) {
      if (product.img_url) {
        const oldPath = path.join(
          __dirname,
          "..",
          product.img_url.replace(`${req.protocol}://${req.get("host")}/`, "")
        );
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      product.img_url = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.isAvailable = typeof isAvailable === "boolean" ? isAvailable : product.isAvailable;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete Product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product id" });
  }

  try {
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete image file if exists
    if (product.img_url) {
      const oldPath = path.join(
        __dirname,
        "..",
        product.img_url.replace(`${req.protocol}://${req.get("host")}/`, "")
      );
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ Find By Category
const findByCategory = async (req, res) => {
  const { categoryId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    return res.status(400).json({ message: "Invalid categoryId" });
  }

  try {
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const products = await productModel.find({ categoryId });
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found in this category" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getSingleProduct,
  findByCategory,
};
