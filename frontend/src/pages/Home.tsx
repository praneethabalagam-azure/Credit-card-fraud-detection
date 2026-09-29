function Home() {
  return (
    <main className="min-h-screen bg-white pt-28">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-3xl">

          <p className="text-blue-600 font-semibold tracking-wide">
            AI-POWERED SECURITY
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mt-4">
            AI Powered Credit Card
            <span className="text-blue-600"> Fraud Detection</span>
          </h1>

          <p className="text-lg text-gray-500 mt-6 leading-relaxed">
            Detect fraudulent credit card transactions using machine
            learning, anomaly detection, and explainable AI.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/fraud-detection"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Start Detection
            </a>

            <a
              href="#about"
              className="border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
            >
              Learn More
            </a>

          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900">
                284,807+
              </h2>
              <p className="text-gray-500 mt-2">
                Transactions
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-red-500">
                492
              </h2>
              <p className="text-gray-500 mt-2">
                Fraud Cases
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-green-500">
                99.8%
              </h2>
              <p className="text-gray-500 mt-2">
                Legitimate Transactions
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-blue-600">
                5+
              </h2>
              <p className="text-gray-500 mt-2">
                ML Models
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="max-w-3xl">

          <p className="text-blue-600 font-semibold">
            ABOUT THE SYSTEM
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Fighting financial fraud with machine learning
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            Credit card fraud detection is challenging because fraudulent
            transactions represent only a very small percentage of all
            transactions. Our system focuses on handling this severe class
            imbalance while detecting suspicious transactions accurately.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Home;