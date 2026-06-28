import React from "react";
import { X } from "lucide-react";

const ViewModal = ({ isOpen, onClose, item }) => {

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-[700px] max-w-[95%] p-6">

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-2xl font-bold">
            {item.productName}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="space-y-3">

          <p>
            <span className="font-semibold">Brand:</span>{" "}
            {item.brandName}
          </p>

          <p>
            <span className="font-semibold">Category:</span>{" "}
            {item.category}
          </p>

          <p>
            <span className="font-semibold">Weight:</span>{" "}
            {item.weight}
          </p>

          <hr />

          <h3 className="font-semibold text-lg">
            Generated Description
          </h3>

          <textarea
            readOnly
            rows={12}
            value={item.generatedContent}
            className="w-full border rounded-xl p-4 resize-none bg-gray-50"
          />

        </div>

      </div>

    </div>
  );
};

export default ViewModal;