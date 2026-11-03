import { LandingNavbar } from "@/components/landing/navbar";
import { LandingHero } from "@/components/landing/hero";
import { LandingFooter } from "@/components/landing/footer";

export const metadata = {
  title: "ZapLink — Simple Fast URL Shortener & Analytics",
  description:
    "Simple, fast URL shortener with real-time click tracking, custom aliases, and instant QR codes.",
};

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground justify-between">
      <LandingNavbar />
      <main className="flex-1 flex flex-col justify-center">
        <LandingHero />
      </main>
      <LandingFooter />
    </div>
  );
}
