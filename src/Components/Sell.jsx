// src/Components/Sell.jsx
import React, { useState } from "react";
import MinimalHeader from "./MinimalHeader";
import { motion } from "framer-motion";

const Sell = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    image: null,
  });

  const [previewItems, setPreviewItems] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) return;

    const newItem = {
      ...formData,
      imgURL: URL.createObjectURL(formData.image),
    };

    setPreviewItems((prev) => [...prev, newItem]);
    setFormData({ title: "", category: "", price: "", image: null });
  };

  const handleRemove = (index) => {
    setPreviewItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-6 py-16">
      <MinimalHeader />

      {/* Form Section */}
      <motion.div
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sell Your Furniture</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Item Title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select Category</option>
            <option value="Sofas">Sofas</option>
            <option value="Chairs">Chairs</option>
            <option value="Beds">Beds</option>
            <option value="Tables">Tables</option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            value={formData.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <motion.button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Preview
          </motion.button>
        </form>
      </motion.div>

      {/* Preview Grid */}
      {previewItems.length > 0 && (
        <section className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Preview Items</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {previewItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg relative cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img
                  src={item.imgURL}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{item.category}</p>
                  <p className="text-gray-700 font-semibold mt-1">${item.price}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Sell;
