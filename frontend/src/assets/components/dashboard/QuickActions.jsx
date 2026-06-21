import React from "react";
import { FileText, Leaf, Search, ShoppingCart, ArrowRight } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="mb-2">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3 shadow-sm">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
            <FileText className="h-5 w-5 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Product Description</h3>
          <p className="text-xs text-gray-500">Generate SEO friendly product descriptions.</p>
          <button className="h-8 w-8 rounded-full border border-green-200 flex items-center justify-center hover:bg-green-50 mt-auto">
            <ArrowRight className="h-4 w-4 text-green-600" />
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3 shadow-sm">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Leaf className="h-5 w-5 text-purple-500" />
          </div>
          <h3 className="font-semibold text-gray-900">Ingredient Benefits</h3>
          <p className="text-xs text-gray-500">Create ingredient benefits and highlights.</p>
          <button className="h-8 w-8 rounded-full border border-purple-200 flex items-center justify-center hover:bg-purple-50 mt-auto">
            <ArrowRight className="h-4 w-4 text-purple-500" />
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3 shadow-sm">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Search className="h-5 w-5 text-blue-500" />
          </div>
          <h3 className="font-semibold text-gray-900">SEO Keywords</h3>
          <p className="text-xs text-gray-500">Find and optimize the best keywords.</p>
          <button className="h-8 w-8 rounded-full border border-blue-200 flex items-center justify-center hover:bg-blue-50 mt-auto">
            <ArrowRight className="h-4 w-4 text-blue-500" />
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3 shadow-sm">
          <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
            <ShoppingCart className="h-5 w-5 text-orange-500" />
          </div>
          <h3 className="font-semibold text-gray-900">Marketplace Content</h3>
          <p className="text-xs text-gray-500">Generate content for marketplaces.</p>
          <button className="h-8 w-8 rounded-full border border-orange-200 flex items-center justify-center hover:bg-orange-50 mt-auto">
            <ArrowRight className="h-4 w-4 text-orange-500" />
          </button>
        </div>

      </div>
    </div>
  );
}