import React from "react";

export default function ContentTip() {
  return (
    <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800 p-5 flex flex-col gap-3 h-full">
      <div className="flex items-center gap-2">
        <span className="text-lg">💡</span>
        <h3 className="font-semibold text-gray-900 dark:text-white">Content Tip</h3>
      </div>
      <div className="h-1 w-8 rounded-full bg-green-500" />
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Mention key ingredients and unique product features to help customers understand your product better.
      </p>
      <div className="mt-auto flex justify-end">
        <div className="relative">
          <div className="h-16 w-24 rounded-lg bg-green-200 dark:bg-green-800 flex items-center justify-center">
            <span className="text-2xl">🌿</span>
          </div>
          <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-sm">✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}