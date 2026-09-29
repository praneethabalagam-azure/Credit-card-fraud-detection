function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

          <div>
            <p className="text-blue-600 font-semibold tracking-wide">
              OVERVIEW
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              FraudShield Dashboard
            </h1>

            <p className="text-gray-500 mt-3">
              Monitor your transactions and identify suspicious activity.
            </p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            + New Detection
          </button>

        </div>


        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Total */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <p className="text-gray-500 text-sm">
              Total Transactions
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              12,458
            </h2>

            <p className="text-green-600 text-sm font-medium mt-3">
              ↑ 8.2% this month
            </p>

          </div>


          {/* Fraud */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <p className="text-gray-500 text-sm">
              Fraud Detected
            </p>

            <h2 className="text-3xl font-bold text-red-500 mt-3">
              127
            </h2>

            <p className="text-red-500 text-sm font-medium mt-3">
              ↑ 2.4% this month
            </p>

          </div>


          {/* Safe */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <p className="text-gray-500 text-sm">
              Safe Transactions
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-3">
              12,331
            </h2>

            <p className="text-green-600 text-sm font-medium mt-3">
              99.0% of transactions
            </p>

          </div>


          {/* Protected */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <p className="text-gray-500 text-sm">
              Amount Protected
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-3">
              ₹18.4L
            </h2>

            <p className="text-green-600 text-sm font-medium mt-3">
              Estimated savings
            </p>

          </div>

        </div>


        {/* Main Section */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">


          {/* Fraud Overview */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Fraud Overview
                </h2>

                <p className="text-gray-500 mt-1">
                  Transaction activity over the past 7 days.
                </p>
              </div>

              <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
              </select>

            </div>


            {/* Simple Chart */}
            <div className="mt-8 h-64 flex items-end gap-4">

              <div className="flex-1 bg-blue-100 rounded-t-xl h-[45%]"></div>

              <div className="flex-1 bg-blue-200 rounded-t-xl h-[65%]"></div>

              <div className="flex-1 bg-blue-300 rounded-t-xl h-[52%]"></div>

              <div className="flex-1 bg-blue-400 rounded-t-xl h-[78%]"></div>

              <div className="flex-1 bg-blue-500 rounded-t-xl h-[60%]"></div>

              <div className="flex-1 bg-blue-600 rounded-t-xl h-[88%]"></div>

              <div className="flex-1 bg-blue-700 rounded-t-xl h-[72%]"></div>

            </div>


            <div className="flex justify-between text-xs text-gray-400 mt-3">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

          </div>


          {/* Risk Summary */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              Risk Summary
            </h2>

            <p className="text-gray-500 mt-2">
              Current transaction risk levels.
            </p>


            <div className="mt-8 space-y-6">

              {/* Low */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-medium text-gray-700">
                    Low Risk
                  </span>

                  <span className="text-sm font-semibold text-green-600">
                    82%
                  </span>

                </div>

                <div className="h-2 bg-gray-100 rounded-full">

                  <div className="h-2 bg-green-500 rounded-full w-[82%]"></div>

                </div>

              </div>


              {/* Medium */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-medium text-gray-700">
                    Medium Risk
                  </span>

                  <span className="text-sm font-semibold text-orange-500">
                    13%
                  </span>

                </div>

                <div className="h-2 bg-gray-100 rounded-full">

                  <div className="h-2 bg-orange-400 rounded-full w-[13%]"></div>

                </div>

              </div>


              {/* High */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-medium text-gray-700">
                    High Risk
                  </span>

                  <span className="text-sm font-semibold text-red-500">
                    5%
                  </span>

                </div>

                <div className="h-2 bg-gray-100 rounded-full">

                  <div className="h-2 bg-red-500 rounded-full w-[5%]"></div>

                </div>

              </div>

            </div>


            <div className="mt-10 bg-blue-50 rounded-2xl p-5">

              <p className="text-sm text-blue-600 font-semibold">
                SYSTEM STATUS
              </p>

              <div className="flex items-center gap-2 mt-2">

                <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                <p className="font-semibold text-gray-900">
                  FraudShield is operational
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Recent Transactions */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm mt-8 overflow-hidden">

          <div className="p-6 flex items-center justify-between">

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Recent Transactions
              </h2>

              <p className="text-gray-500 mt-1">
                Latest activity detected by FraudShield.
              </p>
            </div>

            <a
              href="/transactions"
              className="text-blue-600 font-semibold text-sm hover:text-blue-700"
            >
              View All
            </a>

          </div>


          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr>

                  <th className="text-left px-6 py-4 text-sm text-gray-500">
                    Transaction
                  </th>

                  <th className="text-left px-6 py-4 text-sm text-gray-500">
                    Amount
                  </th>

                  <th className="text-left px-6 py-4 text-sm text-gray-500">
                    Status
                  </th>

                  <th className="text-left px-6 py-4 text-sm text-gray-500">
                    Risk
                  </th>

                </tr>

              </thead>


              <tbody>

                <tr className="border-t border-gray-100">

                  <td className="px-6 py-5 font-semibold">
                    TX10241
                  </td>

                  <td className="px-6 py-5">
                    ₹4,500
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                      Legitimate
                    </span>
                  </td>

                  <td className="px-6 py-5 text-green-600 font-semibold">
                    Low
                  </td>

                </tr>


                <tr className="border-t border-gray-100">

                  <td className="px-6 py-5 font-semibold">
                    TX10242
                  </td>

                  <td className="px-6 py-5">
                    ₹85,000
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                      Fraud
                    </span>
                  </td>

                  <td className="px-6 py-5 text-red-500 font-semibold">
                    High
                  </td>

                </tr>


                <tr className="border-t border-gray-100">

                  <td className="px-6 py-5 font-semibold">
                    TX10243
                  </td>

                  <td className="px-6 py-5">
                    ₹2,100
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                      Legitimate
                    </span>
                  </td>

                  <td className="px-6 py-5 text-green-600 font-semibold">
                    Low
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Dashboard;