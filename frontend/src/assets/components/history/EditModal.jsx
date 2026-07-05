import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { updateContent } from "../../services/api";

const EditModal = ({
  isOpen,
  item,
  onClose,
  fetchHistory,
  setToast,
}) => {
  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    category: "",
    ingredients: "",
    weight: "",
    highlights: "",
    audience: "",
    tone: "",
    length: "",
    language: "",
    generatedContent: "",
  });

  useEffect(() => {
    if (item) {
      setFormData(item);
    }
  }, [item]);

  if (!isOpen || !item) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updateContent(item._id, formData);

      setToast({
        show: true,
        type: "success",
        message: "Description updated successfully.",
      });

      fetchHistory();
      onClose();

    } catch (error) {

      setToast({
        show: true,
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to update description.",
      });

    }
  };

  const inputClass =
    "w-full border rounded-lg p-2 text-sm";

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-[700px] max-w-[95%] p-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">
            Edit Product Description
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Product Name"
            className={inputClass}
          />

          <input
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            placeholder="Brand Name"
            className={inputClass}
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className={inputClass}
          />

          <input
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Weight"
            className={inputClass}
          />

        </div>

        <textarea
          rows={4}
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          placeholder="Ingredients"
          className="w-full border rounded-lg p-2 mt-4"
        />

        <textarea
          rows={4}
          name="highlights"
          value={formData.highlights}
          onChange={handleChange}
          placeholder="Highlights"
          className="w-full border rounded-lg p-2 mt-4"
        />

        <textarea
          rows={8}
          name="generatedContent"
          value={formData.generatedContent}
          onChange={handleChange}
          placeholder="Generated Description"
          className="w-full border rounded-lg p-2 mt-4"
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            className="px-6 py-2 rounded-lg bg-green-600 text-white"
          >
            Update
          </button>

        </div>

      </div>

    </div>
  );
};

export default EditModal;