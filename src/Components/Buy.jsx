// src/Components/Buy.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowLeft } from "lucide-react";
import MinimalHeader from "./MinimalHeader";

// --- Category images ---
import furniture2 from "../assets/furniture2.jpeg";
import chair from "../assets/mainchair.jpg";
import bed from "../assets/bed.webp";
import table from "../assets/table.jpg";
import dining from "../assets/dining.jpg";
import wardrobe from "../assets/wardrobe.jpg";
import door from "../assets/door.webp";
import kitchen from "../assets/kitchen.jpg";

const categories = [
  { id: "sofas", title: "Sofas", img: furniture2 },
  { id: "chairs", title: "Chairs", img: chair },
  { id: "beds", title: "Beds", img: bed },
  { id: "tables", title: "Tables", img: table },
  { id: "dining-sets", title: "Dining Sets", img: dining },
  { id: "wardrobes", title: "Wardrobes", img: wardrobe },
  { id: "doors", title: "Doors", img: door },
  { id: "kitchen-accessories", title: "Kitchen Accessories", img: kitchen },
];

const Buy = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="sticky top-0 z-50 bg-gray-50 shadow-md">
        <MinimalHeader />
      </div>

      <section className="mt-1 bg-gradient-to-r from-green-100 via-green-200 to-emerald-100 text-center py-10 sm:py-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Buy Furniture
        </h2>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto px-4 text-sm sm:text-base md:text-lg">
          Discover stylish and affordable furniture that fits every room of your home. Browse by categories and start shopping smart.
        </p>
      </section>

      <div className="px-4 sm:px-6 py-10 sm:py-14">
        {/* Search */}
        <div className="flex items-center justify-center mb-10">
          <div className="relative w-full sm:w-2/3 lg:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Categories */}
        <section className="relative">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Shop by Category
          </h2>
          <p className="text-gray-500 text-center mt-2 mb-8 text-sm sm:text-base">
            Find exactly what you need for every space
          </p>

          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {filteredCategories.map((cat) => (
                <motion.div
                  key={cat.id}
                  onClick={() => navigate(`/category/${cat.id}`)}
                  className="bg-white rounded-2xl shadow-lg relative cursor-pointer hover:shadow-xl transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full aspect-[4/3] sm:aspect-auto sm:h-32 md:h-40 lg:h-48 object-cover rounded-t-2xl"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
                      {cat.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-6">
              No categories found.
            </p>
          )}
        </section>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => navigate("/buy-sell")}
            className="cursor-pointer flex items-center gap-2 text-green-700 hover:text-green-900 transition"
          >
            <ArrowLeft className="w-7 h-7" />
            <span className="sr-only">Back to Buy/Sell</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
