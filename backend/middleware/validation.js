const validateProduct = (req, res, next) => {
  const { title, description, price, category, subCategory } = req.body

  // Check required fields
  if (!title || !description || !price || !category || !subCategory) {
    return res.status(400).json({
      success: false,
      message: "All required fields must be provided",
      required: ["title", "description", "price", "category", "subCategory"],
    })
  }

  // Validate price
  if (isNaN(price) || price < 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be a valid positive number",
    })
  }

  // Validate category
  const validCategories = ["men", "women", "kids", "accessories"]
  if (!validCategories.includes(category.toLowerCase())) {
    return res.status(400).json({
      success: false,
      message: "Invalid category",
      validCategories,
    })
  }

  // Check if image file is provided for new products
  if (!req.file && !req.body.photoUrl) {
    return res.status(400).json({
      success: false,
      message: "Product image is required",
    })
  }

  next()
}

module.exports = {
  validateProduct,
}
