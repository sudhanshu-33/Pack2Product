const { generateContent } = require("../services/geminiService");

const generateProductDescription = async (req, res) => {
  try {
    const {
      productName,
      ingredients,
      features,
      tone,
    } = req.body;

    const prompt = `
You are a professional food product copywriter.

Generate an SEO-friendly product description.

Product Name:
${productName}

Ingredients:
${ingredients}

Features:
${features}

Tone:
${tone}

Return only the product description.
`;

    const response = await generateContent(prompt);

    res.status(200).json({
      success: true,
      content: response,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "AI generation failed",
      error: error.message,
    });
  }
};

module.exports = {
  generateProductDescription,
};