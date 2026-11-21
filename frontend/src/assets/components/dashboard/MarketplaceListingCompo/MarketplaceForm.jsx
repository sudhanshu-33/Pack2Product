
import React from "react";
import { RefreshCcw, Sparkles, ShoppingBag } from "lucide-react";
import { generateMarketplaceListing } from "../../../services/api";

const MarketplaceForm = ({
  formData,
  setFormData,
  setListing,
  setLoading,
  setToast,
}) => {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = async () => {
    if (
      !formData.productName.trim() ||
      !formData.brandName.trim() ||
      !formData.category ||
      !formData.weight.trim() ||
      !formData.highlights.trim()
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

      const { data } = await generateMarketplaceListing(formData);

      setListing(data.content);

      setToast({
        show: true,
        type: "success",
        message: "Marketplace listing generated successfully.",
      });

    } catch (error) {
      setToast({
        show: true,
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to generate marketplace listing.",
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
      price: "",
      highlights: "",
      audience: "",
      tone: "",
      keywords: "",
    });

    setListing("");

    setToast({
      show: true,
      type: "success",
      message: "Form cleared successfully.",
    });
  };

  const inputClass =
    "w-full rounded-xl border border-gray-300 dark:border-gray-400 bg-white dark:bg-white dark:text-black px-4 py-2.5 text-sm";

  const selectClass =
    "w-full rounded-xl border border-gray-300 dark:border-gray-400 bg-white dark:bg-white dark:text-black px-4 py-2.5 text-sm";

  const labelClass =
    "block text-sm font-medium text-gray-700 dark:text-gray-900 mb-1.5";

  return (
    <div className="bg-white dark:bg-gray-200 p-4 sm:p-6 md:p-8">

      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 mb-1">
          <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Marketplace Listing Generator
          </h1>
        </div>

        <p className="text-sm sm:text-md text-gray-700 mt-1">
          Create SEO-friendly marketplace listings that showcase your food
          products and attract potential customers.
        </p>
      </div>

      {/* Form Card */}
      <div className="p-4 sm:p-5 border border-gray-100 bg-white rounded-2xl">

        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-5 sm:mb-6">
          <ShoppingBag className="h-5 w-5 text-green-600" />

          <h2 className="text-base font-semibold text-gray-900">
            Product Information
          </h2>
        </div>

        {/* Row 1 */}
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
              <option value="Honey">Honey</option>
              <option value="Spices">Spices</option>
              <option value="Snacks">Snacks</option>
              <option value="Beverages">Beverages</option>
              <option value="Tea">Tea</option>
              <option value="Jam">Jam</option>
              <option value="Pickles">Pickles</option>
              <option value="Bakery">Bakery</option>
              <option value="Dairy">Dairy</option>
              <option value="Coffee">Coffee</option>
              <option value="Other">Other</option>
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

          <div>
            <label className={labelClass}>Product Price (Optional)</label>

            <input
              type="number"
              min="0"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="299"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Target Audience</label>

            <select
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select audience</option>
              <option value="Health Conscious">Health Conscious</option>
              <option value="Kids and Families">Kids & Families</option>
              <option value="Athletes">Athletes</option>
              <option value="Seniors">Seniors</option>
              <option value="General">General</option>
            </select>
          </div>

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">

          <div>
            <label className={labelClass}>Ingredients</label>

            <textarea
              rows={5}
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              maxLength={500}
              placeholder="100% Pure Raw Honey"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black"
            />

            <p className="text-xs text-gray-400 text-right mt-1">
              {formData.ingredients.length}/500
            </p>
          </div>

          <div>
            <label className={labelClass}>
              Product Highlights <span className="text-red-500">*</span>
            </label>

            <textarea
              rows={5}
              name="highlights"
              value={formData.highlights}
              onChange={handleChange}
              maxLength={500}
              placeholder={"100% Natural\nNo Added Preservatives\nPremium Quality"}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black"
            />

            <p className="text-xs text-gray-400 text-right mt-1">
              {formData.highlights.length}/500
            </p>
          </div>

        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">

          <div>
            <label className={labelClass}>SEO Keywords (Optional)</label>

            <input
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="organic honey, natural honey, raw honey"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Listing Tone</label>

            <select
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select tone</option>
              <option value="Professional">Professional</option>
              <option value="Premium">Premium</option>
              <option value="Friendly">Friendly</option>
              <option value="Persuasive">Persuasive</option>
              <option value="Simple">Simple</option>
            </select>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">

          <button
            type="button"
            onClick={handleClear}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-black hover:bg-gray-50 transition w-full sm:w-auto active:scale-95"
          >
            <RefreshCcw className="h-4 w-4" />
            Clear
          </button>

          <button
            type="button"
            onClick={handleGenerate}
            className="flex items-center justify-center gap-2 px-8 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition w-full sm:w-auto active:scale-95"
          >
            <Sparkles className="h-4 w-4" />
            Generate Listing
          </button>

        </div>

      </div>
    </div>
  );
};

export default MarketplaceForm;
