import React, { useState } from "react";
import { RefreshCcw, Sparkles, FileText } from "lucide-react";

import { generateDescription } from "../../../services/api";

const ProductForm = ({ formData,
  setFormData,
  setDescription,
  setLoading,
  setToast, }) => {


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleGenerate = () => {
  //   setDescription(
  //     "Generated description will appear here after connecting the backend."
  //   );
  // };

 const handleGenerate = async () => {
      if (
  !formData.productName ||
  !formData.brandName ||
  !formData.category ||
  !formData.ingredients ||
  !formData.weight ||
  !formData.highlights
) {
  setToast({
    show: true,
    type: "warning",
    message: "Please fill all required fields.",
  });

  return;
}
  try {

    setLoading(true);

    const { data } = await generateDescription(formData);

    setDescription(data.content);

    setToast({
      show: true,
      message: "Description generated successfully.",
      type: "success",
    });

  } catch (error) {

    setToast({
      show: true,
      message:
        error.response?.data?.message ||
        "Failed to generate description.",
      type: "error",
    });

  } finally {

    setLoading(false);

  }

};
  const handleClear = () => {
    setFormData({
      productName: "",
      brandName: "",
      category: "",
      ingredients: "",
      weight: "",
      highlights: "",
      audience: "",
      tone: "",
      length: "",
      language: "",
    });
    setDescription("");
    setToast({
  show: true,
  type: "success",
  message: "Form cleared successfully.",
});
  };

  const inputClass =
    "w-full rounded-xl border border-gray-300 dark:border-gray-400 bg-white dark:bg-white dark:text-black px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition";

  const selectClass =
    "w-full rounded-xl border border-gray-300 dark:border-gray-400 bg-white dark:bg-white dark:text-black px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 transition";

  const labelClass =
    "block text-sm font-medium text-gray-700 dark:text-gray-900 mb-1.5";

  return (
    <div className="bg-white dark:bg-gray-200 p-4 sm:p-6 md:p-8">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-6 sm:mb-8">
        <div>
          <div className="flex items-center  gap-2 mb-1">
            <FileText className="h-5 w-5 sm:h-6 sm:w-6  text-green-600 shrink-0" />
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-grey-900">
              Product Description Generator
            </h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-600 mt-1">
            Generate SEO-friendly product descriptions that attract customers
            and boost sales.
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="p-4 sm:p-5 border border-gray-100 bg-white rounded-2xl">
        {/* Section title */}
        <div className="flex items-center gap-1 mb-5 sm:mb-6">
          <div className="h-8 w-8  flex items-center justify-center shrink-0">
            <FileText className="h-4 w-4 text-green-600" />
          </div>
          <h2 className="text-base font-semibold text-gray-900 dark:text-grey-900">
            Product Information
          </h2>
        </div>

        {/* Row 1 — Product Name & Brand Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className={labelClass}>
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Organic Honey"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Brand Name <span className="text-red-500">*</span>
            </label>
            <input
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              placeholder="Nature Fresh"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Product Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>Select category</option>
              <option value="honey">Honey</option>
              <option value="spices">Spices</option>
              <option value="snacks">Snacks</option>
              <option value="beverages">Beverages</option>
              <option value="dairy">Dairy</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Net Weight <span className="text-red-500">*</span>
            </label>
            <input
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="500g"
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 2 — Textareas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div>
            <label className={labelClass}>
              Ingredients <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={6}
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              maxLength={300}
              placeholder="100% Raw Organic Honey"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-400 bg-white dark:bg-white dark:text-black px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 resize-none transition"
            />
            <p className="text-xs text-gray-400 text-right mt-1">
              {formData.ingredients.length}/300
            </p>
          </div>

          <div>
            <label className={labelClass}>
              Product Highlights <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={6}
              name="highlights"
              value={formData.highlights}
              onChange={handleChange}
              maxLength={300}
              placeholder={"• 100% Natural\n• No Preservatives\n• Rich In Antioxidants\n• Premium Quality"}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-400 bg-white dark:bg-white text-black px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 resize-none transition"
            />
            <p className="text-xs text-gray-400 text-right mt-1">
              {formData.highlights.length}/300
            </p>
          </div>
        </div>

        {/* Row 3 — Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div>
            <label className={labelClass}>Target Audience</label>
            <select
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>Select audience</option>
              <option value="health">Health Conscious</option>
              <option value="kids">Kids & Families</option>
              <option value="athletes">Athletes</option>
              <option value="seniors">Seniors</option>
              <option value="general">General</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Tone</label>
            <select
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>Select tone</option>
              <option value="premium">Premium</option>
              <option value="friendly">Friendly</option>
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Description Length</label>
            <select
              name="length"
              value={formData.length}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>Select length</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
          <button
            onClick={handleClear}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium text-black dark:text-black hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-white transition w-full sm:w-auto"
          >
            <RefreshCcw className="h-4 w-4 shrink-0" />
            Clear
          </button>

          <button
            onClick={handleGenerate}
            className="flex items-center justify-center gap-2 px-8 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition w-full sm:w-auto"
          >
            <Sparkles className="h-4 w-4 shrink-0" />
            Generate Description
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;