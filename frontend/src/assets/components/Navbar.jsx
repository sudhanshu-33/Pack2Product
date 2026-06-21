import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          {logo ? (
            <img
              src={logo}
              alt="Pack2Product"
              className="h-12 w-12 object-contain"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-xl"></div>
          )}

          <div>
            <h1 className="text-xl font-bold text-orange-500">Pack2Product</h1>

            <p className="text-xs text-gray-500 dark:text-gray-400"></p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between gap-8">
          <a
            href="/"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500"
          >
            About
          </a>
       
       

          <Link
            to="/login"
            className="text-sm font-semibold text-gray-700 dark:text-gray-200"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Get Started
          </Link>
             <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-700"
          >
            {dark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-5 bg-white dark:bg-gray-900 border-t dark:border-gray-800 flex flex-col gap-4">
          <Link to="/" className="text-gray-700 dark:text-gray-200">
            Home
          </Link>

          <Link to="/features" className="text-gray-700 dark:text-gray-200">
            Features
          </Link>

          <Link to="/about" className="text-gray-700 dark:text-gray-200">
            About
          </Link>

          <Link to="/contact" className="text-gray-700 dark:text-gray-200">
            Contact
          </Link>

          <Link
            to="/login"
            className="font-semibold text-gray-700 dark:text-gray-200"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-orange-500 text-white rounded-full py-2 text-center font-semibold"
          >
            Get Started
          </Link>

          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            Toggle Theme
          </button>
        </div>
      )}
    </header>
  );
}
export default Navbar;
