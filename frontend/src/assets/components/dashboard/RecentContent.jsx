import React from "react";
import { MoreVertical } from "lucide-react";

export default function RecentContent() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900 dark:text-white">Recent Content</h2>
        <button className="text-sm text-green-600 hover:underline">View all</button>
      </div>

      <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-700">
        <div className="flex items-center gap-4 py-3">
          <img src="https://placehold.co/40x40" alt="Mango Pickle" className="h-10 w-10 rounded-lg object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Mango Pickle</p>
            <p className="text-xs text-gray-500">Product Description</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700 font-medium">Completed</span>
          <span className="text-xs text-gray-400 hidden sm:block">20 Jun, 2026</span>
          <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="h-4 w-4" /></button>
        </div>

        <div className="flex items-center gap-4 py-3">
          <img src="https://placehold.co/40x40" alt="Organic Honey" className="h-10 w-10 rounded-lg object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Organic Honey</p>
            <p className="text-xs text-gray-500">Ingredient Benefits</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700 font-medium">Completed</span>
          <span className="text-xs text-gray-400 hidden sm:block">19 Jun, 2026</span>
          <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="h-4 w-4" /></button>
        </div>

        <div className="flex items-center gap-4 py-3">
          <img src="https://placehold.co/40x40" alt="Fruit Jam" className="h-10 w-10 rounded-lg object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Fruit Jam</p>
            <p className="text-xs text-gray-500">Marketplace Content</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">In Progress</span>
          <span className="text-xs text-gray-400 hidden sm:block">18 Jun, 2026</span>
          <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="h-4 w-4" /></button>
        </div>

        <div className="flex items-center gap-4 py-3">
          <img src="https://placehold.co/40x40" alt="Aloe Vera Gel" className="h-10 w-10 rounded-lg object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Aloe Vera Gel</p>
            <p className="text-xs text-gray-500">SEO Keywords</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">Draft</span>
          <span className="text-xs text-gray-400 hidden sm:block">17 Jun, 2026</span>
          <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
}