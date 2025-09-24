import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
    <div className="min-h-screen flex flex-col bg-gray-50 w-full relative">
      <Navbar />

      <section className="mt-20 relative w-full py-20 lg:py-28 bg-gradient-to-r from-green-100 to-green-50 overflow-hidden">
       
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1470&q=80')] opacity-15 bg-cover bg-center"></div>

       
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Contact <span className="text-green-600">Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions or need support? Reach out to our team anytime and
            we’ll get back to you within 24 hours
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 items-stretch px-6 py-12 max-w-6xl mx-auto gap-12">
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col h-full lg:max-h-[750px] overflow-y-auto bg-white rounded-3xl shadow-2xl p-8 space-y-8 transform transition-all duration-700 ease-out
            ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }
          `}
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Send Us a Message
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-green-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="flex-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-green-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-4 transition-all duration-300 ${
              errors.subject
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-green-300"
            }`}
          />

          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-4 resize-none transition-all duration-300 ${
              errors.message
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-green-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}

          <button
            type="submit"
            className="cursor-pointer w-full py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            Send Message
          </button>

          {success && (
            <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-700 text-center font-medium shadow-sm animate-fadeIn">
              Your message has been sent successfully!
            </div>
          )}
        </form>

        <div className="flex flex-col h-full space-y-10">
          <h2 className="text-3xl font-bold text-neutral-900">Contact Info</h2>

          {[
            {
              icon: <FaEnvelope className="text-green-500 w-7 h-7" />,
              title: "Email",
              lines: ["Furniture2nd@gmail.com", "support@furniture2nd.com"],
            },
            {
              icon: <FaPhoneAlt className="text-green-500 w-7 h-7" />,
              title: "Phone",
              lines: ["+92 321 4287047", "Mon-Fri 9am-6pm"],
            },
            {
              icon: <FaMapMarkerAlt className="text-green-500 w-7 h-7" />,
              title: "Location",
              lines: ["Lahore, Pakistan", "Visit our Showroom"],
            },
          ].map((info, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-full bg-green-500/10 transition-transform duration-300 hover:scale-110">
                {info.icon}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-neutral-900">
                  {info.title}
                </h3>

                {info.lines.map((line, i) => (
                  <p key={i} className="text-neutral-700 leading-relaxed ">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="w-full lg:w-[80%] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.123456789!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c8d3d8b3c9%3A0xbad5d999!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696523493432!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Lahore Map"
            ></iframe>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/923214287047"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 z-50 flex items-center justify-center hover:scale-110"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default Contact;
