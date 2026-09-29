import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-gray-900"
        >
          Fraud<span className="text-blue-600">Shield</span>
        </Link>

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/fraud-detection"
            className="text-gray-700 hover:text-blue-600"
          >
            Fraud Detection
          </Link>
          <Link
  to="/transactions"
  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
>
  Transactions
</Link>

          <Link
            to="/analytics"
            className="text-gray-700 hover:text-blue-600"
          >
            Analytics
          </Link>


          
          

          

          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/fraud-detection"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;