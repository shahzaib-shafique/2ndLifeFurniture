import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => setAnimate(true), []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormData({ name: "", email: "", subject: "", message: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-24 sm:py-28 lg:py-32 bg-gradient-to-r from-green-100 to-green-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Contact <span className="text-green-600">Us</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions or need support? Reach out to our team anytime and we’ll get back to you within 24 hours!
          </p>
        </div>
      </section>

      {/* Contact + Info Section */}
      <section className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-12 lg:px-20 py-12 max-w-screen-xl mx-auto gap-10 lg:gap-20">

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full flex-1 space-y-6 transform transition-all duration-700 ease-out
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6">Send Us a Message</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.name ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-green-300"
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="flex-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-green-300"
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-4 transition-all duration-300 ${
              errors.subject ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-green-300"
            }`}
          />

          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-4 resize-none transition-all duration-300 ${
              errors.message ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-green-300"
            }`}
          />
          {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}

          <button
            type="submit"
            className="cursor-pointer w-full py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-all duration-300"
          >
            Send Message
          </button>

          {success && <p className="text-green-600 font-semibold text-center mt-4 animate-pulse text-sm sm:text-base">Your message has been sent successfully!</p>}
        </form>

        {/* Contact Info Panel */}
        <div className="flex-1 space-y-8">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">Contact Information</h2>

          {[{
            icon: <FaEnvelope className="text-green-500 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Email",
            lines: ["Furniture2nd@gmail.com", "support@furniture2nd.com"]
          },{
            icon: <FaPhoneAlt className="text-green-500 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Phone",
            lines: ["+92 321 4287047", "Mon-Fri 9am-6pm"]
          },{
            icon: <FaMapMarkerAlt className="text-green-500 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
            title: "Location",
            lines: ["Lahore, Pakistan", "Remote-first company"]
          }].map((info, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-green-500/10">
                {info.icon}
              </div>
              <div>
                <h3 className="mb-1 font-bold text-neutral-900 text-sm sm:text-base lg:text-lg">{info.title}</h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-neutral-600 text-xs sm:text-sm lg:text-base">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Contact;
