// src/Components/Buy.jsx
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import furniture2 from "../assets/furniture2.jpeg";
import chair from "../assets/chair.webp";
import bed from "../assets/bed.webp";
import table from "../assets/table.jpg";

const Buy = () => {
  const navigate = useNavigate();
  const categoriesRef = useRef(null);
  const arrivalsRef = useRef(null);

  const categories = [
    { title: "Sofas", img: furniture2 },
    { title: "Chairs", img: chair },
    { title: "Beds", img: bed },
    { title: "Tables", img: table },
  ];

  const newArrivals = [
    { title: "Luxury Sofa", img: furniture2, price: 250, badge: "New" },
    { title: "Modern Chair", img: chair, price: 120 },
    { title: "King Size Bed", img: bed, price: 400, badge: "Hot" },
    { title: "Wooden Table", img: table, price: 150 },
  ];

  const scrollLeft = (ref) => ref.current.scrollBy({ left: -250, behavior: "smooth" });
  const scrollRight = (ref) => ref.current.scrollBy({ left: 250, behavior: "smooth" });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-6 py-16">
      {/* Categories Section */}
      <section className="relative mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Categories</h2>

        <button
          onClick={() => scrollLeft(categoriesRef)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition z-20"
        >
          &#8592;
        </button>
        <button
          onClick={() => scrollRight(categoriesRef)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition z-20"
        >
          &#8594;
        </button>

        <div
          ref={categoriesRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="min-w-[200px] bg-white rounded-2xl shadow-lg relative cursor-pointer snap-start"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-36 object-cover rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-800">{cat.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">New Arrivals</h2>

        <button
          onClick={() => scrollLeft(arrivalsRef)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition z-20"
        >
          &#8592;
        </button>
        <button
          onClick={() => scrollRight(arrivalsRef)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition z-20"
        >
          &#8594;
        </button>

        <div
          ref={arrivalsRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {newArrivals.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[220px] bg-white rounded-2xl shadow-lg relative cursor-pointer snap-start"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {item.badge && (
                <span className="absolute top-2 left-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs px-2 py-1 rounded-full animate-bounce shadow-lg">
                  {item.badge}
                </span>
              )}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 object-cover rounded-t-2xl"
              />

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition flex flex-col justify-center items-center gap-2 text-white rounded-2xl"
                whileHover={{ opacity: 1 }}
              >
                <p className="font-semibold text-lg">${item.price}</p>
                <button
                  onClick={() => navigate("/buy")}
                  className="bg-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  View Details
                </button>
              </motion.div>

              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-500 text-sm mt-1">${item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Buy;
