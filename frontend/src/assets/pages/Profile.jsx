import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getAllContent } from "../services/api";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileStats from "../components/profile/ProfileStats";

export default function Profile() {
  const { user } = useAuth();

  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data } = await getAllContent();
      setContents(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your account information and monitor your activity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <ProfileCard user={user} />

          <ProfileStats contents={contents} user={user}/>

        </div>

      </div>
    </div>
  );
}