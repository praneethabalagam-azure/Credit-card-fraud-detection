import { Mail, MessageSquare, Send } from "lucide-react";

function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">

          <p className="text-blue-600 font-semibold">
            CONTACT
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Let's Talk
          </h1>

          <p className="text-gray-500 mt-4">
            Have a question about FraudShield?
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <h2 className="text-2xl font-bold">
              Send us a message
            </h2>

            <div className="space-y-5 mt-8">

              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              />

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700">
                <Send size={18} />
                Send Message
              </button>

            </div>

          </div>

          <div className="bg-blue-600 rounded-3xl p-8 text-white">

            <h2 className="text-2xl font-bold">
              FraudShield AI
            </h2>

            <p className="text-blue-100 mt-4 leading-relaxed">
              Intelligent fraud detection powered by machine learning,
              anomaly detection and explainable AI.
            </p>

            <div className="space-y-6 mt-10">

              <ContactInfo
                icon={<Mail />}
                title="Email"
                text="support@fraudshield.ai"
              />

              <ContactInfo
                icon={<MessageSquare />}
                title="Support"
                text="Available for project queries"
              />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

function ContactInfo({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">

      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="font-semibold">
          {title}
        </p>

        <p className="text-blue-100 text-sm mt-1">
          {text}
        </p>
      </div>

    </div>
  );
}

export default Contact;