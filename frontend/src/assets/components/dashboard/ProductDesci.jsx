import React, { useState } from "react";
import ProductForm from "../dashboard/dashboardCompo/ProductForm";
import GeneratedOutput from "../dashboard/dashboardCompo/GeneratedOutput";
import Loader from "../ui/Loader";
import Toast from "../ui/Toast";

function ProductDescription() {
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
});
  const [description, setDescription] = useState("");

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

      <ProductForm
  formData={formData}
  setFormData={setFormData}
  setDescription={setDescription}
  setLoading={setLoading}
  setToast={setToast}
/>

<GeneratedOutput
  description={description}
  formData={formData}
  setDescription={setDescription}
  setToast={setToast}
/>

     

    </div>
  );
}

export default ProductDescription;