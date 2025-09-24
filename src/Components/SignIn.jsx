import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react"; 
import MinimalHeader from "./MinimalHeader";


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate(); 

  const handleSignIn = (e) => {
    e.preventDefault();
   
    navigate("/buy-sell"); 
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MinimalHeader />

      <div className="flex-grow flex items-center justify-center px-4 sm:px-6">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-6 sm:p-10 space-y-6">
         
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Sign In to Your Account
          </h2>

          
          <form className="space-y-4" onSubmit={handleSignIn}>
      
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-3 focus:outline-none text-sm sm:text-base"
              />
            </div>

            
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-3 focus:outline-none text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer focus:outline-none text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

           
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-green-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

         
            <button
              type="submit"
              className="cursor-pointer w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              Sign In
            </button>
          </form>

         
          <div className="flex items-center gap-2 sm:gap-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

       
          <button
            type="button"
            className="cursor-pointer w-full flex items-center justify-center gap-2 border py-3 rounded-lg font-medium hover:bg-gray-50 transition-all"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm sm:text-base">Sign in with Google</span>
          </button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
