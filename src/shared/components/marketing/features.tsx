import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";

const featuresList = [
  { title: "Screenshot Review", desc: "Upload layouts for immediate structural and design critiques." },
  { title: "UX & Accessibility Audits", desc: "Instantly check contrast, spacing, and modern compliance targets." },
  { title: "Design Memory", desc: "Keep AI tailored to your product brand books and design language guidelines." }
];

export function Features() {
  return (
    <Section id="features">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Core Capabilities</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((f, i) => (
            <div key={i} className="flex flex-col p-6 border rounded-xl bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
