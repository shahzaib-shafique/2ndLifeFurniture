// About.jsx
import React from "react";
import Navbar from "./Navbar"; 

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar /> 

      {/* Hero Section */}
      <div className="mt-20 bg-gradient-to-r from-green-100 to-green-50 py-16 text-center shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          About <span className="text-green-600">Second Life Furniture</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          We give your furniture a second life! Affordable, sustainable, and easy.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex-grow px-6 py-12 max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To make quality second-hand furniture accessible and sustainable, helping
            people buy and sell items safely and conveniently.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            How It Works
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Sign up and create your account.</li>
            <li>List your furniture items with accurate descriptions.</li>
            <li>Buy items from other users or sell your furniture directly.</li>
            <li>Communicate safely through our platform and arrange delivery.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Started in 2025, Second Life Furniture was created to reduce waste and
            make quality furniture affordable. We believe every piece deserves a second life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
