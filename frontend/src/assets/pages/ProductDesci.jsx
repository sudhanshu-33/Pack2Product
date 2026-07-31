import React, { useState } from "react";
import ProductForm from "../components/dashboard/ProductDescriptionCompo/ProductForm"
import GeneratedOutput from "../components/dashboard/ProductDescriptionCompo/GeneratedOutput";
import Loader from "../components/ui/Loader"
import Toast from "../components/ui/Toast";

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