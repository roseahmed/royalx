import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { TrustBar } from "@/components/TrustBar";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

export function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-20">
        <Hero theme={theme} />
        <TrustBar theme={theme} />
        {/* <Pricing theme={theme} /> */}
      </main>
      <Footer theme={theme} />
    </>
  );
}
