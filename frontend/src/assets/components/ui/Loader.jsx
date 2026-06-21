import React from "react";

/**
 * @component Loader
 * @param {"sm"|"md"|"lg"} size - Spinner size
 * @param {boolean} fullScreen - Covers the entire screen with a backdrop
 */
export default function Loader({ size = "md", fullScreen = false }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-4",
    lg: "h-12 w-12 border-4",
  };

  const spinner = (
    <div
      className={`animate-spin rounded-full border-orange-200 border-t-orange-500 ${sizes[size]}`}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-gray-900/70">
        {spinner}
      </div>
    );
  }

  return spinner;
}