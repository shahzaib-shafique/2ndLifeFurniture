import React, { useState } from "react";
import Navbar from "./Navbar";
import chair from "../assets/chair.jpg";
import {
  Leaf,
  DollarSign,
  ShieldCheck,
  Users,
  Star,
  Lightbulb,
} from "lucide-react";

const faqs = [
  {
    question: "What is Second Life Furniture?",
    answer:
      "Second Life Furniture is a platform where you can buy and sell pre-loved furniture with trust, affordability, and style.",
  },
  {
    question: "Is the furniture inspected before listing?",
    answer:
      "Yes! Every item is reviewed to ensure it meets our quality standards before being available for purchase.",
  },
  {
    question: "Do you provide delivery services?",
    answer:
      "We connect you with trusted delivery partners for hassle-free pickup and drop-off at affordable rates.",
  },
  {
    question: "How do I sell my furniture?",
    answer:
      "Simply list your furniture with pictures and details on our platform. Once approved, buyers can contact you directly.",
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

     
      <section className="mt-20 relative w-full py-20 lg:py-28 bg-gradient-to-r from-green-100 to-green-50 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 sm:px-4">
          <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            About <span className="text-green-600">Second Life Furniture</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Giving your furniture a second life since 2025 — affordable,
            sustainable, and stress-free.
          </p>
        </div>
      </section>

  
      <div className="flex-grow px-4 sm:px-6 md:px-6 py-16 md:py-20 max-w-6xl mx-auto space-y-20">
      
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
       
          <div className="order-last md:order-first">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              To make quality second hand furniture as accessible and
              sustainable, helping people buy and sell items safely and
              conveniently, while promoting a greener lifestyle.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              At{" "}
              <span className="font-semibold text-green-700">
                Second Life Furniture
              </span>
              , we believe every piece of furniture deserves a second chance.
              Our mission goes beyond just buying and selling — it’s about
              reducing waste, supporting affordability, and building a community
              where people can furnish their homes in a smarter and eco-friendly
              way.
            </p>
          </div>

         
          <div className="flex justify-center md:justify-end">
            <img
              src={chair}
              alt="Our Mission - Chair"
              loading="lazy"
              className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg object-cover"
            />
          </div>
        </section>
      </div>

      
      <section className="px-6 sm:px-4 py-20 bg-gradient-to-br from-green-50 via-white to-pink-50 relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
          Our Values
        </h2>

       
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 relative z-10">
          {[
            {
              icon: <Leaf className="w-8 h-8 text-green-600" />,
              title: "Sustainability",
              desc: "Reducing waste by giving furniture a second life and supporting a greener planet.",
              bg: "bg-green-100",
            },
            {
              icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
              title: "Affordability",
              desc: "Providing quality furniture at prices every family can manage.",
              bg: "bg-yellow-100",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
              title: "Trust & Safety",
              desc: "Secure transactions and reliable processes for peace of mind.",
              bg: "bg-blue-100",
            },
            {
              icon: <Users className="w-8 h-8 text-purple-500" />,
              title: "Convenience",
              desc: "Making the furniture buying and selling process simple, fast, and hassle-free.",
              bg: "bg-purple-100",
            },
            {
              icon: <Star className="w-8 h-8 text-amber-500" />,
              title: "Quality",
              desc: "Every piece we list is reviewed to ensure it meets our standards.",
              bg: "bg-amber-100",
            },
            {
              icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
              title: "Innovation",
              desc: "Constantly improving our platform with new ideas to make buying and selling easier.",
              bg: "bg-yellow-100",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center text-center p-8 rounded-3xl 
              bg-gradient-to-br from-white via-green-50 to-white 
              shadow-lg border border-gray-100 
              hover:bg-gradient-to-tr hover:from-green-100 hover:via-white hover:to-green-50
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-300/20 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
              <div
                className={`relative z-10 p-5 ${value.bg} rounded-2xl mb-5 shadow-md group-hover:scale-110 transition-all`}
              >
                {value.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="relative z-10 text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black mb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-4">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">

           
            <div className="flex items-center justify-center lg:justify-start">
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-center lg:text-left">
                Frequently <br /> Asked <br />
                <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">
                  Questions
                </span>
              </h2>
            </div>

         
            <div className="space-y-6">
              {faqs.map((item, index) => (
                <div key={index} className="border-b border-neutral-700">
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index ? "true" : "false"}
                    className="flex items-center justify-between w-full px-4 py-6 text-left transition-all duration-500 rounded-lg group hover:bg-neutral-800/30 focus:outline-none"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-white transition-colors duration-300 md:text-xl group-hover:text-green-400">
                        {item.question}
                      </h3>
                    </div>
                    <div className="text-white transition-transform duration-500 group-hover:text-green-400">
                      <svg
                        className={`w-6 h-6 transform transition-transform duration-500 ${
                          openIndex === index ? "rotate-45" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v12m6-6H6"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
                      openIndex === index ? "max-h-96" : ""
                    }`}
                  >
                    <div className="pl-16 pr-4 pb-4">
                      <p className="text-lg leading-relaxed text-neutral-300">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
