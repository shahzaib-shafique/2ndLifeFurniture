import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import Terms from "./Components/Terms";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BuySell from "./Components/BuySell"; // Landing page for buy & sell
import Buy from "./Components/Buy";         // Buy page with categories & arrivals
import Sell from "./Components/Sell";       // Sell page with form & preview

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Buy & Sell Landing Page */}
          <Route path="/buy-sell" element={<BuySell />} />

          {/* Actual Pages */}
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
