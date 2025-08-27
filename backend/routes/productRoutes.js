const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")
const upload = require("../middleware/upload")
const { validateProduct } = require("../middleware/validation")

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get("/", productController.getAllProducts)

// @route   GET /api/products/:id
// @desc    Get single product by ID
// @access  Public
router.get("/:id", productController.getProductById)

// @route   GET /api/products/category/:category
// @desc    Get products by category
// @access  Public
router.get("/category/:category", productController.getProductsByCategory)

// @route   GET /api/products/category/:category/:subCategory
// @desc    Get products by category and subcategory
// @access  Public
router.get("/category/:category/:subCategory", productController.getProductsBySubCategory)

// @route   POST /api/products
// @desc    Add new product
// @access  Public (in production, this should be protected)
router.post("/", upload.single("image"), validateProduct, productController.addProduct)

// @route   PUT /api/products/:id
// @desc    Update product
// @access  Public (in production, this should be protected)
router.put("/:id", upload.single("image"), productController.updateProduct)

// @route   DELETE /api/products/:id
// @desc    Delete product
// @access  Public (in production, this should be protected)
router.delete("/:id", productController.deleteProduct)

// @route   GET /api/products/search/:query
// @desc    Search products by title or description
// @access  Public
router.get("/search/:query", productController.searchProducts)

module.exports = router
