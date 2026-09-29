import { ShieldCheck, ArrowRight, Activity, LockKeyhole } from "lucide-react";

function Hero() {
  return (
    <section className="min-h-screen bg-white pt-32 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Activity size={16} />
            AI-Powered Fraud Detection
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">

            Detect Fraud
            <span className="text-blue-600"> Before </span>
            It Happens.

          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            Protect every transaction with intelligent machine learning,
            anomaly detection, and real-time fraud risk analysis.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-xl transition-all duration-300">

              Start Detection

              <ArrowRight size={19} />

            </button>

            <button className="border border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition">

              Learn More

            </button>

          </div>

          {/* Trust */}
          <div className="flex items-center gap-3 mt-8 text-sm text-gray-500">

            <LockKeyhole size={18} className="text-green-500" />

            Secure • Intelligent • Explainable

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          {/* Background glow */}
          <div className="absolute inset-0 bg-blue-100 blur-3xl opacity-50 rounded-full" />

          {/* Main Card */}
          <div className="relative bg-white border border-gray-100 shadow-2xl rounded-3xl p-8">

            <div className="flex justify-between items-center mb-8">

              <div>
                <p className="text-sm text-gray-500">
                  Transaction Monitor
                </p>

                <h3 className="text-2xl font-bold text-gray-900">
                  FraudShield AI
                </h3>
              </div>

              <div className="bg-green-100 p-3 rounded-xl">
                <ShieldCheck className="text-green-600" size={28} />
              </div>

            </div>

            {/* Transaction */}
            <div className="bg-gray-50 rounded-2xl p-5 mb-4">

              <div className="flex justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Transaction Amount
                  </p>

                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    ₹24,850
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Risk Score
                  </p>

                  <p className="text-2xl font-bold text-green-600">
                    8%
                  </p>
                </div>

              </div>

            </div>

            {/* Status */}
            <div className="flex items-center justify-between bg-green-50 border border-green-100 rounded-2xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                <div>
                  <p className="font-semibold text-gray-900">
                    Transaction Safe
                  </p>

                  <p className="text-sm text-gray-500">
                    AI analysis completed
                  </p>
                </div>

              </div>

              <span className="text-green-600 font-semibold">
                92% Safe
              </span>

            </div>

          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl border border-gray-100 rounded-2xl px-5 py-4">

            <p className="text-xs text-gray-500">
              Fraud Cases Detected
            </p>

            <p className="text-2xl font-bold text-red-500">
              492
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;