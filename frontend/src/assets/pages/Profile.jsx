import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getAllContent } from "../services/api";
import Loader from "../components/ui/Loader";
import ProfileCard from "../components/dashboard/profile/ProfileCard";
import ProfileStats from "../components/dashboard/profile/ProfileStats";
import Toast from "../components/ui/Toast";

export default function Profile() {
  
  const { user } = useAuth();

  const [contents, setContents] = useState([]);
  const [loading,setLoading]=useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
  try {
    setLoading(true);

    const { data } = await getAllContent();

    setContents(data);
  } catch (err) {
    setToast({
      show: true,
      type: "error",
      message: "Failed to load profile activity.",
    });
  } finally {
    setLoading(false);
  }
};
 // throw new Error("Testing Error Boundary");
 
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-8 lg:px-12">
      {/* Toast */}
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

      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>

          <p className="text-gray-500 mt-1">
            Manage your account information and monitor your activity.
          </p>
        </div>

        {/* Profile */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProfileCard user={user} setToast={setToast} />

          <ProfileStats contents={contents} user={user} />
        </div>
      </div>
    </div>
  );
}
