// src/Components/BuySell.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MinimalHeader from "./MinimalHeader";
import furnitureBuy from "../assets/furniture1.jpg";
import furnitureSell from "../assets/furniture2.jpeg";
import { ArrowLeft } from "lucide-react";

const BuySell = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MinimalHeader />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 bg-gradient-to-br from-green-50 to-yellow-50 overflow-hidden">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent 
             bg-gradient-to-r from-green-600 via-green-700 to-yellow-500 
             tracking-tight leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upgrade Your Home With Style
        </motion.h1>

        <motion.p
          className="text-gray-800 text-lg md:text-2xl mb-20 max-w-3xl 
             drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Buy or Sell Quality Second-hand Furniture Easily. Experience a modern
          way to refresh your space.
        </motion.p>
        <div className="w-24 h-1 bg-green-600 rounded-full mx-auto mb-12"></div>

        {/* Buy/Sell Cards */}
        <div className="flex flex-col md:flex-row gap-16 justify-center w-full px-6 md:px-20 z-10">
          {/* Buy Card */}
          <motion.div
            onClick={() => navigate("/buy")}
            className="relative rounded-3xl shadow-2xl cursor-pointer overflow-hidden flex-1 max-w-md mx-auto md:mx-0 bg-white/10 backdrop-blur-md border border-white/20 transition-transform transform hover:scale-105"
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={furnitureBuy}
              alt="Buy Furniture"
              className="w-full h-96 object-cover rounded-3xl transition duration-500 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-6">
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-green-400 via-green-500 to-green-600 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Buy Furniture
              </motion.h2>

              <motion.div
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Start Buying
              </motion.div>
            </div>
          </motion.div>

          {/* Sell Card */}
          <motion.div
            onClick={() => navigate("/sell")}
            className="relative rounded-3xl shadow-2xl cursor-pointer overflow-hidden flex-1 max-w-md mx-auto md:mx-0 bg-white/10 backdrop-blur-md border border-white/20 transition-transform transform hover:scale-105"
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={furnitureSell}
              alt="Sell Furniture"
              className="w-full h-96 object-cover rounded-3xl transition duration-500 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-6">
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Sell Furniture
              </motion.h2>

              <motion.div
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Start Selling
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="mt-20 mb-10 flex justify-center">
          <button
            onClick={() => navigate("/signIn")}
            className="cursor-pointer flex items-center gap-2 text-green-700 hover:text-green-900 transition"
          >
            <ArrowLeft className="w-7 h-7" />
            <span className="sr-only">Back to Buy/Sell</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default BuySell;
