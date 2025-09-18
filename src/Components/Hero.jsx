import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-4xl px-6 md:px-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Give Your <span className="text-green-400">Furniture</span> a <br />
          Second Life
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-md mx-auto drop-shadow-md">
          Buy quality second-hand furniture at affordable prices — or sell yours
          to someone who needs it.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="group cursor-pointer px-10 py-4 bg-green-500 text-white text-lg font-semibold rounded-full shadow-xl hover:bg-green-600 hover:scale-105 transition-all duration-300 flex items-center gap-3">
            Get Started
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
