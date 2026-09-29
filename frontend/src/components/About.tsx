import { ShieldCheck, Brain, Lock, Zap } from "lucide-react";

function About() {
  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold tracking-wider">
            ABOUT FRAUDSHIELD
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Smarter Protection for Every Transaction
          </h1>

          <p className="text-gray-500 text-lg mt-6">
            FraudShield helps detect suspicious credit card transactions
            and provides a simple risk assessment.
          </p>

        </div>


        {/* Main section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="text-blue-600" size={30} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-6">
              Our Mission
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Our goal is to make digital payments safer by helping
              businesses identify potentially fraudulent transactions
              quickly and efficiently.
            </p>

          </div>


          <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-lg">

            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <Brain size={30} />
            </div>

            <h2 className="text-2xl font-bold mt-6">
              Intelligent Detection
            </h2>

            <p className="text-blue-100 mt-4 leading-relaxed">
              FraudShield analyzes transaction information and provides
              a risk prediction to help users identify suspicious activity.
            </p>

          </div>

        </div>


        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <Zap className="text-blue-600" size={28} />

            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Fast Detection
            </h3>

            <p className="text-gray-500 mt-2">
              Quickly analyze transactions and receive a fraud risk result.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <Lock className="text-green-600" size={28} />

            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Secure
            </h3>

            <p className="text-gray-500 mt-2">
              Designed to support safer digital transactions and monitoring.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

            <ShieldCheck className="text-purple-600" size={28} />

            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Reliable Protection
            </h3>

            <p className="text-gray-500 mt-2">
              Identify potentially risky transactions before they become
              bigger problems.
            </p>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center mt-16">

          <h2 className="text-3xl font-bold text-gray-900">
            Protect every transaction
          </h2>

          <a
            href="/fraud-detection"
            className="inline-block mt-6 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Start Detection
          </a>

        </div>

      </div>

    </main>
  );
}

export default About;