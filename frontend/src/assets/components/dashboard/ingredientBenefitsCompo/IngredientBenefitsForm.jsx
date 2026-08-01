import { Sparkles, RotateCcw, Leaf, HelpCircle } from "lucide-react";
import { generateIngredientBenefits } from "../../../services/api";

const categories = ["Honey","Jam","Pickles","Spices","Snacks","Beverages","Bakery","Dairy","Tea","Coffee"];
const audiences = ["General Consumers","Children","Adults","Seniors","Athletes","Health Conscious"];
const tones = ["Professional","Friendly","Scientific","Educational"];

const IngredientBenefitsForm = ({
  formData,
  setFormData,
  loading,
  setLoading,
  setBenefits,
  setToast,
}) => {

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClear = () => {
    setFormData({
      productName: "",
      category: "",
      ingredients: "",
      targetAudience: "General Consumers",
      tone: "Professional",
    });
    setBenefits("");
    setToast({ show: false, type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await generateIngredientBenefits(formData);
      setBenefits(data.content);
      setToast({ show: true, type: "success", message: "Ingredient benefits generated successfully." });
    } catch (error) {
      setToast({
        show: true,
        type: "error",
        message: error.response?.data?.message || "Failed to generate ingredient benefits.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full rounded-xl border border-gray-700 bg-white px-4 py-2.5 text-sm text-gray-900 ";
  const selectClass = "w-full rounded-xl border border-gray-700 bg-white px-4 py-2.5 text-sm text-gray-900 ";
  const labelClass = "block text-sm font-medium text-gray-800 mb-1.5";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

      {/* Section header */}
      <div className="flex items-center gap-2 mb-8">
        <Leaf className="h-5 w-5 text-green-600" />
        <h2 className="text-base font-semibold text-gray-900">
          Product Information
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Product Name */}
          <div>
            <label className={labelClass}>
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="productName"
              placeholder="e.g. Organic Honey"
              value={formData.productName}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* Category */}
          <div>
            <label className={labelClass}>
              Product Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={selectClass}
            >
              <option value="">Select category</option>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Ingredients — full width */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-1.5">
              <label className={labelClass + " mb-0"}>
                Ingredients <span className="text-red-500">*</span>
              </label>
              <span className="text-xs text-gray-400">
                {formData.ingredients.length}/500
              </span>
            </div>
            <textarea
              rows={6}
              name="ingredients"
              placeholder="Example: Raw Honey, Ginger, Turmeric, Black Pepper"
              value={formData.ingredients}
              onChange={handleChange}
              maxLength={500}
              required
              className="w-full rounded-xl border border-gray-700 bg-white px-4 py-3 text-sm text-gray-900 "
            />
          </div>

          {/* Target Audience */}
          <div>
            <label className={labelClass}>Target Audience</label>
            <select
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select audience</option>
              {audiences.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className={labelClass}>Tone</label>
            <select
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select tone</option>
              {tones.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            type="button"
            onClick={handleClear}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium text-black dark:text-black hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-white transition w-full sm:w-auto active:scale-95"
          >
            <RotateCcw className="h-4 w-4" />
            Clear
          </button>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 px-8 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition w-full sm:w-auto active:scale-95"
          >
            <Sparkles className="h-4 w-4" />
            {loading ? "Generating..." : "Generate Benefits"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default IngredientBenefitsForm;