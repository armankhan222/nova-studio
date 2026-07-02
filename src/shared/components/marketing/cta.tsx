import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";

export function CTA() {
  return (
    <Section className="bg-primary text-primary-foreground text-center">
      <Container className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Upgrade Your Design Pipeline?</h2>
        <p className="max-w-[600px] text-primary-foreground/80 md:text-lg">
          Join professional product designers and developer teams accelerating their output.
        </p>
        <button className="bg-background text-foreground px-8 py-3 rounded-md font-medium text-lg mt-2">
          Launch Workspace
        </button>
      </Container>
    </Section>
  );
}
