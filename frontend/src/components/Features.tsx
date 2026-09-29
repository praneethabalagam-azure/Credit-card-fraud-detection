const features = [
  {
    title: "SMOTE",
    description: "Handle severe class imbalance using synthetic fraud samples.",
    icon: "⚖️",
  },
  {
    title: "Random Forest",
    description: "Use ensemble learning to identify suspicious transactions.",
    icon: "🌳",
  },
  {
    title: "XGBoost",
    description: "Powerful gradient boosting for fraud classification.",
    icon: "⚡",
  },
  {
    title: "Anomaly Detection",
    description: "Identify unusual transactions using Isolation Forest.",
    icon: "🔍",
  },
  {
    title: "Threshold Tuning",
    description: "Balance fraud detection with false positive rates.",
    icon: "🎯",
  },
  {
    title: "Explainable AI",
    description: "Understand why a transaction was flagged as suspicious.",
    icon: "💡",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold">
            POWERFUL FEATURES
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Everything You Need to Detect Fraud
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A complete machine learning pipeline designed to handle the
            challenges of real-world credit card fraud detection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-7 rounded-2xl border border-gray-100
              hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;