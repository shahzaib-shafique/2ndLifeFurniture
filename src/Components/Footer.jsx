import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1F2B24] text-gray-300 py-10 mt-0">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white">
            2nd Life <span className="text-green-500">Furniture</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-xs">
            Giving old furniture a new purpose. Buy and sell quality second-hand
            furniture easily.
          </p>
        </div>
  
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Home</li>
            <li className="hover:text-green-500 cursor-pointer">About</li>
            <li className="hover:text-green-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-500">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} 2nd Life Furniture. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
