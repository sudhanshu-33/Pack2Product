import React, { useEffect, useState } from "react";
import { Search, History as HistoryIcon } from "lucide-react";
import HistoryCard from "../components/history/HistoryCard";
import { getAllContent } from "../services/api";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";
import ViewModal from "../components/history/ViewModal";

const History = () => {
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setLoading(true);

      const { data } = await getAllContent();

      setHistory(data);
      setFilteredHistory(data);
    } catch (error) {
      setToast({
        show: true,
        type: "error",
        message: "Failed to load history.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const result = history.filter((item) =>
      item.productName.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredHistory(result);
  }, [search, history]);

  return (
    <div className="min-h-screen bg-gray-200 p-4 sm:p-6 md:p-8">
      {loading && <Loader fullScreen />}

      {toast.show && (  
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() =>
            setToast({ show: false, message: "", type: "success" })
          }
        />
      )}

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        {/* Left — title */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
            <HistoryIcon className="text-green-600" size={19} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              History
            </h1>
            <p className="text-xs text-gray-500">
              view and manage all prodcut description
            </p>
          </div>
        </div>

        {/* Right — search (30% on desktop, full width on mobile) */}
        <div className="relative w-full sm:w-[30%]">
          <Search className="absolute left-3.5 top-3 text-gray-400" size={15} />
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredHistory.length > 0 ? (
          filteredHistory.map((item) => (
            <HistoryCard
              key={item._id}
              item={item}
              fetchHistory={fetchHistory}
              setToast={setToast}
              setSelectedItem={setSelectedItem}
              setOpenModal={setOpenModal}
            />
          ))
        ) : (
          <div className="col-span-full">
            <div className="bg-white rounded-2xl border border-gray-100 py-16 flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center">
                <HistoryIcon className="text-green-500" size={24} />
              </div>
              <h3 className="text-base font-semibold text-gray-700">
                No history found
              </h3>
              <p className="text-sm text-gray-400 text-center max-w-xs">
                {search
                  ? `No results for "${search}".`
                  : "Your generated descriptions will appear here."}
              </p>
            </div>
          </div>
        )}
      </div>
      <ViewModal
        isOpen={openModal}
        item={selectedItem}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default History;
