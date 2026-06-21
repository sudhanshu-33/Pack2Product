import React from "react";

/**
 * @component Button
 * @param {React.ReactNode} children - Button label/content
 * @param {"button"|"submit"|"reset"} type - HTML button type
 * @param {"primary"|"outline"|"ghost"|"danger"} variant - Visual style
 * @param {boolean} disabled - Disables the button
 * @param {string} className - Extra Tailwind classes
 * @param {function} onClick - Click handler
 */
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) {
  const base =
    "rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    outline:
      "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800",
    ghost:
      "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}