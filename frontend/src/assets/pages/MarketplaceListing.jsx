import React, { useState } from "react";
import MarketplaceForm from "../components/dashboard/MarketplaceListingCompo/MarketplaceForm";
import MarketplaceOutput from "../components/dashboard/MarketplaceListingCompo/MarketplaceOutput";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function MarketplaceListing() {
  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    category: "",
    ingredients: "",
    weight: "",
    price: "",
    highlights: "",
    audience: "",
    tone: "",
    keywords: "",
  });

  const [listing, setListing] = useState("");
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

      <MarketplaceForm
        formData={formData}
        setFormData={setFormData}
        setListing={setListing}
        setLoading={setLoading}
        setToast={setToast}
      />
<MarketplaceOutput
  listing={listing}
  formData={formData}
  setListing={setListing}
  setToast={setToast}
  setLoading={setLoading}
/>

    </div>
  );
}

export default MarketplaceListing;
