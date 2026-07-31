const express = require("express");

const router = express.Router();

const { generateProductDescription, generateIngredientBenefits, } = require("../controllers/aiController");

router.post("/description", generateProductDescription);
router.post("/ingredient-benefits", generateIngredientBenefits);

module.exports = router;
