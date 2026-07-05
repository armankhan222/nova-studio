import { cn } from "@/shared/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
