const express = require("express");
const upload = require("../middleware/upload")
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  deleteProduct,
  getSingleProduct,
  updateProduct,
  findByCategory
} = require("../controller/productController");  

router.post("/product",upload.single("productImage"), createProduct);
router.get("/products", getAllProducts);
router.get("/product/:id", getSingleProduct);
router.patch("/product/:id",upload.single("productImage"), updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/products/category/:categoryId", findByCategory);


module.exports = router;