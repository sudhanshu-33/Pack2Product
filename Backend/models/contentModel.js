const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    brandName: {
      type: String,
    },

    category: {
      type: String,
    },

    ingredients: {
      type: String,
    },

    weight: {
      type: String,
    },

    highlights: {
      type: String,
    },

    audience: {
      type: String,
    },

    tone: {
      type: String,
    },

    language: {
      type: String,
    },

    length: {
      type: String,
    },

    type: {
      type: String,
      default: "Product Description",
    },

    generatedContent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Content",contentSchema );