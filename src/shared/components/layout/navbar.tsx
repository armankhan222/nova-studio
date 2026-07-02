import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl">Nova Studio</Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="#features">Features</Link>
          <Link href="/dashboard" className="bg-primary text-primary-foreground px-4 py-2 rounded-md">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
