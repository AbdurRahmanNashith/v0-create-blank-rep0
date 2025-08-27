const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      trim: true,
      enum: {
        values: ["men", "women", "kids", "accessories"],
        message: "Category must be one of: men, women, kids, accessories",
      },
    },
    subCategory: {
      type: String,
      required: [true, "Product subcategory is required"],
      trim: true,
    },
    offer: {
      type: String,
      trim: true,
      default: "",
    },
    photoUrl: {
      type: String,
      required: [true, "Product photo URL is required"],
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
)

// Index for better query performance
productSchema.index({ category: 1, subCategory: 1 })
productSchema.index({ title: "text", description: "text" })

module.exports = mongoose.model("Product", productSchema)
