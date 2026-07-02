
import { Button } from "@/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Container } from "@/shared/components/ui/container";
import { GradientBackground } from "@/shared/components/ui/gradient";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <GradientBackground />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 rounded-full bg-violet-100 px-4 py-2 text-violet-700 hover:bg-violet-100">
            ✨ AI Design Workspace
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            Design Better
            <br />
            Interfaces with AI
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Upload UI screenshots and receive professional UX reviews,
            accessibility audits, AI-powered prompts, and implementation
            guidance in seconds.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Start Free
            </Button>

            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}