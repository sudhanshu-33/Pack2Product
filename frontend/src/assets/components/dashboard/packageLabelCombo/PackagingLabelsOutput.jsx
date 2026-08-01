import React from "react";
import { useState } from "react";
import { Copy, RefreshCcw, Save, Sparkles, CircleCheckBig } from "lucide-react";
import { saveDescription,generatePackagingLabel } from "../../../services/api";
const PackagingLabelsOutput = ({
label,
formData,
setLabel,
setToast,
}) => {
  
  
  // const handleCopy = () => {
  //   if (!description) return;
  //   navigator.clipboard.writeText(description);
  //   alert("Description copied successfully!");
  // };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(label);

      setToast({
        show: true,
        type: "success",
        message: "Packaging label copied successfully.",
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

  if (!label) return;

  try {

    await saveDescription({
      ...formData,
      generatedContent: label,
      type: "Packaging Labels",
    });

    setToast({
      show: true,
      type: "success",
      message: "Packaging label saved successfully.",
    });
    setLabel("");
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
  const handleRegenerate = async () => {
  if (!label) return;

  try {
    const { data } = await generatePackagingLabel(formData);

    setLabel(data.content);

    setToast({
      show: true,
      type: "success",
      message: "Packaging label regenerated successfully.",
    });

  } catch (error) {
    setToast({
      show: true,
      type: "error",
      message:
        error.response?.data?.message ||
        "Failed to regenerate packaging label.",
    });
  }
};

  return (
    <div className="bg-gray-200 shadow-lg p-4 sm:p-6 md:p-8 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Sparkles className="text-green-600 shrink-0" size={24} />
          <h2 className="text-lg font-bold text-black dark:text-black">
           Generated Packaging Label
          </h2>
        </div>
        {label && (
          <span className="flex items-center gap-1.5 bg-green-100 dark:bg-green-700 text-green-700 dark:text-white px-3 py-1.5 rounded-full text-xs font-medium">
            <CircleCheckBig size={14} />
            Generated
          </span>
        )}
      </div>

      {/* Output area */}
      {label ? (
        <div>
          <textarea
            readOnly
            value={label}
            rows={10}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 p-5 resize-none bg-white dark:bg-white dark:text-black text-sm outline-none"
          />
          <p className="text-xs text-gray-400 text-right mt-1">
            {label.length}/2000
          </p>
        </div>
      ) : (
        <div className="h-64 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-white flex flex-col items-center justify-center gap-3 px-4">
          <Sparkles size={40} className="text-green-500" />
          <h3 className="text-base font-semibold text-gray-700 dark:text-black">
            No Packaging Label Generated
          </h3>
          <p className="text-sm text-gray-900 dark:text-gray-900 text-center max-w-sm">
            Fill in the product information above and click{" "}
            <span className="font-semibold">Generate Description</span> to
            generate a professional front and back packaging label.
          </p>
        </div>
      )}

      {/* Action buttons */}
      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <button
          onClick={handleCopy}
          disabled={!label}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium text-black dark:text-black hover:bg-gray-50 dark:hover:bg-gray-700 transition hover:text-white active:scale-95"
        >
          <Copy className="h-4 w-4" />
          Copy
        </button>

        <button
          onClick={handleRegenerate}
          disabled={!label}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium text-black dark:text-black hover:bg-gray-50 dark:hover:bg-gray-700 transition hover:text-white active:scale-95"
        >
          <RefreshCcw className="h-4 w-4" />
          Regenerate
        </button>

        <button
          onClick={handleSave}
          disabled={!label}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition active:scale-95"
        >
          <Save className="h-4 w-4" />
          Save label
        </button>
      </div>

      {/* Tip */}
      <div className="mt-6 bg-green-50 dark:bg-[#14532D] rounded-xl p-5">
        <h3 className="font-semibold text-green-700 dark:text-green-300 text-sm">
          💡 Tip
        </h3>
        <p className="mt-1.5 text-sm text-green-600 dark:text-green-200">
          Provide complete product, manufacturer, and packaging details to generate a professional packaging label ready for printing.
        </p>
      </div>
    </div>
  );
};

export default PackagingLabelsOutput;
