import React from "react";
import {
  LayoutDashboard,
  Package,
  History,
  User,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";
import LOGO from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Sidebar({ active, setActive }) {
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
            <img src={LOGO}/>
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

      {/* User + Bell + Logout */}
      <div className="px-3 py-5 border-t border-white/10 flex flex-col gap-1">
        {/* Bell */}
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white w-full transition"></button>

        {/* User */}
        <div className="flex items-center px-4 py-3 text-sm font-medium text-gray-400  justify-between">
          <div className="flex items-center gap-1 ">
            <div className="h-7 w-7 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
              S
            </div>
            <span className="text-white">Sudhanshu</span>
          </div>
          <div className="relative">
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 text-white text-[10px] flex items-center justify-center">
              3
            </span>
          </div>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white w-full transition">
          <LogOut className="h-[18px] w-[18px]" />
          Logout
        </button>
      </div>
    </aside>
  );
}
