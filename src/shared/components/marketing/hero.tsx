import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Badge } from "@/shared/components/ui/badge";

export function Hero() {
  return (
    <Section className="bg-gradient-to-b from-background to-muted">
      <Container className="text-center flex flex-col items-center gap-4">
        <Badge>Next-Gen AI Workspace</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl max-w-3xl">
          Design World-Class Interfaces Using AI
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Automate UX audits, generate clean design system assets, and optimize workflows with Nova Studio.
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium text-lg">
          Get Started for Free
        </button>
      </Container>
    </Section>
  );
}
