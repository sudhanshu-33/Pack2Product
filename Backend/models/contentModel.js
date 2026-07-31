const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // AI Tool Used
    type: {
      type: String,
      enum: [
        "Product Description",
        "Ingredient Benefits",
        "Packaging Labels",
        "Marketplace Listings",
      ],
      required: true,
    },

    // Common Product Information
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    brandName: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    ingredients: {
      type: String,
      trim: true,
    },

    weight: {
      type: String,
      trim: true,
    },

    highlights: {
      type: String,
      trim: true,
    },

    audience: {
      type: String,
      trim: true,
    },

    tone: {
      type: String,
      trim: true,
    },

    language: {
      type: String,
      trim: true,
    },

    length: {
      type: String,
      trim: true,
    },

    // AI Generated Output
    generatedContent: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Content", contentSchema);