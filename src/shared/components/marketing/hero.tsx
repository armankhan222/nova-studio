import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";

export function Hero() {
  return (
    <Section className="bg-gradient-to-b from-background to-muted/30 pt-20 pb-16 md:pt-32 md:pb-24">
      <Container className="text-center flex flex-col items-center gap-6">
        <Badge>Next-Gen AI Workspace</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl max-w-3xl leading-none">
          Design World-Class Interfaces Using AI
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Automate UX audits, generate clean design system assets, and optimize workflows with Nova Studio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button variant="default" className="px-8 h-11 text-base">Get Started for Free</Button>
          <Button variant="outline" className="px-8 h-11 text-base">Book a Demo</Button>
        </div>
      </Container>
    </Section>
  );
}
