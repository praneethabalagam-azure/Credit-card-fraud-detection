import { useState } from "react";

function Transactions() {
  const transactions = [
    {
      id: "TX10241",
      amount: "₹4,500",
      status: "Legitimate",
      risk: "Low",
    },
    {
      id: "TX10242",
      amount: "₹85,000",
      status: "Fraud",
      risk: "High",
    },
    {
      id: "TX10243",
      amount: "₹2,100",
      status: "Legitimate",
      risk: "Low",
    },
    {
      id: "TX10244",
      amount: "₹42,500",
      status: "Suspicious",
      risk: "Medium",
    },
    {
      id: "TX10245",
      amount: "₹7,800",
      status: "Legitimate",
      risk: "Low",
    },
  ];

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.id
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || transaction.status === statusFilter;

    const matchesRisk =
      riskFilter === "All" || transaction.risk === riskFilter;

    return matchesSearch && matchesStatus && matchesRisk;
  });

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-blue-600 font-semibold">
            TRANSACTION MONITORING
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Transactions
          </h1>

          <p className="text-gray-500 mt-3">
            Monitor and review recent credit card transactions.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">
              Total Transactions
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              12,458
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">
              Fraud Detected
            </p>

            <h2 className="text-3xl font-bold text-red-500 mt-2">
              127
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">
              Safe Transactions
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              12,331
            </h2>
          </div>

        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Table Header + Filters */}
          <div className="p-6 border-b border-gray-100">

            <h2 className="text-2xl font-bold text-gray-900">
              Recent Transactions
            </h2>

            <div className="flex flex-col md:flex-row gap-4 mt-5">

              {/* Search */}
              <input
                type="text"
                placeholder="Search Transaction ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 flex-1 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3"
              >
                <option value="All">All Status</option>
                <option value="Legitimate">Legitimate</option>
                <option value="Suspicious">Suspicious</option>
                <option value="Fraud">Fraud</option>
              </select>

              {/* Risk Filter */}
              <select
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3"
              >
                <option value="All">All Risk Levels</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">
                <tr>

                  <th className="text-left px-6 py-4 text-sm text-gray-500">
                    Transaction ID
                  </th>

                  <th className="text-left px-6 py-4 text-sm text-gray-500">
                    Amount
                  </th>

                  <th className="text-left px-6 py-4 text-sm text-gray-500">
                    Status
                  </th>

                  <th className="text-left px-6 py-4 text-sm text-gray-500">
                    Risk Level
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition"
                  >

                    <td className="px-6 py-5 font-semibold text-gray-900">
                      {transaction.id}
                    </td>

                    <td className="px-6 py-5 text-gray-700">
                      {transaction.amount}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          transaction.status === "Fraud"
                            ? "bg-red-100 text-red-600"
                            : transaction.status === "Suspicious"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {transaction.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`font-semibold ${
                          transaction.risk === "High"
                            ? "text-red-500"
                            : transaction.risk === "Medium"
                            ? "text-orange-500"
                            : "text-green-600"
                        }`}
                      >
                        {transaction.risk}
                      </span>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

            {/* No Results */}
            {filteredTransactions.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No transactions found.
              </div>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}

export default Transactions;