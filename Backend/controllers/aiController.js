const { generateContent } = require("../Services/geminiService");

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
  console.error("AI ERROR:");
  console.error(error);

  res.status(500).json({
    success: false,
    message: "AI generation failed",
    error: error.message,
  });
}
};
const generateIngredientBenefits = async (req, res) => {
  try {

    const {
      productName,
      category,
      ingredients,
      targetAudience,
      tone,
    } = req.body;

    if (!productName || !category || !ingredients) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

   const prompt = `
You are an expert food product content writer.

Generate concise ingredient benefits for an e-commerce product.

Product Details:
- Product Name: ${productName}
- Category: ${category}
- Ingredients: ${ingredients}
- Target Audience: ${targetAudience || "General Consumers"}
- Tone: ${tone || "Professional"}

Instructions:

1. List each ingredient separately.
2. Write EXACTLY 3 bullet points for each ingredient.
3. Each bullet must contain ONLY 3-8 words.
4. Do NOT write paragraphs.
5. Do NOT explain benefits.
6. Use simple marketing-friendly language.
7. Do NOT make medical claims.
8. Follow this format EXACTLY:

Raw Honey
• Natural energy source
• Rich in antioxidants
• Naturally sweet

Jaggery
• Traditional sweetener
• Natural mineral source
• Rich caramel flavor

Disclaimer:
For informational purposes only.

9. Return ONLY the final output.
`;

    const response = await generateContent(prompt);

    res.status(200).json({
      success: true,
      content: response,
    });

  } catch (error) {

    console.error("AI ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: "AI generation failed",
      error: error.message,
    });

  }
};

const generatePackagingLabel = async (req, res) => {
  try {
    const {
      productName,
      brandName,
      category,
      ingredients,
      weight,
      storage,
      mfgDate,
      bestBeforeType,
      shelfLife,
      expiryDate,
      manufacturerName,
      manufacturerAddress,
      country,
      foodType,
      allergens,
      usage,
      disclaimer,
    } = req.body;

    const prompt = `
You are an expert food packaging label writer.

Generate a professional Front Label and Back Label for a food product.

Product Information

Product Name: ${productName}
Brand Name: ${brandName}
Category: ${category}
Ingredients: ${ingredients}
Net Weight: ${weight}
Storage Instructions: ${storage}
Manufacturing Date: ${mfgDate}
Best Before: ${
  bestBeforeType === "shelfLife"
    ? shelfLife
    : expiryDate
}
Manufacturer Name: ${manufacturerName}
Manufacturer Address: ${manufacturerAddress}
Country of Origin: ${country}
Food Type: ${foodType}

Optional Information

Allergen Information: ${allergens}
Usage Instructions: ${usage}
Disclaimer: ${disclaimer}

Instructions:

1. Generate a professional packaging label.
2. Divide the output into FRONT LABEL and BACK LABEL.
3. Include all mandatory fields.
4. Optional fields (Allergen Information, Usage Instructions, Disclaimer) must be included ONLY if they contain a value.
5. If any optional field is empty, null, undefined, "Not Provided", or missing, completely omit that section.
6. Never print empty headings.
7. Never print "Not Provided", "N/A", or blank values.
8. Keep the formatting clean and easy to read.
9. Return only the final packaging label.
`;

    const response = await generateContent(prompt);

    res.status(200).json({
      success: true,
      content: response,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed to generate packaging label.",
      error: error.message,
    });

  }
};

const generateMarketplaceListing = async (req, res) => {
  try {
    const {
      productName,
      brandName,
      category,
      ingredients,
      weight,
      price,
      highlights,
      audience,
      tone,
      keywords,
    } = req.body;

    // Validate required fields
    if (
      !productName?.trim() ||
      !brandName?.trim() ||
      !category ||
      !weight?.trim() ||
      !highlights?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const prompt = `
You are an expert e-commerce marketplace listing writer and SEO specialist
for food products.

Create a professional, customer-friendly marketplace listing using the
following product information.

PRODUCT INFORMATION:

Product Name: ${productName}
Brand Name: ${brandName}
Category: ${category}
Net Weight: ${weight}
Price: ${price || "Not provided"}
Ingredients: ${ingredients || "Not provided"}
Product Highlights: ${highlights}
Target Audience: ${audience || "General Consumers"}
Writing Tone: ${tone || "Professional"}
SEO Keywords: ${keywords || "Generate relevant keywords"}

INSTRUCTIONS:

1. Create an attractive, SEO-friendly product title.
2. Write a persuasive product description.
3. Generate 5 key product features as bullet points.
4. Include important product highlights.
5. Generate 8-10 relevant search keywords.
6. Use the supplied product information accurately.
7. Naturally include relevant SEO keywords.
8. Use simple, clear and customer-friendly language.
9. Do not invent certifications, nutritional values, health benefits,
   ingredients, awards, or product specifications.
10. Do not make medical or misleading health claims.
11. Do not invent a product price if one is not provided.
12. Do not repeat unnecessary information.
13. Keep the listing suitable for general e-commerce marketplaces.

OUTPUT FORMAT:

PRODUCT TITLE:
[SEO-friendly title]

PRODUCT DESCRIPTION:
[Detailed product description]

KEY FEATURES:
• Feature 1
• Feature 2
• Feature 3
• Feature 4
• Feature 5

PRODUCT HIGHLIGHTS:
[Important product highlights]

SEARCH KEYWORDS:
[Keyword 1, Keyword 2, Keyword 3, ...]

Return only the final marketplace listing.
Do not include introductions or explanations.
`;

    const response = await generateContent(prompt);

    res.status(200).json({
      success: true,
      content: response,
    });

  } catch (error) {
    console.error("MARKETPLACE LISTING AI ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate marketplace listing.",
      error: error.message,
    });
  }
};

module.exports = {
  generateProductDescription,generateIngredientBenefits,generatePackagingLabel,  generateMarketplaceListing,
};