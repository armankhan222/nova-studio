import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { Hero } from "@/shared/components/marketing/hero";
import { Trusted } from "@/shared/components/marketing/trusted";
import { Features } from "@/shared/components/marketing/features";
import { CTA } from "@/shared/components/marketing/cta";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trusted />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
