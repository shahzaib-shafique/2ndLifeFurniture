import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import MinimalHeader from "./MinimalHeader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MinimalHeader />

      <div className="flex-grow flex items-center justify-center px-4 sm:px-6">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-6 sm:p-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Reset Your Password
          </h2>

          {sent ? (
            <div className="text-center space-y-4">
              <p className="text-green-600 font-medium">
                If an account exists for{" "}
                <span className="font-semibold">{email}</span>, we’ve sent a
                password reset link to it.
              </p>
              <Link
                to="/signin"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold"
              >
                Back to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-3 focus:outline-none text-sm sm:text-base"
                    aria-label="Email Address"
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer w-full py-3 rounded-lg font-semibold text-white transition-all ${
                  loading
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          )}

          {!sent && (
            <p className="text-center text-sm text-gray-500">
              Remember your password?{" "}
              <Link
                to="/signin"
                className="text-green-600 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
