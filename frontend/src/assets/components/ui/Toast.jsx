import React, { useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";

export default function Toast({
  message,
  type = "success",
  onClose,
  duration = 3000,
}) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  const styles = {
    success: {
      bg: "bg-green-50 border-green-200",
      text: "text-green-800",
      icon: "text-green-500",
      Icon: CheckCircle,
    },
    error: {
      bg: "bg-red-50 border-red-200",
      text: "text-red-800",
      icon: "text-red-500",
      Icon: XCircle,
    },
    warning: {
      bg: "bg-yellow-50 border-yellow-200",
      text: "text-yellow-800",
      icon: "text-yellow-500",
      Icon: AlertCircle,
    },
  };

  const current = styles[type] || styles.success;

  return (
    <div
      className={`fixed top-5 right-5 z-[9999] flex items-center gap-3 rounded-xl border px-4 py-3 shadow-lg transition-all duration-300 ${current.bg}`}
    >
      <current.Icon className={`h-5 w-5 ${current.icon}`} />

      <p className={`text-sm font-medium ${current.text}`}>
        {message}
      </p>

      <button
        onClick={onClose}
        className={`${current.text} opacity-60 hover:opacity-100 transition`}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}