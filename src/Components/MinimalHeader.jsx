import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // arrow icon

const MinimalHeader = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 bg-white shadow-md sticky top-0 z-50">
      
      {/* Logo on the left */}
      <Link to="/" className="text-2xl font-extrabold text-gray-800 hover:text-green-600 transition-colors">
        2nd Life <span className="text-green-600">Furniture</span>
      </Link>

      {/* Back to Home button on the right */}
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </header>
  );
};

export default MinimalHeader;
