
const express = require("express");

const router = express.Router();

const {
  generateProductDescription,
  generateIngredientBenefits,
  generatePackagingLabel,
  generateMarketplaceListing,
} = require("../controllers/aiController");

router.post("/description", generateProductDescription);
router.post("/ingredient-benefits", generateIngredientBenefits);
router.post("/product-label", generatePackagingLabel);
router.post("/marketplace-listing", generateMarketplaceListing);

module.exports = router;
