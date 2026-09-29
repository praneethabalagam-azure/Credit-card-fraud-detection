import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Mark the user as logged in
    localStorage.setItem("isLoggedIn", "true");

    // Go to dashboard
    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="max-w-md w-full">

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

          {/* Logo */}
          <div className="text-center">

            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white text-3xl">
                🛡️
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mt-5">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Sign in to FraudShield
            </p>

          </div>

          {/* Login Form */}
          <div className="mt-8 space-y-5">

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            {/* Sign In */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition"
            >
              Sign In
            </button>

          </div>

          {/* Create Account */}
          <p className="text-center text-sm text-gray-500 mt-6">

            Don't have an account?

            <button
              type="button"
              onClick={() => navigate("/create-account")}
              className="text-blue-600 font-semibold ml-1 hover:underline"
            >
              Create one
            </button>

          </p>

        </div>

      </div>

    </main>
  );
}

export default Login;