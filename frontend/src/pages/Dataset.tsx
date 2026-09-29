import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div className="min-h-screen bg-blue-600 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white">
                FraudShield Home 🛡️
              </h1>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;