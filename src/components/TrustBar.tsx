// import { Users, Shield, Zap } from "lucide-react";
// import { Reveal } from "./Reveal";

// interface TrustBarProps {
//   theme: "dark" | "light";
// }

// export function TrustBar({ theme }: TrustBarProps) {
//   const isDark = theme === "dark";

//   return (
//     <section className={`px-4 py-8 ${isDark ? "bg-[#0A0A0A]" : "bg-white"}`}>
//       <div className="mx-auto max-w-4xl">
//         <div
//           className={`flex flex-col items-center justify-around gap-6 rounded-2xl px-6 py-6 md:flex-row ${
//             isDark ? "bg-black/50" : "bg-slate-50"
//           }`}
//         >
//           <Reveal>
//             <div className="flex items-center gap-3">
//               <Users className="h-8 w-8 text-[#ED1C24]" />
//               <div>
//                 <p className="text-2xl font-black text-[#ED1C24]">10,000+</p>
//                 <p
//                   className={`text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}
//                 >
//                   PLAYERS TRUST US
//                 </p>
//               </div>
//             </div>
//           </Reveal>

//           <Reveal delay={0.1}>
//             <div className="flex items-center gap-3">
//               <Shield className="h-8 w-8 text-[#ED1C24]" />
//               <div>
//                 <p className="text-2xl font-black text-[#ED1C24]">100%</p>
//                 <p
//                   className={`text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}
//                 >
//                   SAFE & SECURE
//                 </p>
//               </div>
//             </div>
//           </Reveal>

//           <Reveal delay={0.2}>
//             <div className="flex items-center gap-3">
//               <Zap className="h-8 w-8 text-[#ED1C24]" />
//               <div>
//                 <p className="text-2xl font-black text-[#ED1C24]">24/7</p>
//                 <p
//                   className={`text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}
//                 >
//                   CUSTOMER SUPPORT
//                 </p>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  Users,
  Headphones,
  ShieldCheck,
  IndianRupee,
  Flame,
  Lock,
  BadgeCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface TrustBarProps {
  theme: "dark" | "light";
}

