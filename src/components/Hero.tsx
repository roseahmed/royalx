import {
  MessageCircle,
  // Clock,
  Gift,
  Zap,
  ShieldCheck,
  Lock,
  Star,
  Gem,
  Leaf,
  Send,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface HeroProps {
  theme: "dark" | "light";
}

export function Hero({ theme }: HeroProps) {
  const isDark = theme === "dark";

  // --- PLACEHOLDERS: Update these with your actual details ---
  const WHATSAPP_NUMBER = "919999999999"; // e.g., "919876543210" (Include country code, no '+' sign)
  const TELEGRAM_USERNAME = "@liveroyalx"; // e.g., "RoyalXSupport" (Without the '@' symbol)
  // -----------------------------------------------------------

  return (
    <section
      className={`relative flex h-[100dvh] w-full items-center justify-center overflow-hidden px-2 md:px-4 ${
        isDark ? "bg-black" : "bg-slate-50"
      }`}
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-yellow-500/10 to-transparent blur-[120px]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-500/10 to-transparent blur-[120px]" />
        {isDark && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black/90" />
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center flex flex-col items-center justify-center h-full py-4">
        {/* Typography: Gold Gradients & Tighter Tracking */}
        <Reveal>
          <div className="mb-3 md:mb-4 flex flex-col items-center">
            <h1 className="text-4xl font-black tracking-tighter leading-tight md:text-6xl lg:text-[5.5rem] bg-gradient-to-b from-[#FFF7D6] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.2)]">
              PLAY SMART.
            </h1>
            <h1 className="text-5xl font-black tracking-tighter leading-none md:text-7xl lg:text-[6.5rem] bg-gradient-to-b from-[#FFF7D6] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.2)] mt-[-4px] md:mt-[-8px]">
              WIN BIG.
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 md:px-6 md:py-2 mb-3 md:mb-5 ${
              isDark
                ? "border-yellow-500/30 bg-black/50 text-yellow-400"
                : "border-yellow-500/50 bg-yellow-50 text-yellow-700"
            }`}
          >
            <span className="font-semibold text-sm md:text-lg">
              India's Fastest Gaming IDs ⚡
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className={`flex flex-wrap justify-center gap-2 md:gap-6 mb-4 md:mb-8 text-[11px] md:text-sm font-medium ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <span className="flex items-center gap-1">
              <Zap className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" /> Instant
              Deposit
            </span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 md:h-4 md:w-4 text-white md:text-slate-400" />{" "}
              Lightning Withdrawals
            </span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" /> 100%
              Secure
            </span>
          </div>
        </Reveal>

        {/* Action Cards - Responsive Row/Column Layout */}
        <Reveal delay={0.3}>
          <div className="flex w-full flex-col lg:flex-row gap-3 md:gap-6 mx-auto">
            {/* LOTUS ID CARD (Left/Top) - WhatsApp Theme */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20Blr%20Book%20-%20I%20want%20LOTUS%20ID`}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden rounded-[1.5rem] border-2 p-4 md:p-6 flex flex-1 w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,211,102,0.25)] ${
                isDark ? "bg-[#0a110d]" : "bg-white"
              } border-[#25D366]/30 hover:border-[#25D366]`}
            >
              {/* Top Corner Tags */}
              <div className="absolute top-0 left-0">
                <span className="inline-block px-3 py-1 rounded-br-lg text-[10px] md:text-xs font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md">
                  ★ MOST POPULAR
                </span>
              </div>
              <span
                className={`absolute top-2 right-3 md:top-4 md:right-4 text-[10px] md:text-xs font-bold tracking-wider ${isDark ? "text-white/70" : "text-slate-500"}`}
              >
                INSTANT ⚡
              </span>

              {/* Flex Content */}
              <div className="flex w-full items-center pt-5 md:pt-4">
                {/* Left WhatsApp Icon */}
                <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full flex-shrink-0 bg-gradient-to-r from-[#25D366]/20 to-[#1fa34e]/10 border-2 border-[#25D366]/50 shadow-[0_0_10px_rgba(37,211,102,0.2)]">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-inner">
                    <MessageCircle
                      className="h-6 w-6 md:h-7 md:w-7"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Right Side: Title, Features, and Button */}
                <div className="flex flex-col flex-1 pl-4 md:pl-6 text-left">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-3">
                    <Leaf className="h-5 w-5 md:h-6 md:w-6 text-[#25D366]" />
                    <h2
                      className={`text-xl md:text-2xl font-extrabold tracking-tight transition-colors ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      LOTUS ID
                    </h2>
                  </div>

                  <ul
                    className={`space-y-1 md:space-y-2 mb-3 md:mb-5 text-[11px] md:text-sm font-medium ${isDark ? "text-white/80" : "text-slate-600"}`}
                  >
                    <li className="flex items-center gap-2">
                      <Zap className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
                      <span>Instant in 2 Minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Gift className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
                      <span>3% Losing Bonus Available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-3 w-3 md:h-4 md:w-4 text-[#25D366]" />
                      <span>Safe • Fast • Reliable</span>
                    </li>
                  </ul>

                  <div
                    className={`flex items-center justify-between rounded-full px-3 py-2 md:px-5 md:py-2.5 transition-colors group-hover:scale-[1.02] ${
                      isDark
                        ? "bg-transparent border border-[#25D366] group-hover:bg-[#25D366]/10"
                        : "bg-[#25D366] text-white shadow-md hover:bg-[#1fa34e]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle
                        className={`h-4 w-4 md:h-5 md:w-5 ${isDark ? "text-[#25D366]" : "text-white"}`}
                      />
                      <span
                        className={`text-[11px] md:text-sm font-bold tracking-wide ${isDark ? "text-white" : "text-white"}`}
                      >
                        GET ID ON WHATSAPP
                      </span>
                    </div>
                    <span
                      className={`text-base md:text-lg font-bold transition-transform group-hover:translate-x-1 ${isDark ? "text-white" : "text-white"}`}
                    >
                      &gt;
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* BSAFE ID CARD (Right/Bottom) - Telegram Theme */}
            <a
              href={`https://t.me/${TELEGRAM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden rounded-[1.5rem] border-2 p-4 md:p-6 flex flex-1 w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(36,161,222,0.25)] ${
                isDark ? "bg-[#050a11]" : "bg-white"
              } border-[#24A1DE]/30 hover:border-[#24A1DE]`}
            >
              {/* Top Corner Tags */}
              <span
                className={`absolute top-2 right-3 md:top-4 md:right-4 text-[10px] md:text-xs font-bold tracking-wider ${isDark ? "text-white/70" : "text-slate-500"}`}
              >
                INSTANT ⚡
              </span>

              {/* Flex Content */}
              <div className="flex w-full items-center pt-3 md:pt-4">
                {/* Left Telegram Icon */}
                <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full flex-shrink-0 bg-gradient-to-r from-[#24A1DE]/20 to-[#1a7bb0]/10 border-2 border-[#24A1DE]/50 shadow-[0_0_10px_rgba(36,161,222,0.2)]">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#24A1DE] text-white shadow-inner pl-0.5">
                    <Send
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Right Side: Title, Features, and Button */}
                <div className="flex flex-col flex-1 pl-4 md:pl-6 text-left">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-3">
                    <Gem className="h-5 w-5 md:h-6 md:w-6 text-[#24A1DE]" />
                    <h2
                      className={`text-xl md:text-2xl font-extrabold tracking-tight transition-colors ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      BSAFE ID
                    </h2>
                  </div>

                  <ul
                    className={`space-y-1 md:space-y-2 mb-3 md:mb-5 text-[11px] md:text-sm font-medium ${isDark ? "text-white/80" : "text-slate-600"}`}
                  >
                    <li className="flex items-center gap-2">
                      <Zap className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
                      <span>Instant Setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-3 w-3 md:h-4 md:w-4 text-[#24A1DE]" />
                      <span>High Limits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
                      <span>Fast Withdrawals • 24x7 Support</span>
                    </li>
                  </ul>

                  <div
                    className={`flex items-center justify-between rounded-full px-3 py-2 md:px-5 md:py-2.5 transition-colors group-hover:scale-[1.02] ${
                      isDark
                        ? "bg-transparent border border-[#24A1DE] group-hover:bg-[#24A1DE]/10"
                        : "bg-[#24A1DE] text-white shadow-md hover:bg-[#1d82b3]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Send
                        className={`h-3 w-3 md:h-4 md:w-4 ${isDark ? "text-[#24A1DE]" : "text-white"}`}
                      />
                      <span
                        className={`text-[11px] md:text-sm font-bold tracking-wide ${isDark ? "text-white" : "text-white"}`}
                      >
                        START NOW ON TELEGRAM
                      </span>
                    </div>
                    <span
                      className={`text-base md:text-lg font-bold transition-transform group-hover:translate-x-1 ${isDark ? "text-white" : "text-white"}`}
                    >
                      &gt;
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
