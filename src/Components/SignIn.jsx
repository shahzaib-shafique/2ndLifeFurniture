import React from "react";
import { Link } from "react-router-dom"; // <-- add this
import MinimalHeader from "./MinimalHeader";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MinimalHeader />

      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign In to Your Account
          </h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
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
