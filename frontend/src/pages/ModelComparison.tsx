function ModelComparison() {
  const models = [
    {
      name: "Logistic Regression",
      precision: "91.2%",
      recall: "84.6%",
      f1: "87.8%",
      roc: "96.3%",
      pr: "82.5%",
      time: "1.2s",
    },
    {
      name: "Random Forest",
      precision: "94.8%",
      recall: "89.7%",
      f1: "92.2%",
      roc: "98.1%",
      pr: "88.9%",
      time: "4.6s",
    },
    {
      name: "XGBoost",
      precision: "96.1%",
      recall: "91.4%",
      f1: "93.7%",
      roc: "98.7%",
      pr: "91.2%",
      time: "3.8s",
      best: true,
    },
    {
      name: "Isolation Forest",
      precision: "78.4%",
      recall: "76.2%",
      f1: "77.3%",
      roc: "91.8%",
      pr: "69.5%",
      time: "2.1s",
    },
    {
      name: "One-Class SVM",
      precision: "72.6%",
      recall: "68.9%",
      f1: "70.7%",
      roc: "88.4%",
      pr: "63.7%",
      time: "5.2s",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <p className="text-blue-600 font-semibold tracking-wide">
            MACHINE LEARNING
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Model Comparison
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl">
            Compare different machine learning and anomaly detection
            models based on their fraud detection performance.
          </p>

        </div>


        {/* Best Model Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <p className="text-blue-100 font-medium">
                RECOMMENDED MODEL
              </p>

              <h2 className="text-3xl font-bold mt-2">
                XGBoost
              </h2>

              <p className="text-blue-100 mt-2 max-w-xl">
                XGBoost currently provides the strongest overall balance
                between precision, recall and fraud detection performance.
              </p>

            </div>

            <div className="bg-white/15 rounded-2xl px-8 py-5 text-center">

              <p className="text-blue-100 text-sm">
                PR AUC
              </p>

              <p className="text-4xl font-bold mt-1">
                91.2%
              </p>

            </div>

          </div>

        </div>


        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

          <div className="p-6 border-b border-gray-100">

            <h2 className="text-2xl font-bold text-gray-900">
              Performance Comparison
            </h2>

            <p className="text-gray-500 mt-1">
              Evaluation metrics for each trained model.
            </p>

          </div>


          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-gray-50">

                <tr>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Model
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Precision
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Recall
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    F1 Score
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    ROC AUC
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    PR AUC
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Training Time
                  </th>

                </tr>

              </thead>


              <tbody>

                {models.map((model) => (

                  <tr
                    key={model.name}
                    className={`border-t border-gray-100 hover:bg-blue-50/40 transition ${
                      model.best ? "bg-blue-50/60" : ""
                    }`}
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                            model.best
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {model.name.charAt(0)}
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900">
                            {model.name}
                          </p>

                          {model.best && (
                            <span className="text-xs text-blue-600 font-semibold">
                              BEST MODEL
                            </span>
                          )}

                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5 font-medium text-gray-700">
                      {model.precision}
                    </td>

                    <td className="px-6 py-5 font-medium text-gray-700">
                      {model.recall}
                    </td>

                    <td className="px-6 py-5 font-semibold text-gray-900">
                      {model.f1}
                    </td>

                    <td className="px-6 py-5 font-medium text-gray-700">
                      {model.roc}
                    </td>

                    <td className="px-6 py-5 font-semibold text-blue-600">
                      {model.pr}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {model.time}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>


        {/* Explanation Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <h3 className="font-bold text-gray-900">
              Precision
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Measures how many transactions predicted as fraud were
              actually fraudulent.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <h3 className="font-bold text-gray-900">
              Recall
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Measures how many of the actual fraudulent transactions
              were successfully detected.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <h3 className="font-bold text-gray-900">
              PR AUC
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Particularly useful for evaluating models on highly
              imbalanced fraud detection datasets.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ModelComparison;