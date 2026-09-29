function Stats() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-blue-600">284,807+</h2>
          <p className="text-gray-500 mt-2">Transactions</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-red-500">492</h2>
          <p className="text-gray-500 mt-2">Fraud Cases</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-green-600">99.8%</h2>
          <p className="text-gray-500 mt-2">Legitimate Transactions</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-orange-500">5+</h2>
          <p className="text-gray-500 mt-2">ML Models</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;