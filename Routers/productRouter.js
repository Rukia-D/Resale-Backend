const express = require("express");
const { authenticateToken } = require('../Middlewares/authMiddleware');

const {
  getAllProducts,
  getAllProductsOfUser,
  deleteProduct,
  editProduct,
  createProduct,
  searchProducts,
  getProductById
} = require('../Controllers/productController');

const router = express.Router();

router.get("/user", authenticateToken, getAllProductsOfUser);
router.route("/").get(getAllProducts).post(authenticateToken, createProduct);
router.route("/:id").put(authenticateToken, editProduct).delete(authenticateToken, deleteProduct).get(getProductById);
router.post("/search", authenticateToken, searchProducts);

module.exports = router;