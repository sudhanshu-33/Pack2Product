import React, { useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";

/**
 * @component Toast
 * @param {string} message - Text shown in the toast
 * @param {"success"|"error"|"warning"} type - Controls color and icon
 * @param {function} onClose - Called when toast is dismissed or timer ends
 * @param {number} duration - Auto-dismiss delay in ms (default 3000)
 */
export default function Toast({
  message,
  type = "success",
  onClose,
  duration = 3000,
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const styles = {
    success: {
      bg: "bg-green-50 border-green-200",
      text: "text-green-800",
      Icon: CheckCircle,
      iconColor: "text-green-500",
    },
    error: {
      bg: "bg-red-50 border-red-200",
      text: "text-red-800",
      Icon: XCircle,
      iconColor: "text-red-500",
    },
    warning: {
      bg: "bg-yellow-50 border-yellow-200",
      text: "text-yellow-800",
      Icon: AlertCircle,
      iconColor: "text-yellow-500",
    },
  };

  const { bg, text, Icon, iconColor } = styles[type];

 return (
  <div
    className={`fixed top-5 right-5 z-50 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-md animate-in slide-in-from-right duration-300 ${bg}`}
  >
    <Icon className={`h-5 w-5 ${iconColor}`} />

    <div>
      <p className={`text-sm font-semibold ${text}`}>
        {message}
      </p>
    </div>

    <button
      onClick={onClose}
      className={`${text} opacity-60 hover:opacity-100`}
    >
      <X className="h-4 w-4" />
    </button>
  </div>
);
}