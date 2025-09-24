import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, UserCircle } from "lucide-react";
import MinimalHeader from "./MinimalHeader";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

     const handleSignUp = (e) => {
    e.preventDefault();
    // Add signup logic here
    navigate("/buy-sell"); // ← Navigate to BuySell page
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MinimalHeader />

      <div className="flex-grow flex items-center justify-center px-4 sm:px-0">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8 sm:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Create a New Account
          </h2>

          <form className="space-y-4"  onSubmit={handleSignUp}>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Username"
                className="pl-10 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email"
                className="pl-10 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="pl-10 pr-10 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="pl-10 pr-10 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className=" absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              ></button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="cursor-pointer w-4 h-4" />
              <p>
                I agree to the{" "}
                <Link to="/terms" className="text-green-600 hover:underline">
                  Terms & Conditions
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center gap-4">
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
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
