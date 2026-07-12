import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMe } from "../services/api";

const GoogleSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = async () => {
      const params = new URLSearchParams(window.location.search);

      const token = params.get("token");

      if (!token) {
        navigate("/login");
        return;
      }

      localStorage.setItem("token", token);

      try {
        const { data } = await getMe();

        localStorage.setItem("user", JSON.stringify({
          ...data,
          token,
        }));

        navigate("/dashboard");

      } catch {
        navigate("/login");
      }
    };

    login();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      Signing in...
    </div>
  );
};

export default GoogleSuccess;