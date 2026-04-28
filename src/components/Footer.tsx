import { ChevronRight, Lock } from "lucide-react";
import { Reveal } from "./Reveal";

interface FooterProps {
  theme: "dark" | "light";
}

export function Footer({ theme }: FooterProps) {
  const isDark = theme === "dark";

  const quickLinks = ["Home", "How It Works", "FAQ", "Contact Us"];

  return (
    <footer className={`px-4 py-12 ${isDark ? "bg-[#0A0A0A]" : "bg-slate-100"}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="mb-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ED1C24]">
                  <span className="text-xl font-bold text-[#ED1C24]">R</span>
                </div>
                <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                  ROYAL X
                </span>
              </div>
              <p className={`text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}>
                Your trusted partner for gaming IDs. Instant service, secure & trusted by thousands of players.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h4 className={`mb-4 text-lg font-bold uppercase ${isDark ? "text-white" : "text-slate-900"}`}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`flex items-center gap-2 text-sm transition-colors hover:text-[#ED1C24] ${
                        isDark ? "text-white/70" : "text-slate-600"
                      }`}
                    >
                      <ChevronRight className="h-4 w-4" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div
          className={`mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <p className={`text-sm ${isDark ? "text-white/50" : "text-slate-500"}`}>
            © 2025 ROYAL X. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <Lock className={`h-4 w-4 ${isDark ? "text-white" : "text-slate-600"}`} />
            <span className={`text-sm ${isDark ? "text-white" : "text-slate-600"}`}>
              100% Secure Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}