import React from "react";
import { RefreshCcw, Sparkles, FileText, Package } from "lucide-react";
import { generatePackagingLabel } from "../../../services/api";

const PackagingLabelsForm = ({
  formData,
  setFormData,
  setLabel,
  setLoading,
  setToast,
}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    if (
      !formData.productName ||
      !formData.brandName ||
      !formData.category ||
      !formData.ingredients ||
      !formData.weight ||
      !formData.storage ||
      !formData.mfgDate ||
      !formData.manufacturerName ||
      !formData.manufacturerAddress ||
      !formData.country ||
      !(
        (formData.bestBeforeType === "shelfLife" && formData.shelfLife) ||
        (formData.bestBeforeType === "expiryDate" && formData.expiryDate)
      )
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
      const { data } = await generatePackagingLabel(formData);
      setLabel(data.content);
      setToast({
        show: true,
        message: "Packaging label generated successfully",
        type: "success",
      });
    } catch (error) {
      setToast({
        show: true,
        message:
          error.response?.data?.message || "Failed to generate packaging label",
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
      storage: "",
      mfgDate: "",
      bestBeforeType: "shelfLife",
      shelfLife: "",
      expiryDate: "",
      manufacturerName: "",
      manufacturerAddress: "",
      country: "",
      foodType: "Vegetarian",
      allergens: "",
      usage: "",
      disclaimer: "",
    });
    setLabel("");
    setToast({
      show: true,
      type: "success",
      message: "Form cleared successfully.",
    });
  };

  const inputClass =
    "w-full rounded-xl border border-gray-700 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition";
  const selectClass =
    "w-full rounded-xl border border-gray-700 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none appearance-none transition";
  const textareaClass =
    "w-full rounded-xl border border-gray-700 bg-white px-4 py-3 text-sm text-gray-900 outline-none resize-none transition";
  const labelClass = "block text-sm font-medium text-gray-800 mb-1.5";

  const SectionTitle = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-2 mb-6">
      <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-green-600" />
      </div>
      <h2 className="text-base font-semibold text-gray-900">{title}</h2>
    </div>
  );

  return (
    <div className="bg-gray-50 p-4 md:p-6">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-6">
        <Package className="h-6 w-6 text-green-600 shrink-0" />
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Packaging Label Generator
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Generate professional front and back packaging labels ready for food
            products.
          </p>
        </div>
      </div>

      {/* Product Information Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <SectionTitle icon={FileText} title="Product Information" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              <option value="" disabled>
                Select category
              </option>
              {[
                "Honey",
                "Jam",
                "Pickles",
                "Spices",
                "Snacks",
                "Beverages",
                "Bakery",
                "Dairy",
                "Tea",
                "Coffee",
              ].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
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

          <div className="sm:col-span-2">
            <div className="flex justify-between items-center mb-1.5">
              <label className={labelClass + " mb-0"}>
                Ingredients <span className="text-red-500">*</span>
              </label>
              <span className="text-xs text-gray-400">
                {formData.ingredients.length}/300
              </span>
            </div>
            <textarea
              rows={5}
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              maxLength={300}
              placeholder="100% Raw Organic Honey"
              className={textareaClass}
            />
          </div>
        </div>
      </div>

      {/* Packaging Details Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-6">
        <SectionTitle icon={Package} title="Packaging Details" />

        <div className="flex flex-col gap-6">
          <div>
            <label className={labelClass}>
              Storage Instructions <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              name="storage"
              value={formData.storage}
              onChange={handleChange}
              placeholder="Store in a cool and dry place."
              className={textareaClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Manufacturing Date (MFG) <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="mfgDate"
              value={formData.mfgDate}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Best Before */}
          <div>
            <label className={labelClass}>
              Best Before <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="bestBeforeType"
                  value="shelfLife"
                  checked={formData.bestBeforeType === "shelfLife"}
                  onChange={handleChange}
                />
                Shelf Life
              </label>
              {formData.bestBeforeType === "shelfLife" && (
                <input
                  type="text"
                  name="shelfLife"
                  value={formData.shelfLife}
                  onChange={handleChange}
                  placeholder="12 Months"
                  className={inputClass}
                />
              )}
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="bestBeforeType"
                  value="expiryDate"
                  checked={formData.bestBeforeType === "expiryDate"}
                  onChange={handleChange}
                />
                Expiry Date
              </label>
              {formData.bestBeforeType === "expiryDate" && (
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className={inputClass}
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>
                Manufacturer Name <span className="text-red-500">*</span>
              </label>
              <input
                name="manufacturerName"
                value={formData.manufacturerName}
                onChange={handleChange}
                placeholder="Nature Fresh Foods"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Country of Origin <span className="text-red-500">*</span>
              </label>
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>
              Manufacturer Address <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              name="manufacturerAddress"
              value={formData.manufacturerAddress}
              onChange={handleChange}
              placeholder="Patna, Bihar, India"
              className={textareaClass}
            />
          </div>

          {/* Food Type */}
          <div>
            <label className={labelClass}>
              Food Type <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-5 mt-2">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="foodType"
                  value="Vegetarian"
                  checked={formData.foodType === "Vegetarian"}
                  onChange={handleChange}
                />
                🟢 Vegetarian
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="foodType"
                  value="Non-Vegetarian"
                  checked={formData.foodType === "Non-Vegetarian"}
                  onChange={handleChange}
                />
                🔴 Non-Vegetarian
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-6">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-base font-semibold text-gray-900">
            Additional Information
          </h2>
          <span className="text-xs text-gray-400 font-normal">(Optional)</span>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className={labelClass}>Allergen Information</label>
            <textarea
              rows={3}
              name="allergens"
              value={formData.allergens}
              onChange={handleChange}
              placeholder="Allergen Information"
              className={textareaClass}
            />
          </div>
          <div>
            <label className={labelClass}>Usage Instructions</label>
            <textarea
              rows={3}
              name="usage"
              value={formData.usage}
              onChange={handleChange}
              placeholder="Usage Instructions"
              className={textareaClass}
            />
          </div>
          <div>
            <label className={labelClass}>Disclaimer</label>
            <textarea
              rows={3}
              name="disclaimer"
              value={formData.disclaimer}
              onChange={handleChange}
              placeholder="Disclaimer"
              className={textareaClass}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={handleClear}
          className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition w-full sm:w-auto active:scale-95"
        >
          <RefreshCcw className="h-4 w-4" />
          Clear
        </button>

        <button
          onClick={handleGenerate}
          className="flex items-center justify-center gap-2 px-8 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition w-full sm:w-auto active:scale-95"
        >
          <Sparkles className="h-4 w-4" />
          Generate Label
        </button>
      </div>
    </div>
  );
};

export default PackagingLabelsForm;
