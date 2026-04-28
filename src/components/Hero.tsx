
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

interface HeroProps {
  theme: "dark" | "light";
}

export function Hero({ theme }: HeroProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-4 py-20 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#ED1C24]/20 to-transparent blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#005BBB]/20 to-transparent blur-3xl" />
        {isDark && <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <h1 className={`mb-2 text-5xl font-black tracking-tight md:text-7xl ${isDark ? "text-white" : "text-slate-900"}`}>
            PLAY SMART
          </h1>
          <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
            <span className="text-[#ED1C24]">WIN BIG</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className={`mb-8 text-lg ${isDark ? "text-white" : "text-slate-700"}`}>
            Get your gaming ID instantly on{" "}
            <span className="font-bold text-[#25D366]">WhatsApp</span>
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col items-center gap-4">
            <button className="flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white transition-transform hover:scale-105 md:max-w-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <MessageCircle className="h-6 w-6 text-[#25D366]" />
              </div>
              <div className="text-left">
                <div className="text-sm">GET LOTUS ID ON WHATSAPP</div>
                <div className="text-xs font-normal opacity-90">Instant ID in 2 mins</div>
              </div>
            </button>

            <button className="flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-[#005BBB] px-6 py-4 font-bold text-white transition-transform hover:scale-105 md:max-w-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <MessageCircle className="h-6 w-6 text-[#005BBB]" />
              </div>
              <div className="text-left">
                <div className="text-sm">GET BSAFE ID ON WHATSAPP</div>
                <div className="text-xs font-normal opacity-90">Instant ID in 2 mins</div>
              </div>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}