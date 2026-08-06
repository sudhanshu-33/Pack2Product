# Prompt Engineering Log

## Project

Pack2Product – AI-Powered Food Product Content Generator

## AI Model

Google Gemini 3.5 Flash

---

# Feature 1 – Product Description Generator

## Prompt Version 1

### Prompt

Generate a product description for the following product.

Product Name: Organic Honey

Ingredients: 100% Raw Honey

Tone: Professional

### Output

Generated a basic product description, but it was too short and lacked persuasive language and SEO optimization.

---

## Prompt Version 2

### Prompt

Generate a professional product description for an e-commerce website.

Product Details:

- Product Name: Organic Honey
- Brand Name: Nature Fresh
- Category: Honey
- Ingredients: 100% Raw Organic Honey
- Weight: 500g
- Highlights: Natural, No Sugar Added

Requirements:

- Make it engaging.
- Mention product benefits.
- Use professional language.

### Output

The generated description became more detailed and persuasive but occasionally included introductory text such as "Here's your product description."

---

## Prompt Version 3 (Final)

### Prompt

You are an expert food product copywriter and SEO specialist.

Generate a professional, SEO-friendly product description for an e-commerce website.

Product Details:

- Product Name
- Brand Name
- Category
- Ingredients
- Net Weight
- Product Highlights
- Target Audience
- Tone
- Description Length

Instructions:

1. Write an engaging and persuasive product description.
2. Highlight the product's key benefits and unique selling points.
3. Use simple, customer-friendly language.
4. Optimize the content for SEO.
5. Return only the final product description.
6. Do not include introductions, explanations, notes, or phrases like "Here is your product description."
7. Do not use Markdown, headings, bullet points, or numbering.

### Output

Generated professional, SEO-friendly product descriptions that are ready for direct use on e-commerce platforms.

---

# Feature 2 – Ingredient Benefits Generator

## Prompt

You are an expert food nutrition content writer.

Generate concise ingredient benefits for a food product.

### Product Details

- Product Name
- Category
- Ingredients
- Target Audience
- Tone

### Instructions

1. List each ingredient separately.
2. Write exactly three bullet points for each ingredient.
3. Keep every bullet between 3 and 8 words.
4. Use simple, customer-friendly language.
5. Do not write paragraphs.
6. Do not make medical claims.
7. End with:

Disclaimer: For informational purposes only.

8. Return only the final output.

### Output

Generated concise ingredient benefit summaries suitable for product pages, packaging, and marketing materials while avoiding unsupported health claims.

---

# Feature 3 – Packaging Label Generator

## Prompt

You are an expert food packaging label writer.

Generate a professional Front Label and Back Label for a food product.

### Product Details

- Product Name
- Brand Name
- Category
- Ingredients
- Net Weight
- Storage Instructions
- Manufacturing Date
- Best Before
- Manufacturer Name
- Manufacturer Address
- Country of Origin
- Food Type
- Optional Information (Allergens, Usage Instructions, Disclaimer)

### Instructions

1. Generate separate FRONT LABEL and BACK LABEL sections.
2. Include all mandatory product information.
3. Include optional fields only when values are provided.
4. Never display empty headings or "Not Provided."
5. Keep the formatting clean and easy to read.
6. Return only the final packaging label.

### Output

Generated realistic packaging labels with professionally formatted front and back sections while automatically omitting empty optional fields.

---

# Prompt Engineering Techniques Used

The prompts were refined using the following techniques:

- Role-based prompting (expert copywriter, nutrition writer, packaging specialist).
- Structured product information.
- Clear formatting instructions.
- Output constraints to avoid unnecessary text.
- SEO optimization guidelines.
- Customer-friendly language.
- Prevention of unsupported medical claims.
- Conditional handling of optional fields.
- Direct output without Markdown or explanations.
- Consistent response formatting for frontend integration.

---

# Prompt Optimization Process

The prompts were iteratively improved by:

- Increasing context provided to the AI.
- Defining clear output expectations.
- Eliminating unwanted introductory responses.
- Standardizing formatting across all AI modules.
- Improving readability for end users.
- Optimizing outputs for direct use without post-processing.

---

# Final Result

The final prompt designs produce consistent, professional, and production-ready AI-generated content across all three modules. The generated outputs require minimal editing before being displayed in the Pack2Product application, providing a better user experience and improving overall content quality.

---

# System Roles Used

### Product Description Generator

Expert food product copywriter and SEO specialist.

### Ingredient Benefits Generator

Expert food nutrition content writer.

### Packaging Label Generator

Expert food packaging label writer.