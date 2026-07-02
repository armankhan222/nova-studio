import { Navbar } from "@/shared/components/layout/navbar";
import { Container } from "@/shared/components/ui/container";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <Container>
          <div className="flex min-h-screen flex-col items-center justify-center text-center">
            <div className="mb-6 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              ✨ AI Design Workspace
            </div>

            <h1 className="max-w-5xl text-7xl font-bold tracking-tight text-slate-900">
              Design Better Interfaces with AI
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Upload UI screenshots. Receive UX audits, accessibility reports,
              implementation guidance and AI-powered prompt generation.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
