import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

interface PricingProps {
  theme: "dark" | "light";
}

export function Pricing({ theme }: PricingProps) {
  const isDark = theme === "dark";

  const lotusFeatures = [
    "Instant ID in 2 mins",
    "Beginner Friendly",
    "Low Deposit Entry",
  ];

  const bsafeFeatures = [
    "High Limits",
    "VIP Support",
    "Fast Withdrawals",
  ];

  return (
    <section className={`px-4 py-16 ${isDark ? "bg-black" : "bg-slate-50"}`}>
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div
              className={`relative rounded-2xl border-2 p-6 ${
                isDark
                  ? "border-[#ED1C24] bg-[#0A0A0A] shadow-[0_0_30px_rgba(237,28,36,0.3)]"
                  : "border-[#ED1C24] bg-white shadow-lg"
              }`}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#ED1C24]">
                  <svg
                    className="h-8 w-8 text-[#ED1C24]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-[#ED1C24]">LOTUS ID</h3>
              <ul className="mb-6 space-y-3">
                {lotusFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ED1C24]">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className={isDark ? "text-white" : "text-slate-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className={`rounded-lg p-4 ${
                  isDark ? "bg-black/50" : "bg-slate-100"
                }`}
              >
                <p className={`text-center text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}>
                  STARTING FROM
                </p>
                <p className="text-center text-4xl font-black text-[#ED1C24]">₹500</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              className={`relative rounded-2xl border-2 p-6 ${
                isDark
                  ? "border-[#005BBB] bg-[#0A0A0A] shadow-[0_0_30px_rgba(0,91,187,0.3)]"
                  : "border-[#005BBB] bg-white shadow-lg"
              }`}
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#005BBB]">
                  <svg
                    className="h-8 w-8 text-[#005BBB]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-[#005BBB]">B SAFE ID</h3>
              <ul className="mb-6 space-y-3">
                {bsafeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#005BBB]">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className={isDark ? "text-white" : "text-slate-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className={`rounded-lg p-4 ${
                  isDark ? "bg-black/50" : "bg-slate-100"
                }`}
              >
                <p className={`text-center text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}>
                  STARTING FROM
                </p>
                <p className="text-center text-4xl font-black text-[#005BBB]">₹1000</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}