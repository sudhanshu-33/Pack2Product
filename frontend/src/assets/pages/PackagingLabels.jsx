import React, { useState } from "react";
import PackagingLabelsForm from "../components/dashboard/packageLabelCombo/PackagingLabelsForm";
import PackagingLabelsOutput from "../components/dashboard/packageLabelCombo/PackagingLabelsOutput";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function PackagingLabels() {
  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    category: "",
    ingredients: "",
    weight: "",

    storage: "",
    mfgDate: "",

    bestBeforeType: "shelfLife",
    shelfLife: "",
    expiryDate: "",

    manufacturerName: "",
    manufacturerAddress: "",
    country: "",

    foodType: "Vegetarian",

    allergens: "",
    usage: "",
    disclaimer: "",
  });

  const [label, setLabel] = useState("");

  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  return (
    <div className="bg-gray-200 min-h-screen">
      {loading && <Loader fullScreen />}

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() =>
            setToast({
              show: false,
              message: "",
              type: "success",
            })
          }
        />
      )}

      <PackagingLabelsForm
        formData={formData}
        setFormData={setFormData}
        setLabel={setLabel}
        setLoading={setLoading}
        setToast={setToast}
      />

      <PackagingLabelsOutput
        label={label}
        formData={formData}
        setLabel={setLabel}
        setToast={setToast}
      />
    </div>
  );
}

export default PackagingLabels;