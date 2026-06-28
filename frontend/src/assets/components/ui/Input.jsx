import React from "react";

/**
 * @component Input
 * @param {string} label - Label shown above the field
 * @param {"text"|"email"|"password"|"number"} type - Input type
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Controlled value
 * @param {function} onChange - Change handler
 * @param {string} error - Error message shown below input
 * @param {React.ElementType} icon - Lucide icon component shown on the left
 */
export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-full border py-3 text-sm placeholder-gray-400 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none transition 
            ${Icon ? "pl-11 pr-4" : "px-4"}
            ${error ? "border-red-400" : "border-gray-200 dark:border-gray-700"}`}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}