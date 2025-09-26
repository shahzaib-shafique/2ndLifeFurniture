import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl lg:text-3xl font-extrabold tracking-wide whitespace-nowrap transition-colors duration-300 ${
            scrolled || !isHome ? "text-gray-900" : "text-white"
          }`}
        >
          2nd Life <span className="text-green-600">Furniture</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-12 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`relative group transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-green-600 font-semibold"
                    : scrolled || !isHome
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer px-6 py-2 rounded-full font-semibold text-white bg-green-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700"
          >
            Go to Marketplace
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors duration-300 ${
            scrolled || !isHome ? "text-gray-700" : "text-white"
          }`}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 mx-4 bg-white shadow-2xl rounded-2xl transform transition-all duration-300 ease-in-out ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-6 text-gray-700 font-medium text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={handleLinkClick}
                className={`block transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-green-600 font-semibold"
                    : "hover:text-green-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                handleLinkClick();
                navigate("/signup");
              }}
              className="w-full px-5 py-2 rounded-full font-semibold bg-green-600 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-all"
            >
              Go to Marketplace
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