export function TrustBar({ theme }: TrustBarProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={`px-2 py-6 md:px-4 md:py-8 w-full ${isDark ? "bg-black" : "bg-slate-50"}`}
    >
      <div className="mx-auto max-w-4xl flex flex-col gap-4">
        {/* ROW 1: Key Stats (4 columns with dividers) */}
        <Reveal>
          <div
            className={`flex w-full items-center justify-between rounded-xl border px-2 py-3 md:px-4 md:py-4 ${
              isDark
                ? "border-white/10 bg-[#0a0f16]"
                : "border-slate-200 bg-white shadow-sm"
            } divide-x ${isDark ? "divide-white/10" : "divide-slate-200"}`}
          >
            {/* Stat 1 */}
            <div className="flex flex-1 items-center justify-center gap-1.5 md:gap-3 px-1 md:px-2">
              <Users className="h-4 w-4 md:h-6 md:w-6 text-yellow-500 flex-shrink-0" />
              <div className="flex flex-col text-left">
                <p
                  className={`text-[10px] md:text-sm font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  10,000+
                </p>
                <p
                  className={`text-[8px] md:text-xs leading-tight ${isDark ? "text-white/60" : "text-slate-500"}`}
                >
                  Active Players
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-1 items-center justify-center gap-1.5 md:gap-3 px-1 md:px-2">
              <Headphones className="h-4 w-4 md:h-6 md:w-6 text-yellow-500 flex-shrink-0" />
              <div className="flex flex-col text-left">
                <p
                  className={`text-[10px] md:text-sm font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  24x7
                </p>
                <p
                  className={`text-[8px] md:text-xs leading-tight ${isDark ? "text-white/60" : "text-slate-500"}`}
                >
                  Support Available
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-1 items-center justify-center gap-1.5 md:gap-3 px-1 md:px-2">
              <ShieldCheck className="h-4 w-4 md:h-6 md:w-6 text-yellow-500 flex-shrink-0" />
              <div className="flex flex-col text-left">
                <p
                  className={`text-[10px] md:text-sm font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  100%
                </p>
                <p
                  className={`text-[8px] md:text-xs leading-tight ${isDark ? "text-white/60" : "text-slate-500"}`}
                >
                  Secure Transactions
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-1 items-center justify-center gap-1.5 md:gap-3 px-1 md:px-2">
              <IndianRupee className="h-4 w-4 md:h-6 md:w-6 text-yellow-500 flex-shrink-0" />
              <div className="flex flex-col text-left">
                <p
                  className={`text-[10px] md:text-sm font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Instant
                </p>
                <p
                  className={`text-[8px] md:text-xs leading-tight ${isDark ? "text-white/60" : "text-slate-500"}`}
                >
                  Deposits & Withdrawals
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ROW 2: Live Activity Feed */}
        <Reveal delay={0.1}>
          <div
            className={`flex w-full items-center justify-between rounded-full border px-4 py-2.5 md:px-6 md:py-3 relative overflow-hidden ${
              isDark
                ? "border-white/10 bg-[#0a0f16]"
                : "border-slate-200 bg-white shadow-sm"
            }`}
          >
            {/* Subtle red glow background effect on the left */}
            {isDark && (
              <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-red-500/10 to-transparent pointer-events-none" />
            )}

            <div className="flex items-center gap-2 md:gap-3 relative z-10">
              <Flame className="h-4 w-4 md:h-5 md:w-5 text-[#ED1C24] fill-[#ED1C24]" />
              <p
                className={`text-[11px] md:text-sm font-medium ${isDark ? "text-white/80" : "text-slate-700"}`}
              >
                <span className="text-[#ED1C24] font-bold">127</span> Users
                Joined in Last 10 Minutes
              </p>
            </div>

            {/* Mock Avatars */}
            <div className="flex items-center -space-x-1.5 md:-space-x-2 relative z-10">
              <div
                className={`h-5 w-5 md:h-7 md:w-7 rounded-full border-2 bg-gradient-to-br from-slate-400 to-slate-600 ${isDark ? "border-black" : "border-white"}`}
              ></div>
              <div
                className={`h-5 w-5 md:h-7 md:w-7 rounded-full border-2 bg-gradient-to-br from-blue-400 to-blue-600 ${isDark ? "border-black" : "border-white"}`}
              ></div>
              <div
                className={`h-5 w-5 md:h-7 md:w-7 rounded-full border-2 bg-gradient-to-br from-yellow-400 to-orange-500 relative ${isDark ? "border-black" : "border-white"}`}
              >
                <span
                  className={`absolute bottom-0 right-0 block h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500 ring-1 ${isDark ? "ring-black" : "ring-white"}`}
                ></span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ROW 3: Main Trust Badge */}
        <Reveal delay={0.2}>
          <div
            className={`flex w-full items-center justify-between rounded-xl border px-4 py-4 md:px-8 md:py-5 ${
              isDark
                ? "border-yellow-500/20 bg-gradient-to-r from-[#0a0a0a] via-[#141005] to-[#0a0a0a]"
                : "border-yellow-500/30 bg-gradient-to-r from-white via-yellow-50 to-white shadow-md"
            }`}
          >
            {/* Left Icon */}
            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg border border-yellow-500/40 bg-yellow-500/10 flex-shrink-0">
              <Lock className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
            </div>

            {/* Center Text */}
            <div className="flex flex-col text-center px-2">
              <p className="text-[13px] md:text-lg font-black tracking-wider text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.2)]">
                TRUSTED BY THOUSANDS
              </p>
              <p
                className={`text-[10px] md:text-xs font-medium tracking-wide mt-0.5 ${isDark ? "text-white/70" : "text-slate-600"}`}
              >
                100% SAFE & SECURE GAMING IDs
              </p>
            </div>

            {/* Right Icon */}
            <div className="flex items-center justify-center flex-shrink-0">
              <BadgeCheck className="h-8 w-8 md:h-10 md:w-10 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.4)]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
