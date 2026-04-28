import { Users, Shield, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

interface TrustBarProps {
  theme: "dark" | "light";
}

export function TrustBar({ theme }: TrustBarProps) {
  const isDark = theme === "dark";

  return (
    <section className={`px-4 py-8 ${isDark ? "bg-[#0A0A0A]" : "bg-white"}`}>
      <div className="mx-auto max-w-4xl">
        <div
          className={`flex flex-col items-center justify-around gap-6 rounded-2xl px-6 py-6 md:flex-row ${
            isDark ? "bg-black/50" : "bg-slate-50"
          }`}
        >
          <Reveal>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-[#ED1C24]" />
              <div>
                <p className="text-2xl font-black text-[#ED1C24]">10,000+</p>
                <p className={`text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}>
                  PLAYERS TRUST US
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-[#ED1C24]" />
              <div>
                <p className="text-2xl font-black text-[#ED1C24]">100%</p>
                <p className={`text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}>
                  SAFE & SECURE
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-[#ED1C24]" />
              <div>
                <p className="text-2xl font-black text-[#ED1C24]">24/7</p>
                <p className={`text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}>
                  CUSTOMER SUPPORT
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}