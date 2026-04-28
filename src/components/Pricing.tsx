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

  const bsafeFeatures = ["High Limits", "VIP Support", "Fast Withdrawals"];

  return (
    // 1. min-h-screen ensures it takes up the exact height of your monitor.
    // 2. flex items-center justify-center forces the inner div to the absolute dead center.
    <section
      className={`relative z-50 flex min-h-screen w-full items-center justify-center p-4 ${
        isDark ? "bg-black" : "bg-slate-50"
      }`}
    >
      <div className="w-full max-w-4xl mx-auto">
        <Reveal width="100%">
          {/* justify-center ensures horizontal centering of the two cards */}
          <div className="flex w-full flex-col items-center md:flex-row justify-center gap-4 md:gap-2">
            {/* LOTUS ID CARD (LEFT) */}
            <div
              className={`group relative z-10 flex w-full max-w-md flex-col rounded-[2rem] border-2 p-8 transition-all duration-300 hover:z-50 hover:-translate-y-2 ${
                isDark
                  ? "border-[#ED1C24]/40 bg-gradient-to-b from-[#1a0506] to-black shadow-[0_0_30px_rgba(237,28,36,0.15)] hover:border-[#ED1C24] hover:shadow-[0_0_50px_rgba(237,28,36,0.3)]"
                  : "border-[#ED1C24]/30 bg-white hover:border-[#ED1C24] hover:shadow-[0_0_30px_rgba(237,28,36,0.15)]"
              }`}
            >
              <div className="mb-6 flex justify-center">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full border-2 transition-transform duration-500 group-hover:scale-110 ${
                    isDark
                      ? "border-[#ED1C24] bg-[#ED1C24]/10 shadow-[0_0_20px_rgba(237,28,36,0.4)]"
                      : "border-[#ED1C24] bg-red-50"
                  }`}
                >
                  <svg
                    className="h-10 w-10 text-[#ED1C24]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22C12 22 7 18 4 13.5C2 10.5 2 7.5 4 5.5C6 3.5 9 3.5 11 5.5L12 6.5L13 5.5C15 3.5 18 3.5 20 5.5C22 7.5 22 10.5 20 13.5C17 18 12 22 12 22ZM12 18.5C14.5 15.5 18 12 18 8.5C18 7 17 6 16 6C14.5 6 13.5 7 12 9C10.5 7 9.5 6 8 6C7 6 6 7 6 8.5C6 12 9.5 15.5 12 18.5Z" />
                  </svg>
                </div>
              </div>

              <h3 className="mb-6 text-center text-3xl font-black tracking-tight text-[#ED1C24] drop-shadow-[0_0_8px_rgba(237,28,36,0.3)]">
                LOTUS ID
              </h3>

              <ul className="mb-8 flex-1 space-y-4 px-2">
                {lotusFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ED1C24] to-[#a81419] shadow-sm">
                      <Check
                        className="h-3.5 w-3.5 text-white"
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      className={`font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-auto rounded-2xl border p-5 backdrop-blur-sm transition-colors ${
                  isDark
                    ? "border-white/5 bg-[#111] group-hover:bg-[#1a1a1a]"
                    : "border-slate-200 bg-slate-50 group-hover:bg-slate-100"
                }`}
              >
                <p
                  className={`mb-1 text-center text-xs font-bold tracking-widest ${isDark ? "text-slate-500" : "text-slate-500"}`}
                >
                  STARTING FROM
                </p>
                <p className="text-center text-5xl font-black tracking-tighter text-[#ED1C24]">
                  ₹500
                </p>
              </div>
            </div>

            {/* B SAFE ID CARD (RIGHT) */}
            <div
              className={`group relative z-10 flex w-full max-w-md flex-col rounded-[2rem] border-2 p-8 transition-all duration-300 hover:z-50 hover:-translate-y-2 ${
                isDark
                  ? "border-[#005BBB]/40 bg-gradient-to-b from-[#021124] to-black shadow-[0_0_30px_rgba(0,91,187,0.15)] hover:border-[#005BBB] hover:shadow-[0_0_50px_rgba(0,91,187,0.3)]"
                  : "border-[#005BBB]/30 bg-white hover:border-[#005BBB] hover:shadow-[0_0_30px_rgba(0,91,187,0.15)]"
              }`}
            >
              <div className="mb-6 flex justify-center">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full border-2 transition-transform duration-500 group-hover:scale-110 ${
                    isDark
                      ? "border-[#005BBB] bg-[#005BBB]/10 shadow-[0_0_20px_rgba(0,91,187,0.4)]"
                      : "border-[#005BBB] bg-blue-50"
                  }`}
                >
                  <svg
                    className="h-10 w-10 text-[#005BBB]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path d="M9 8h4a2 2 0 0 1 0 4H9V8z" fill="currentColor" />
                    <path d="M9 12h5a2 2 0 0 1 0 4H9v-4z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <h3 className="mb-6 text-center text-3xl font-black tracking-tight text-[#005BBB] drop-shadow-[0_0_8px_rgba(0,91,187,0.3)]">
                B SAFE ID
              </h3>

              <ul className="mb-8 flex-1 space-y-4 px-2">
                {bsafeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#005BBB] to-[#003d7a] shadow-sm">
                      <Check
                        className="h-3.5 w-3.5 text-white"
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      className={`font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-auto rounded-2xl border p-5 backdrop-blur-sm transition-colors ${
                  isDark
                    ? "border-white/5 bg-[#111] group-hover:bg-[#1a1a1a]"
                    : "border-slate-200 bg-slate-50 group-hover:bg-slate-100"
                }`}
              >
                <p
                  className={`mb-1 text-center text-xs font-bold tracking-widest ${isDark ? "text-slate-500" : "text-slate-500"}`}
                >
                  STARTING FROM
                </p>
                <p className="text-center text-5xl font-black tracking-tighter text-[#005BBB]">
                  ₹1000
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
