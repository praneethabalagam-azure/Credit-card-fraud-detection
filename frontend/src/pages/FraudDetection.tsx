
import { useState } from "react";

function FraudDetection() {
  const [amount, setAmount] = useState("");
  const [merchantId, setMerchantId] = useState("");
  const [transactionType, setTransactionType] = useState("purchase");
  const [location, setLocation] = useState("New York");
  const [transactionDate, setTransactionDate] = useState("");

  const [risk, setRisk] = useState("");
  const [probability, setProbability] = useState("");

  const [status, setStatus] = useState("ready");
  const [loading, setLoading] = useState(false);

  const handleDetect = async () => {
    console.log("========================================");
    console.log("BUTTON CLICKED");
    console.log("========================================");

    console.log("Amount:", amount);
    console.log("Merchant ID:", merchantId);
    console.log("Transaction Type:", transactionType);
    console.log("Location:", location);
    console.log("Transaction Date:", transactionDate);

    // Check required fields
    if (!amount || !merchantId || !transactionDate) {
      console.log("Missing required information");

      setStatus("missing");
      setRisk("");
      setProbability("");

      return;
    }

    setLoading(true);
    setStatus("loading");
    setRisk("");
    setProbability("");

    try {
      console.log("========================================");
      console.log("SENDING REQUEST TO FLASK");
      console.log("========================================");

      const response = await fetch(
        "http://127.0.0.1:5000/predict",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            amount: Number(amount),
            merchantId: Number(merchantId),
            transactionType: transactionType,
            location: location,
            transactionDate: transactionDate,
          }),
        }
      );

      console.log("Response received:", response.status);

      const data = await response.json();

      console.log("========================================");
      console.log("BACKEND RESPONSE");
      console.log("========================================");

      console.log("Full response:", data);

      console.log(
        "Prediction:",
        data.result
      );

      console.log(
        "Fraud Probability:",
        data.fraudProbability
      );

      console.log(
        "Legitimate Probability:",
        data.legitimateProbability
      );

      console.log(
        "Is Fraud:",
        data.isFraud
      );

      // Check backend error
      if (!response.ok) {
        throw new Error(
          data.error || "Prediction failed"
        );
      }

      // Get prediction from backend
      const prediction = data.result;

      // Get fraud probability
      const fraudProbability =
        Number(data.fraudProbability);

      // Check probability
      if (isNaN(fraudProbability)) {
        console.error(
          "Fraud probability is undefined or invalid"
        );

        setStatus("error");
        setRisk("");
        setProbability("");

        return;
      }

      // Show probability
      setProbability(
        fraudProbability.toFixed(2)
      );

      // Determine risk level
      if (fraudProbability >= 70) {
        setRisk("High Risk");
      } else if (fraudProbability >= 40) {
        setRisk("Medium Risk");
      } else {
        setRisk("Low Risk");
      }

      // Determine fraud / legitimate
      if (prediction === "Fraud") {
        console.log("FINAL RESULT: FRAUD");

        setStatus("fraud");
      } else {
        console.log("FINAL RESULT: LEGITIMATE");

        setStatus("legitimate");
      }

    } catch (error) {
      console.error(
        "========================================"
      );

      console.error(
        "PREDICTION ERROR"
      );

      console.error(error);

      setStatus("error");
      setRisk("");
      setProbability("");

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6">

      {/* PAGE HEADER */}
      <div className="mb-10">

        <p className="text-blue-600 font-semibold tracking-wide">
          AI FRAUD DETECTION
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Detect a Fraudulent Transaction
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl">
          Enter the transaction details below and our
          machine learning model will analyze the
          transaction and identify potential fraud.
        </p>

      </div>


      {/* MAIN CONTENT */}
      <div className="grid lg:grid-cols-3 gap-8">


        {/* ========================================= */}
        {/* TRANSACTION FORM */}
        {/* ========================================= */}

        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

          <h2 className="text-2xl font-bold text-gray-900">
            Transaction Details
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Provide the information associated with the transaction.
          </p>


          <div className="grid md:grid-cols-2 gap-6">


            {/* AMOUNT */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Transaction Amount
              </label>

              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* MERCHANT ID */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Merchant ID
              </label>

              <input
                type="number"
                placeholder="Enter merchant ID"
                value={merchantId}
                onChange={(e) =>
                  setMerchantId(e.target.value)
                }
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* TRANSACTION TYPE */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Transaction Type
              </label>

              <select
                value={transactionType}
                onChange={(e) =>
                  setTransactionType(e.target.value)
                }
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >

                <option value="purchase">
                  Purchase
                </option>

                <option value="refund">
                  Refund
                </option>

              </select>

            </div>


            {/* LOCATION */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Location
              </label>

              <select
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >

                <option value="New York">
                  New York
                </option>

                <option value="Dallas">
                  Dallas
                </option>

                <option value="Chicago">
                  Chicago
                </option>

                <option value="Houston">
                  Houston
                </option>

                <option value="Phoenix">
                  Phoenix
                </option>

                <option value="Philadelphia">
                  Philadelphia
                </option>

                <option value="San Antonio">
                  San Antonio
                </option>

                <option value="San Diego">
                  San Diego
                </option>

                <option value="San Jose">
                  San Jose
                </option>

                <option value="Los Angeles">
                  Los Angeles
                </option>

              </select>

            </div>


            {/* TRANSACTION DATE */}
            <div className="md:col-span-2">

              <label className="text-sm font-semibold text-gray-700">
                Transaction Date
              </label>

              <input
                type="datetime-local"
                value={transactionDate}
                onChange={(e) =>
                  setTransactionDate(e.target.value)
                }
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>


          {/* DETECT BUTTON */}
          <button
            type="button"
            onClick={handleDetect}
            disabled={loading}
            className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:shadow-lg transition disabled:opacity-60"
          >

            {loading
              ? "Analyzing Transaction..."
              : "Detect Fraud"}

          </button>

        </div>


        {/* ========================================= */}
        {/* RESULT SECTION */}
        {/* ========================================= */}

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-fit">

          <h2 className="text-2xl font-bold text-gray-900">
            Detection Result
          </h2>

          <p className="text-gray-500 mt-2">
            AI-powered transaction analysis.
          </p>


          {/* READY */}
          {status === "ready" && (

            <div className="mt-8 bg-gray-50 rounded-2xl p-6 text-center">

              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">

                <span className="text-2xl">
                  🔍
                </span>

              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Ready to Analyze
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Enter transaction details and click Detect Fraud.
              </p>

            </div>

          )}


          {/* LOADING */}
          {status === "loading" && (

            <div className="mt-8 bg-blue-50 rounded-2xl p-6 text-center">

              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">

                <span className="text-2xl">
                  ⏳
                </span>

              </div>

              <h3 className="text-xl font-bold text-blue-600 mt-4">
                Analyzing Transaction
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Our AI model is checking this transaction for possible fraud.
              </p>

            </div>

          )}


          {/* MISSING INFORMATION */}
          {status === "missing" && (

            <div className="mt-8 bg-orange-50 rounded-2xl p-6 text-center">

              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">

                <span className="text-2xl">
                  !
                </span>

              </div>

              <h3 className="text-xl font-bold text-orange-600 mt-4">
                Missing Information
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Please enter the amount, merchant ID and transaction date.
              </p>

            </div>

          )}


          {/* FRAUD RESULT */}
          {status === "fraud" && (

            <div className="mt-8 bg-red-50 rounded-2xl p-6 text-center">

              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">

                <span className="text-2xl">
                  ⚠️
                </span>

              </div>

              <h3 className="text-xl font-bold text-red-600 mt-4">
                Potential Fraud Detected
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                This transaction has been identified as potentially fraudulent.
              </p>


              <div className="mt-5">

                <p className="text-sm text-gray-500">
                  Risk Level
                </p>

                <p className="text-lg font-bold text-red-600">
                  {risk}
                </p>

              </div>


              <div className="mt-3">

                <p className="text-sm text-gray-500">
                  Fraud Probability
                </p>

                <p className="text-lg font-bold text-gray-900">
                  {probability}%
                </p>

              </div>

            </div>

          )}


          {/* LEGITIMATE RESULT */}
          {status === "legitimate" && (

            <div className="mt-8 bg-green-50 rounded-2xl p-6 text-center">

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">

                <span className="text-2xl">
                  ✓
                </span>

              </div>

              <h3 className="text-xl font-bold text-green-600 mt-4">
                Transaction Appears Legitimate
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                No significant fraud pattern was detected for this transaction.
              </p>


              <div className="mt-5">

                <p className="text-sm text-gray-500">
                  Risk Level
                </p>

                <p className="text-lg font-bold text-green-600">
                  {risk}
                </p>

              </div>


              <div className="mt-3">

                <p className="text-sm text-gray-500">
                  Fraud Probability
                </p>

                <p className="text-lg font-bold text-gray-900">
                  {probability}%
                </p>

              </div>

            </div>

          )}


          {/* ERROR */}
          {status === "error" && (

            <div className="mt-8 bg-orange-50 rounded-2xl p-6 text-center">

              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">

                <span className="text-2xl">
                  ⚠️
                </span>

              </div>

              <h3 className="text-xl font-bold text-orange-600 mt-4">
                Analysis Failed
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                We couldn't complete the fraud analysis.
                Please make sure the backend server is running.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default FraudDetection;

