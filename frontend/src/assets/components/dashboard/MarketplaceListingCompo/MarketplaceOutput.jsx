
import React from "react";
import {
  Copy,
  RefreshCcw,
  Save,
  Sparkles,
  CircleCheckBig,
} from "lucide-react";

import {
  generateMarketplaceListing,
  saveDescription,
} from "../../../services/api";

const MarketplaceOutput = ({
  listing,
  formData,
  setListing,
  setToast,
  setLoading,
}) => {

  const handleCopy = async () => {
    if (!listing) return;

    try {
      await navigator.clipboard.writeText(listing);

      setToast({
        show: true,
        type: "success",
        message: "Marketplace listing copied successfully.",
      });

    } catch {
      setToast({
        show: true,
        type: "error",
        message: "Failed to copy marketplace listing.",
      });
    }
  };

  const handleSave = async () => {
    if (!listing) return;

    try {
      await saveDescription({
        ...formData,
        generatedContent: listing,
        type: "Marketplace Listing",
      });

      setToast({
        show: true,
        type: "success",
        message: "Marketplace listing saved successfully.",
      });

      setListing("");

    } catch (error) {
      setToast({
        show: true,
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to save marketplace listing.",
      });
    }
  };

  const handleRegenerate = async () => {
    if (!listing) return;

    try {
      setLoading(true);

      const { data } = await generateMarketplaceListing(formData);

      setListing(data.content);

      setToast({
        show: true,
        type: "success",
        message: "Marketplace listing regenerated successfully.",
      });

    } catch (error) {
      setToast({
        show: true,
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to regenerate marketplace listing.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 shadow-lg p-4 sm:p-6 md:p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div className="flex items-center gap-3">
          <Sparkles className="text-green-600 shrink-0" size={24} />

          <h2 className="text-lg font-bold text-black">
            Generated Marketplace Listing
          </h2>
        </div>

        {listing && (
          <span className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium">
            <CircleCheckBig size={14} />
            Generated
          </span>
        )}

      </div>

      {/* Output Area */}
      {listing ? (

        <div>
          <textarea
            readOnly
            value={listing}
            rows={14}
            className="w-full rounded-xl border border-gray-200 p-5 resize-y bg-white text-black text-sm outline-none"
          />

          <p className="text-xs text-gray-400 text-right mt-1">
            {listing.length}/5000
          </p>
        </div>

      ) : (

        <div className="h-64 rounded-xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center gap-3 px-4">

          <Sparkles size={40} className="text-green-500" />

          <h3 className="text-base font-semibold text-gray-700">
            No Marketplace Listing Generated
          </h3>

          <p className="text-sm text-gray-600 text-center max-w-sm">
            Fill in the product information above and click{" "}
            <span className="font-semibold">
              Generate Listing
            </span>{" "}
            to create your marketplace listing.
          </p>

        </div>

      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">

        <button
          onClick={handleCopy}
          disabled={!listing}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-black hover:bg-gray-50 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Copy className="h-4 w-4" />
          Copy
        </button>

        <button
          onClick={handleRegenerate}
          disabled={!listing}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-black hover:bg-gray-50 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCcw className="h-4 w-4" />
          Regenerate
        </button>

        <button
          onClick={handleSave}
          disabled={!listing}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="h-4 w-4" />
          Save Listing
        </button>

      </div>

      {/* Tip */}
      <div className="mt-6 bg-green-50 rounded-xl p-5">

        <h3 className="font-semibold text-green-700 text-sm">
          💡 Tip
        </h3>

        <p className="mt-1.5 text-sm text-green-600">
          Use accurate product details and relevant search keywords to
          create informative and discoverable marketplace listings.
        </p>

      </div>

    </div>
  );
};

export default MarketplaceOutput;
