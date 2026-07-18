const { generateContent } = require("../services/geminiService");

const generateProductDescription = async (req, res) => {
  try {
    const {
    productName,
  brandName,
  category,
  ingredients,
  weight,
  highlights,
  audience,
  tone,
  length,  
    } = req.body;
    if (
  !productName ||
  !brandName ||
  !category ||
  !ingredients ||
  !weight ||
  !highlights
) {
  return res.status(400).json({
    success: false,
    message: "Please fill all required fields.",
  });
}

 const prompt = `
You are an expert food product copywriter and SEO specialist.

Generate a professional, SEO-friendly product description for an e-commerce website.

Product Details:
- Product Name: ${productName}
- Brand Name: ${brandName}
- Category: ${category}
- Ingredients: ${ingredients}
- Net Weight: ${weight}
- Product Highlights: ${highlights}
- Target Audience: ${audience || "General Consumers"}
- Tone: ${tone || "Professional"}
- Description Length: ${length || "Medium"}


Instructions:
1. Write an engaging and persuasive product description.
2. Highlight the product's key benefits and unique selling points.
3. Use simple, customer-friendly language.
4. Optimize the content for SEO.
5. Do NOT use Markdown, headings, bullet points, or numbering.
6. Return only the final product description.
7. Do not include introductions, explanations, notes, or phrases like "Here is your product description."
8. Do not use Markdown, headings, bullet points, or numbering.

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