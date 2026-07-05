import { Navbar } from "@/shared/components/layout/navbar";
import { Hero } from "@/shared/components/marketing/hero";
import { TrustedBy } from "@/shared/components/marketing/trusted-by";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
    </>
  );
}