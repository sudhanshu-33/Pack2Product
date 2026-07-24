import React from "react";
import { useState } from "react";
import { Copy, RefreshCcw, Save, Sparkles, CircleCheckBig } from "lucide-react";
import { saveDescription } from "../../../services/api";
const GeneratedOutput = ({
  description,
  formData,
  setDescription,
  setToast,
}) => {
  
  
  // const handleCopy = () => {
  //   if (!description) return;
  //   navigator.clipboard.writeText(description);
  //   alert("Description copied successfully!");
  // };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(description);

      setToast({
        show: true,
        type: "success",
        message: "Description copied to clipboard.",
      });
    } catch {
      setToast({
        show: true,
        type: "error",
        message: "Failed to copy description.",
      });
    }
  };
  // const handleSave = () => {
  //   if (!description) return;
  //   alert("Description saved successfully!");
  // };

  const handleSave = async () => {

  if (!description) return;

  try {

    await saveDescription({
      ...formData,
      generatedContent: description,
    });

    setToast({
      show: true,
      type: "success",
      message: "Product description saved successfully.",
    });
    setDescription("");
  } catch (error) {

    setToast({
      show: true,
      type: "error",
      message:
        error.response?.data?.message ||
        "Failed to save product description.",
    });

  }

};
  const handleRegenerate = () => {
    if (!description) return;
    setDescription(`Nature Fresh Organic Honey is a premium-quality natural sweetener prepared from 100% pure raw honey. It delivers a rich aroma, smooth texture, and authentic taste, making it ideal for tea, desserts, baking, and daily consumption.

Carefully packed to preserve freshness, this honey contains no artificial colours or preservatives. A healthy choice for families seeking natural sweetness with premium quality.

Net Weight: 500g
Brand: Nature Fresh`);
  };

  return (
    <div className="bg-gray-200 shadow-lg p-4 sm:p-6 md:p-8 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Sparkles className="text-green-600 shrink-0" size={24} />
          <h2 className="text-lg font-bold text-black dark:text-black">
            Generated Product Description
          </h2>
        </div>
        {description && (
          <span className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs font-medium">
            <CircleCheckBig size={14} />
            Generated
          </span>
        )}
      </div>

      {/* Output area */}
      {description ? (
        <div>
          <textarea
            readOnly
            value={description}
            rows={10}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 p-5 resize-none bg-white dark:bg-white dark:text-black text-sm outline-none"
          />
          <p className="text-xs text-gray-400 text-right mt-1">
            {description.length}/2000
          </p>
        </div>
      ) : (
        <div className="h-64 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-white flex flex-col items-center justify-center gap-3 px-4">
          <Sparkles size={40} className="text-green-500" />
          <h3 className="text-base font-semibold text-gray-700 dark:text-black">
            No Description Generated
          </h3>
          <p className="text-sm text-gray-900 dark:text-gray-900 text-center max-w-sm">
            Fill in the product information above and click{" "}
            <span className="font-semibold">Generate Description</span> to
            create an SEO-friendly product description.
          </p>
        </div>
      )}

      {/* Action buttons */}
      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <button
          onClick={handleCopy}
          disabled={!description}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium text-black dark:text-black hover:bg-gray-50 dark:hover:bg-gray-700 transition hover:text-white"
        >
          <Copy className="h-4 w-4" />
          Copy
        </button>

        <button
          onClick={handleRegenerate}
          disabled={!description}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium text-black dark:text-black hover:bg-gray-50 dark:hover:bg-gray-700 transition hover:text-white"
        >
          <RefreshCcw className="h-4 w-4" />
          Regenerate
        </button>

        <button
          onClick={handleSave}
          disabled={!description}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition"
        >
          <Save className="h-4 w-4" />
          Save Description
        </button>
      </div>

      {/* Tip */}
      <div className="mt-6 bg-green-50 dark:bg-[#14532D] rounded-xl p-5">
        <h3 className="font-semibold text-green-700 dark:text-green-300 text-sm">
          💡 Tip
        </h3>
        <p className="mt-1.5 text-sm text-green-600 dark:text-green-200">
          Provide accurate product details, ingredients, and highlights to
          generate more engaging and SEO-friendly descriptions.
        </p>
      </div>
    </div>
  );
};

export default GeneratedOutput;
