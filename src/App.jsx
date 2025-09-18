import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";  // <-- import SignIn
import SignUp from "./Components/SignUp";  // <-- import SignUp

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<SignIn />} />   
          <Route path="/signup" element={<SignUp />} />   
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
