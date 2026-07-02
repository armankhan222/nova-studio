import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "@/shared/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <Logo />
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#enterprise" className="hover:text-primary transition-colors">Enterprise</Link>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
