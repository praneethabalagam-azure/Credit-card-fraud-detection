import { useState } from "react";
import {
  SlidersHorizontal,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

function Threshold() {

  const [threshold, setThreshold] = useState(0.5);

  const recall = Math.round(96 - threshold * 20);
  const precision = Math.round(72 + threshold * 25);

  const f1 = Math.round(
    (2 * precision * recall) /
    (precision + recall)
  );

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold">
            <SlidersHorizontal size={18} />
            MODEL CONTROL
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-5">
            Threshold Tuning
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Adjust the classification threshold to balance fraud
            detection with false positives.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">

          <div className="text-center">

            <p className="text-gray-500">
              Current Threshold
            </p>

            <h2 className="text-6xl font-bold text-blue-600 mt-3">
              {threshold.toFixed(2)}
            </h2>

          </div>

          <div className="mt-12">

            <input
              type="range"
              min="0.1"
              max="0.9"
              step="0.1"
              value={threshold}
              onChange={(e) =>
                setThreshold(Number(e.target.value))
              }
              className="w-full accent-blue-600"
            />

            <div className="flex justify-between text-sm text-gray-400 mt-3">
              <span>0.1</span>
              <span>0.3</span>
              <span>0.5</span>
              <span>0.7</span>
              <span>0.9</span>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <Metric
              title="Precision"
              value={`${precision}%`}
            />

            <Metric
              title="Recall"
              value={`${recall}%`}
            />

            <Metric
              title="F1 Score"
              value={`${f1}%`}
            />

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-red-50 border border-red-100 rounded-2xl p-7">

            <ShieldAlert className="text-red-500" />

            <h3 className="font-bold text-xl mt-4">
              Lower Threshold
            </h3>

            <p className="text-gray-600 mt-2">
              More fraudulent transactions are detected,
              but legitimate customers may receive more
              false alerts.
            </p>

          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-7">

            <ShieldCheck className="text-green-500" />

            <h3 className="font-bold text-xl mt-4">
              Higher Threshold
            </h3>

            <p className="text-gray-600 mt-2">
              Fewer legitimate transactions are flagged,
              but some fraudulent transactions may be missed.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 text-center">

      <p className="text-gray-500">
        {title}
      </p>

      <p className="text-4xl font-bold text-gray-900 mt-2">
        {value}
      </p>

    </div>
  );
}

export default Threshold;