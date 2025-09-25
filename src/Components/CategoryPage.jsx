// src/Components/CategoryPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import MinimalHeader from "./MinimalHeader";

// --- Subcategory images ---
import luxurySofa from "../assets/sofa.jpg";
import recliner from "../assets/recliner.jpg";
import simpleSofa from "../assets/simpleSofa.webp";
import sofaBed from "../assets/sofaBed.jpg";
import WoodenChair from "../assets/woodenchair.webp";
import simpleChair from "../assets/simplechair.webp";
import officeChair from "../assets/officechair.webp";
import gamingChair from "../assets/gamingchair.jpg";
import kingBed from "../assets/kingbed.jpeg";
import simpleBed from "../assets/simplebed.jpg";
import singleBed from "../assets/singlebed.jpg";
import bunkBed from "../assets/bunkbed.jpg";
import sideTable from "../assets/Tables/sidetable.webp";
import studyTable from "../assets/Tables/studytable.webp";
import centerTable from "../assets/Tables/centertable.jpg";
import cofeeTable from "../assets/Tables/cofeetable.jpeg";
import simpleDining from "../assets/DiningSet/simpledining.jpg";
import roundDining from "../assets/DiningSet/rounddining.webp";
import sixSeaterDining from "../assets/DiningSet/sixseaterdining.webp";
import foldDining from "../assets/DiningSet/folddining.webp";
import Simple from "../assets/Wadrobes/simple.jpg";
import Sliding from "../assets/Wadrobes/sliding.jpg";
import Mirror from "../assets/Wadrobes/mirror.jpg";
import Fancy from "../assets/Wadrobes/fancy.webp";
import woodenDoor from "../assets/Doors/wooden.webp";
import glassDoor from "../assets/Doors/glass.jpg";
import metalDoor from "../assets/Doors/metal.jpg";
import slidingDoor from "../assets/Doors/sliding.jpg";
import accessories from "../assets/kitchen/accessories.jpg";
import cabinets from "../assets/kitchen/cabinets.webp";
import rack from "../assets/kitchen/rack.jpg";
import shelves from "../assets/kitchen/shelves.jpg";

// --- Subcategories data ---
const subCategoriesData = {
  sofas: [
    { id: "ushape-sofa", title: "UShape Sofa", img: luxurySofa },
    { id: "simple-sofa", title: "Simple Sofa", img: simpleSofa },
    { id: "sofa-bed", title: "Sofa Bed", img: sofaBed },
    { id: "recliner-sofa", title: "Recliner Sofa", img: recliner },
  ],
  chairs: [
    { id: "wooden-chair", title: "Wooden Chair", img: WoodenChair },
    { id: "simple-chair", title: "Simple Chair", img: simpleChair },
    { id: "office-chair", title: "Office Chair", img: officeChair },
    { id: "gaming-chair", title: "Gaming Chair", img: gamingChair },
  ],
  beds: [
    { id: "king-bed", title: "King Size Bed", img: kingBed },
    { id: "simple-bed", title: "Simple Bed", img: simpleBed },
    { id: "single-bed", title: "Single Bed", img: singleBed },
    { id: "bunk-bed", title: "Bunk Bed", img: bunkBed },
  ],
  tables: [
    { id: "side-table", title: "Side Table", img: sideTable },
    { id: "study-table", title: "Study Table", img: studyTable },
    { id: "center-table", title: "Center Table", img: centerTable },
    { id: "coffee-table", title: "Coffee Table", img: cofeeTable },
  ],
  diningSets: [
    { id: "4-seater-dining", title: "Simple Dining", img: simpleDining },
    { id: "round-dining", title: "Round Dining", img: roundDining },
    { id: "6-seater-dining", title: "6 Seater Dining", img: sixSeaterDining },
    { id: "foldable-dining", title: "Foldable Dining", img: foldDining },
  ],
  wardrobes: [
    { id: "2-door-wardrobe", title: "Simple Wardrobe", img: Simple },
    { id: "sliding-wardrobe", title: "Sliding Wardrobe", img: Sliding },
    { id: "mirror-wardrobe", title: "Mirror Wardrobe", img: Mirror },
    { id: "3-door-wardrobe", title: "Fancy Wardrobe", img: Fancy },
  ],
  doors: [
    { id: "wooden-door", title: "Wooden Door", img: woodenDoor },
    { id: "glass-door", title: "Glass Door", img: glassDoor },
    { id: "metal-door", title: "Metal Door", img: metalDoor },
    { id: "sliding-door", title: "Sliding Door", img: slidingDoor },
  ],
  kitchenAccessories: [
    { id: "kitchen-cabinet", title: "Kitchen Cabinet", img: cabinets },
    { id: "kitchen-shelves", title: "Shelves", img: shelves },
    { id: "dish-rack", title: "Dish Rack", img: rack },
    { id: "appliances", title: "Small Appliances", img: accessories },
  ],
};

// --- URL slug → key mapping ---
const categoryMap = {
  sofas: "sofas",
  chairs: "chairs",
  beds: "beds",
  tables: "tables",
  "dining-sets": "diningSets",
  wardrobes: "wardrobes",
  doors: "doors",
  "kitchen-accessories": "kitchenAccessories",
};

const CategoryPage = () => {
  const { id } = useParams(); // URL slug
  const navigate = useNavigate();

  const dataKey = categoryMap[id];
  const subCategories = subCategoriesData[dataKey] || [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="sticky top-0 z-50 bg-gray-50 shadow-md">
        <MinimalHeader />
      </div>

      {/* Hero section */}
      <section className="mt-1 bg-gradient-to-r from-green-100 via-green-200 to-emerald-100 text-center py-10 sm:py-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 capitalize">
          {id.replace(/-/g, " ")}
        </h2>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto px-4 text-sm sm:text-base md:text-lg">
          Browse the best {id.replace(/-/g, " ")} for your home and pick the one
          that fits your style.
        </p>
      </section>

      {/* Subcategories grid */}
      <div className="px-4 sm:px-6 py-10 sm:py-14">
        {subCategories.length > 0 ? (
          <>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Choose a type
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {subCategories.map((sub, index) => {
                const isComingSoon = index >= subCategories.length - 2;

                return (
                  <motion.div
                    key={sub.id}
                    className={`relative rounded-2xl overflow-hidden shadow-lg transition ${
                      isComingSoon
                        ? "cursor-not-allowed"
                        : "bg-white cursor-pointer hover:shadow-xl"
                    }`}
                    whileHover={!isComingSoon ? { scale: 1.05 } : {}}
                    onClick={() => !isComingSoon && alert(`Clicked ${sub.title}`)}
                  >
                    {/* Image with blur effect if coming soon */}
                    <img
                      src={sub.img}
                      alt={sub.title}
                      className={`w-full aspect-[4/3] sm:aspect-auto sm:h-32 md:h-40 lg:h-48 object-cover ${
                        isComingSoon ? "filter blur-sm brightness-75" : ""
                      }`}
                    />

                    {isComingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-lg sm:text-xl">
                          Coming Soon
                        </span>
                      </div>
                    )}

                    <div className="p-4 text-center">
                      <h4
                        className={`font-semibold text-base sm:text-lg ${
                          isComingSoon ? "text-gray-300" : "text-gray-800"
                        }`}
                      >
                        {sub.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">
            No subcategories found for this category.
          </p>
        )}

        {/* Back button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => navigate("/buy")}
            className="cursor-pointer flex items-center gap-2 text-green-700 hover:text-green-900 transition"
          >
            <ArrowLeft className="w-7 h-7" />
            <span className="sr-only">Back to Categories</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
