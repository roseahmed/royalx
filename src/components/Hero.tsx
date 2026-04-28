import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

interface HeroProps {
  theme: "dark" | "light";
}

export function Hero({ theme }: HeroProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-4 py-20 ${
        isDark ? "bg-black" : "bg-slate-50"
      }`}
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#ED1C24]/15 to-transparent blur-[120px]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#005BBB]/15 to-transparent blur-[120px]" />
        {isDark && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black/90" />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
        {/* Typography: Tighter tracking and explicit leading for a cohesive block */}
        <Reveal>
          <div className="mb-6 flex flex-col items-center">
            <h1
              className={`text-6xl font-black tracking-tighter leading-none md:text-8xl lg:text-[7rem] ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              PLAY SMART
            </h1>
            <h1 className="text-6xl font-black tracking-tighter leading-none md:text-8xl lg:text-[7rem] text-[#ED1C24] drop-shadow-[0_0_15px_rgba(237,28,36,0.2)]">
              WIN BIG
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className={`mb-10 text-xl md:text-2xl font-medium tracking-wide ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Get your gaming ID instantly on{" "}
            <span className="font-bold text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.4)]">
              WhatsApp
            </span>
          </p>
        </Reveal>

        {/* Buttons: Constrained width, premium elevation hovers, and gradient aesthetics */}
        <Reveal delay={0.3}>
          <div className="flex w-full max-w-md flex-col items-center gap-5 mx-auto">
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20Blr%20Book%20-%20I%20want%20LOTUS%20ID"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#1fa34e] to-[#25D366] p-[2px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black"
            >
              <div className="flex w-full items-center gap-4 rounded-xl bg-black/10 px-5 py-4 backdrop-blur-sm transition-colors group-hover:bg-transparent">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-inner">
                  <MessageCircle className="h-7 w-7 text-[#25D366]" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-base font-extrabold text-white tracking-wide">
                    GET LOTUS ID ON WHATSAPP
                  </div>
                  <div className="text-sm font-medium text-white/90">
                    Instant ID in 2 mins
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/919999999999?text=Hi%2C%20Blr%20Book%20-%20I%20want%20B%20SAFE%20ID"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#004A99] to-[#005BBB] p-[2px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,91,187,0.5)] focus:outline-none focus:ring-2 focus:ring-[#005BBB] focus:ring-offset-2 focus:ring-offset-black"
            >
              <div className="flex w-full items-center gap-4 rounded-xl bg-black/10 px-5 py-4 backdrop-blur-sm transition-colors group-hover:bg-transparent">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-inner">
                  <MessageCircle className="h-7 w-7 text-[#005BBB]" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-base font-extrabold text-white tracking-wide">
                    GET BSAFE ID ON WHATSAPP
                  </div>
                  <div className="text-sm font-medium text-white/90">
                    Instant ID in 2 mins
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
