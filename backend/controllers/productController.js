const Product = require("../models/Product")
const imageService = require("../services/imageService")

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res) => {
  try {
    const { page = 1, limit = 20, category, subCategory } = req.query

    const query = { isActive: true }

    if (category) {
      query.category = category.toLowerCase()
    }

    if (subCategory) {
      query.subCategory = subCategory.toLowerCase()
    }

    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean()

    const total = await Product.countDocuments(query)

    res.json({
      success: true,
      data: products,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total,
      },
    })
  } catch (error) {
    console.error("Get all products error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    })
  }
}

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product || !product.isActive) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    res.json({
      success: true,
      data: product,
    })
  } catch (error) {
    console.error("Get product by ID error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    })
  }
}

// @desc    Get products by category
// @route   GET /api/products/category/:category
// @access  Public
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params
    const { page = 1, limit = 20 } = req.query

    const products = await Product.find({
      category: category.toLowerCase(),
      isActive: true,
    })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean()

    const total = await Product.countDocuments({
      category: category.toLowerCase(),
      isActive: true,
    })

    res.json({
      success: true,
      data: products,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total,
      },
    })
  } catch (error) {
    console.error("Get products by category error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to fetch products by category",
      error: error.message,
    })
  }
}

// @desc    Get products by subcategory
// @route   GET /api/products/category/:category/:subCategory
// @access  Public
const getProductsBySubCategory = async (req, res) => {
  try {
    const { category, subCategory } = req.params
    const { page = 1, limit = 20 } = req.query

    const products = await Product.find({
      category: category.toLowerCase(),
      subCategory: subCategory.toLowerCase(),
      isActive: true,
    })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean()

    const total = await Product.countDocuments({
      category: category.toLowerCase(),
      subCategory: subCategory.toLowerCase(),
      isActive: true,
    })

    res.json({
      success: true,
      data: products,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total,
      },
    })
  } catch (error) {
    console.error("Get products by subcategory error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to fetch products by subcategory",
      error: error.message,
    })
  }
}

// @desc    Add new product
// @route   POST /api/products
// @access  Public (should be protected in production)
const addProduct = async (req, res) => {
  try {
    const { title, description, price, category, subCategory, offer } = req.body

    let photoUrl = ""

    // Handle image upload
    if (req.file) {
      const uploadResult = await imageService.uploadProductImage(req.file)
      photoUrl = uploadResult.url
    } else if (req.body.photoUrl) {
      photoUrl = req.body.photoUrl
    }

    // Create new product
    const product = new Product({
      title: title.trim(),
      description: description.trim(),
      price: Number.parseFloat(price),
      category: category.toLowerCase().trim(),
      subCategory: subCategory.toLowerCase().trim(),
      offer: offer ? offer.trim() : "",
      photoUrl,
    })

    const savedProduct = await product.save()

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: savedProduct,
    })
  } catch (error) {
    console.error("Add product error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    })
  }
}

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Public (should be protected in production)
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    const { title, description, price, category, subCategory, offer } = req.body

    // Handle image upload if new image provided
    let photoUrl = product.photoUrl
    if (req.file) {
      // Delete old image
      await imageService.deleteProductImage(product.photoUrl)

      // Upload new image
      const uploadResult = await imageService.uploadProductImage(req.file)
      photoUrl = uploadResult.url
    }

    // Update product fields
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title: title?.trim() || product.title,
        description: description?.trim() || product.description,
        price: price ? Number.parseFloat(price) : product.price,
        category: category?.toLowerCase().trim() || product.category,
        subCategory: subCategory?.toLowerCase().trim() || product.subCategory,
        offer: offer !== undefined ? offer.trim() : product.offer,
        photoUrl,
      },
      { new: true, runValidators: true },
    )

    res.json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    })
  } catch (error) {
    console.error("Update product error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    })
  }
}

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Public (should be protected in production)
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    // Delete image from Google Drive
    await imageService.deleteProductImage(product.photoUrl)

    // Delete product from database
    await Product.findByIdAndDelete(req.params.id)

    res.json({
      success: true,
      message: "Product deleted successfully",
    })
  } catch (error) {
    console.error("Delete product error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message,
    })
  }
}

// @desc    Search products
// @route   GET /api/products/search/:query
// @access  Public
const searchProducts = async (req, res) => {
  try {
    const { query } = req.params
    const { page = 1, limit = 20 } = req.query

    const products = await Product.find({
      $and: [
        { isActive: true },
        {
          $or: [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
            { category: { $regex: query, $options: "i" } },
            { subCategory: { $regex: query, $options: "i" } },
          ],
        },
      ],
    })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean()

    const total = await Product.countDocuments({
      $and: [
        { isActive: true },
        {
          $or: [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
            { category: { $regex: query, $options: "i" } },
            { subCategory: { $regex: query, $options: "i" } },
          ],
        },
      ],
    })

    res.json({
      success: true,
      data: products,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total,
      },
    })
  } catch (error) {
    console.error("Search products error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to search products",
      error: error.message,
    })
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getProductsBySubCategory,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
}
