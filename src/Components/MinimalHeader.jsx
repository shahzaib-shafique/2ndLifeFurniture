import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";

const MinimalHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isSignInPage = location.pathname === "/signin"; 

  return (
    <header className="relative flex items-center justify-between w-full p-4 bg-white shadow-md sticky top-0 z-50">
      {/* Brand on Left */}
      <Link
        to="/"
        className="text-2xl font-extrabold text-gray-800 hover:text-green-600 transition-colors"
      >
        2nd Life <span className="text-green-600">Furniture</span>
      </Link>

      {isSignInPage && (
        <h1 className="absolute left-1/2 -translate-x-1/2 hidden sm:block text-lg md:text-xl font-bold text-gray-800 whitespace-nowrap">
          Welcome Back
        </h1>
      )}

      {/* Back Button on Desktop */}
      <div className="hidden sm:block">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

  
      <div className="sm:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-all"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-8 bg-white shadow-lg rounded-lg w-48 p-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-800 font-semibold hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default MinimalHeader;
