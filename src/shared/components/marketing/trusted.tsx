import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";

export function Trusted() {
  const logos = ["Figma", "Stripe", "Vercel", "Supabase", "Linear"];
  return (
    <section className="border-y bg-muted/40 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          Trusted by designers and developers at forward-thinking companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-x-16 opacity-60 grayscale">
          {logos.map((logo) => (
            <span key={logo} className="text-sm font-bold tracking-wider">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
