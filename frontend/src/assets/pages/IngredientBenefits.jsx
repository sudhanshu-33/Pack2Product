import { useState } from "react";
import { Leaf } from "lucide-react";
import IngredientBenefitsForm from "../components/dashboard/ingredientBenefitsCompo/IngredientBenefitsForm";
import IngredientBenefitsOutput from "../components/dashboard/ingredientBenefitsCompo/IngredientBenefitsResult";

const IngredientBenefits = () => {
  const [benefits, setBenefits] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    ingredients: "",
    targetAudience: "General Consumers",
    tone: "Professional",
  });

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  return (
    <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-200 min-h-full">

      {/* Page Header — outside the card, matches screenshot */}
      <div className="flex items-center gap-3 mb-6">
        <Leaf className="h-7 w-7 text-green-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-black">
            Ingredient Benefits Generator
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-700 mt-0.5">
            Generate professional ingredient benefit summaries for your food products using AI.
          </p>
        </div>
      </div>

      {/* Form */}
      <IngredientBenefitsForm
        formData={formData}
        setFormData={setFormData}
        benefits={benefits}
        setBenefits={setBenefits}
        loading={loading}
        setLoading={setLoading}
        setToast={setToast}
      />

      {/* Output */}
      <IngredientBenefitsOutput
        benefits={benefits}
        formData={formData}
        setBenefits={setBenefits}
        setToast={setToast}
      />

    </div>
  );
};

export default IngredientBenefits;