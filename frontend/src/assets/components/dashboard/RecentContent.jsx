import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import { getAllContent } from "../../services/api";

export default function RecentContent() {
  const [contents, setContents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchRecentContent();
  }, []);

  const fetchRecentContent = async () => {
    try {
      const { data } = await getAllContent();

      // Latest 5 items
      setContents(data.slice(0, 5));

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white dark:bg-[#161b27] rounded-2xl border border-gray-100 dark:border-white/10 p-5 shadow-sm">

      <div className="flex items-center justify-between mb-4">

        <h2 className="font-semibold text-gray-900 dark:text-white">
          Recent Content
        </h2>

        <button className="text-sm text-green-600 hover:underline" onClick={() => navigate("/dashboard/history")}>
          View all
        </button>

      </div>

      <div className="flex flex-col divide-y divide-gray-100 dark:divide-white/10">

        {contents.length > 0 ? (

          contents.map((item) => (

            <div
              key={item._id}
              className="flex items-center gap-4 py-3"
            >

              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700 font-bold">
                {item.productName.charAt(0)}
              </div>

              <div className="flex-1 min-w-0">

                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.productName}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.type}
                </p>

              </div>

              <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-green-100 text-green-700">
                Saved
              </span>

              <span className="text-xs text-gray-400 hidden sm:block">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>

              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="h-4 w-4" />
              </button>

            </div>

          ))

        ) : (

        <div className="py-10 text-center">
  <p className="text-gray-500 font-medium">
    No content generated yet.
  </p>

  <p className="text-sm text-gray-400 mt-1">
    Generate your first description to see it here.
  </p>
</div>

        )}

      </div>

    </div>
  );
}