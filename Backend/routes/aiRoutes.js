const express = require("express");

const router = express.Router();


const {
  generateProductDescription,
  generateIngredientBenefits,
  generatePackagingLabel,
} = require("../controllers/aiController");

router.post("/description", generateProductDescription);
router.post("/ingredient-benefits", generateIngredientBenefits);
router.post("/product-label", generatePackagingLabel);

module.exports = router;
