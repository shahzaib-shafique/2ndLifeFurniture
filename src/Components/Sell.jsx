// src/Components/Sell.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MinimalHeader from "./MinimalHeader";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  TrashIcon,
  CameraIcon,
} from "@heroicons/react/24/solid";

const Sell = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    images: [],
  });

  const [previewItems, setPreviewItems] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      const fileArray = Array.from(files).slice(0, 5); // limit to 5
      setFormData((prev) => ({
        ...prev,
        images: fileArray,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.images.length) return;

    const newItem = {
      ...formData,
      imagePreviews: formData.images.map((img) => URL.createObjectURL(img)),
    };

    setPreviewItems((prev) => [...prev, newItem]);
    setFormData({
      title: "",
      category: "",
      price: "",
      images: [],
    });
  };

  const handleRemove = (index) => {
    setPreviewItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MinimalHeader />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-emerald-200 via-green-100 to-emerald-50 text-center py-16 sm:py-20 px-4 overflow-hidden">
        <div className="max-w-3xl mx-auto z-10 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Sell Your Furniture Easily
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            List items in seconds. Upload 5 images per item and attract
            buyers.
          </p>
        </div>
      </section>

      {/* Form */}
      <div className="max-w-3xl mx-auto w-full px-6 py-12">
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            List Your Item 🪑
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Wooden Dining Table"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-green-500 focus:outline-none"
                required
              >
                <option value="">Select Category</option>
                <option value="Sofas">Sofas</option>
                <option value="Chairs">Chairs</option>
                <option value="Beds">Beds</option>
                <option value="Tables">Tables</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Price (Rs)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g. 4999"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Custom Image Upload */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Upload Images
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                  <CameraIcon className="w-14 h-14 text-gray-400 mb-3" />
                  <span className="text-gray-700 font-medium text-base">
                    Click or Drag & Drop to Upload
                  </span>
                  <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Show preview thumbnails immediately */}
              {formData.images.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {formData.images.map((file, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200 shadow-sm"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`preview-${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Add to Preview
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Preview */}
      {previewItems.length > 0 && (
        <div className="max-w-6xl mx-auto w-full px-6 pb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Your Listings
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {previewItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="w-full h-48 bg-gray-100 flex overflow-x-auto gap-2 p-2">
                  {item.imagePreviews.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`item-${i}`}
                      className="h-full object-cover rounded-lg aspect-square"
                    />
                  ))}
                </div>

                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-green-600 font-bold mt-1">
                    Rs {Number(item.price).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => handleRemove(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Back Link */}
      <div className="mt-12 mb-10 flex justify-center">
        <Link
          to="/buy-sell"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 transition text-sm font-medium"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Sell;
