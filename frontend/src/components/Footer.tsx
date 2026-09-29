function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white px-6 py-12"
    >

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              Fraud<span className="text-blue-400">Shield</span> AI
            </h2>

            <p className="text-gray-400 mt-3 max-w-sm">
              Intelligent credit card fraud detection powered by machine
              learning and explainable AI.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#features">Features</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © 2026 FraudShield AI. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;