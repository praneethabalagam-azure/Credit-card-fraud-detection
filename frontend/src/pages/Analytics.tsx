function Analytics() {
  const totalTransactions = 284807;
  const fraudTransactions = 492;
  const fraudPercentage = (
    (fraudTransactions / totalTransactions) *
    100
  ).toFixed(2);

  const safeTransactions = totalTransactions - fraudTransactions;

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <section className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-blue-600 font-semibold tracking-wide">
            TRANSACTION INSIGHTS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Analytics
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl">
            Understand transaction activity and identify potential
            fraud patterns.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          {/* Total Transactions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">
              Total Transactions
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {totalTransactions.toLocaleString()}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Transactions analyzed
            </p>
          </div>

          {/* Fraud Transactions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">
              Fraud Transactions
            </p>

            <h2 className="text-3xl font-bold text-red-500 mt-2">
              {fraudTransactions.toLocaleString()}
            </h2>

            <p className="text-red-500 text-sm mt-2">
              Potentially fraudulent
            </p>
          </div>

          {/* Fraud Percentage */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">
              Fraud Rate
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              {fraudPercentage}%
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Of total transactions
            </p>
          </div>

        </div>

        {/* Transaction Overview */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Transaction Distribution */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <h2 className="text-2xl font-bold text-gray-900">
              Transaction Overview
            </h2>

            <p className="text-gray-500 mt-2">
              Distribution of analyzed transactions.
            </p>

            {/* Safe Transactions */}
            <div className="mt-8">

              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  Safe Transactions
                </span>

                <span className="text-sm font-semibold text-green-600">
                  {safeTransactions.toLocaleString()}
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{
                    width: `${100 - Number(fraudPercentage)}%`,
                  }}
                ></div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {(100 - Number(fraudPercentage)).toFixed(2)}% of transactions
              </p>

            </div>

            {/* Fraud Transactions */}
            <div className="mt-8">

              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  Fraud Transactions
                </span>

                <span className="text-sm font-semibold text-red-500">
                  {fraudTransactions.toLocaleString()}
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-4">
                <div
                  className="bg-red-500 h-4 rounded-full"
                  style={{
                    width: `${Number(fraudPercentage)}%`,
                    minWidth: "8px",
                  }}
                ></div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {fraudPercentage}% of transactions
              </p>

            </div>

          </div>

          {/* Fraud Summary */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <h2 className="text-2xl font-bold text-gray-900">
              Fraud Summary
            </h2>

            <p className="text-gray-500 mt-2">
              Overview of detected fraudulent activity.
            </p>

            <div className="mt-8 space-y-5">

              {/* Detected Fraud */}
              <div className="flex items-center justify-between p-5 bg-red-50 rounded-2xl">
                <div>
                  <p className="font-semibold text-gray-900">
                    Fraud Detected
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Transactions requiring attention
                  </p>
                </div>

                <span className="text-2xl font-bold text-red-500">
                  {fraudTransactions}
                </span>
              </div>

              {/* Safe */}
              <div className="flex items-center justify-between p-5 bg-green-50 rounded-2xl">
                <div>
                  <p className="font-semibold text-gray-900">
                    Safe Transactions
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Transactions not flagged as fraud
                  </p>
                </div>

                <span className="text-2xl font-bold text-green-600">
                  {safeTransactions.toLocaleString()}
                </span>
              </div>

              {/* Fraud Rate */}
              <div className="flex items-center justify-between p-5 bg-blue-50 rounded-2xl">
                <div>
                  <p className="font-semibold text-gray-900">
                    Fraud Rate
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Percentage of transactions flagged
                  </p>
                </div>

                <span className="text-2xl font-bold text-blue-600">
                  {fraudPercentage}%
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Important Insight */}
        <div className="mt-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

          <h2 className="text-2xl font-bold text-gray-900">
            Key Insight
          </h2>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Fraudulent transactions represent a small percentage of the
            overall transaction volume. Continuous monitoring helps
            identify potentially fraudulent activity while keeping
            legitimate transactions flowing normally.
          </p>

        </div>

      </section>
    </main>
  );
}

export default Analytics;