import { Menu, Headphones } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <button className={`p-2 ${isDark ? "text-white" : "text-slate-900"}`}>
          <Menu className="h-6 w-6" />
        </button>

        <div className="text-center">
          <div className="text-2xl font-bold">
            <span className="text-[#ED1C24]">ROYAL</span>
            <span className={isDark ? "text-white" : "text-slate-900"}>X</span>
          </div>
          <div className={`flex items-center justify-center gap-1 text-[10px] uppercase tracking-wider ${isDark ? "text-white" : "text-slate-600"}`}>
            <span>★</span>
            <span>PLAY SMART WIN BIG</span>
            <span>★</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <div className="flex flex-col items-center">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#ED1C24]">
              <Headphones className="h-4 w-4 text-[#ED1C24]" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ED1C24] text-[10px] font-bold text-white">
                24/7
              </span>
            </div>
            <span className={`text-[10px] font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>SUPPORT</span>
          </div>
        </div>
      </div>
    </nav>
  );
}