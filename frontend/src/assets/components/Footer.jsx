import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function Footer({ brand = "Pack2Product" }) {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-lg font-bold text-orange-500">{brand}</h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Making it easier for food brands to showcase their products with clear descriptions, ingredient information, and market-ready content.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-2">
            <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Home</a></li>
            <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Features</a></li>
            <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">About</a></li>
            <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Services</h3>
          <ul className="mt-4 flex flex-col gap-2">
            <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Product Descriptions</a></li>
            <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Ingredient Benefits</a></li>
            <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Packaging content</a></li>
            <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">Marketplace Listing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Mail className="h-4 w-4" /> support@pack2product.com
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4" /> Noida, Delhi, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800 py-6">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2026 {brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}   