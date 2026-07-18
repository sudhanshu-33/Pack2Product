 
  import { useNavigate } from "react-router-dom";
  import { useAuth } from "../../context/AuthContext";
  import {
    LayoutDashboard,
    Package,
    History,
    User,
    Settings,
    LogOut,
    
  } from "lucide-react";
  import LOGO from "../../images/logo.png";
  import { Link } from "react-router-dom";

  export default function Sidebar({ active, setActive }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
      logout();
      navigate("/login");
    };
    console.log("Sidebar User:", user);
     console.log("User name:", user?.name);
    const navItem = (label, Icon, path) => (
      <Link to={path}>
        <button
          onClick={() => setActive(label)}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium w-full text-left transition
          ${
            active === label
              ? "bg-green-600 text-white"
              : "text-gray-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Icon className="h-[18px] w-[18px] flex-shrink-0" />
          <span>{label}</span>
        </button>
      </Link>
    );

    return (
      <aside className="flex flex-col h-full w-64 bg-[#1a2332] flex-shrink-0">
        {/* Logo */}
        <div className="h-[72px] flex items-center px-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center font-bold text-sm text-white">
              <img src={LOGO} />
            </div>
            <span className="font-bold text-base text-white tracking-tight">
              Pack2<span className="text-orange-500">Product</span>
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col gap-0.5 px-3 py-5">
          {navItem("Dashboard", LayoutDashboard, "/dashboard")}

          {navItem("Product Description", Package, "/dashboard/description")}

          {navItem(
            "Ingredient Benefits",
            History,
            "/dashboard/ingredient-benefits",
          )}

          {navItem("Packaging Labels", User, "/dashboard/product-label")}

          {navItem("Marketplace Listings", Settings, "/dashboard/marketplace")}

          {navItem("History", History, "/dashboard/history")}

          {navItem("Profile", User, "/dashboard/profile")}

          {navItem("Settings", Settings, "/dashboard/settings")}
        </nav>

<div className="border-t border-white/10 p-4">

  {/* User */}
  <div className="flex items-center gap-3 mb-4">
    <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
      {user?.name?.charAt(0).toUpperCase()}
    </div>

    <div>
      <p className="text-white text-sm font-medium">
        {user?.name}
       
      </p>
   
    </div>
  </div>

  {/* Logout */}
  <button
    onClick={handleLogout}
    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white w-full transition"
  >
    <LogOut className="h-[18px] w-[18px]" />
    Logout
  </button>

</div>
      </aside>
    );
  }
