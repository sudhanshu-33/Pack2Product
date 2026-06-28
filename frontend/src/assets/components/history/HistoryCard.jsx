import React from "react";
import { Eye, Trash2, Calendar, Tag } from "lucide-react";
import { deleteContent } from "../../services/api";

const HistoryCard = ({
  item,
  fetchHistory,
  setToast,
  setSelectedItem,
  setOpenModal,
}) => {

  const handleDelete = async () => {
    try {
      await deleteContent(item._id);

      fetchHistory();

      setToast({
        show: true,
        type: "success",
        message: "Description deleted successfully.",
      });

    } catch (error) {
      setToast({
        show: true,
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to delete description.",
      });
    }
  };

  const handleView = () => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-shadow flex flex-col">

      <div className="p-5 flex flex-col flex-1">

        {/* Header */}
        <div className="flex items-start justify-between gap-3">

          <div className="flex-1">

            <h2 className="text-lg font-semibold text-gray-900">
              {item.productName}
            </h2>

            <div className="flex items-center gap-2 mt-1">
              <Tag size={13} className="text-gray-400" />
              <span className="text-sm text-gray-500">
                {item.brandName}
              </span>
            </div>

          </div>

          <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            Generated
          </span>

        </div>

        {/* Date */}
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
          <Calendar size={14} />
          {new Date(item.createdAt).toLocaleString()}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Description Preview */}
        <p className="text-sm text-gray-600 leading-6 line-clamp-4 flex-1">
          {item.generatedContent}
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <button
            onClick={handleView}
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
          >
            <Eye size={16} />
            View
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default HistoryCard;