// src/Components/FurnitureCard.jsx
import React from "react";

const FurnitureCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-cover rounded-lg mb-4"
        />
      ) : (
        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
          <span className="text-gray-400">No Image</span>
        </div>
      )}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">${price}</p>
    </div>
  );
};

export default FurnitureCard;
