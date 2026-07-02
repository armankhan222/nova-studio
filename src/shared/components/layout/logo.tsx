import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
      <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-xs font-black">
        N
      </div>
      <span>Nova<span className="text-primary">Studio</span></span>
    </Link>
  );
}
