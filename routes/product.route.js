const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//Get all products and get by ID
router.get("/", getProducts);
router.get("/:id", getProduct);

//Create Product
router.post("/", createProduct);

//Update product
router.put("/:id", updateProduct);

//Delete product
router.delete("/:id", deleteProduct);

module.exports = router;
