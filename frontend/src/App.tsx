import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import FraudDetection from "./pages/FraudDetection";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount.tsx";


// Protected page
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">

          {/* Lock Icon */}
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">
              🔒
            </span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mt-6">
            Login Required
          </h1>

          <p className="text-gray-500 mt-3 leading-relaxed">
            Please sign in to your FraudShield account to access this feature.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="w-full mt-7 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Login to Continue
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full mt-3 border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
          >
            Back to Home
          </button>

        </div>
      </main>
    );
  }

  return children;
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Public Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Protected Fraud Detection */}
        <Route
          path="/fraud-detection"
          element={
            <ProtectedRoute>
              <FraudDetection />
            </ProtectedRoute>
          }
        />

        {/* Protected Transactions */}
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />

        {/* Protected Analytics */}
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Create Account */}
        <Route
          path="/create-account"
          element={<CreateAccount />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;