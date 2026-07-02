import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 font-semibold text-xl"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-white">
        N
      </div>

      <span>Nova Studio</span>
    </Link>
  );
}
