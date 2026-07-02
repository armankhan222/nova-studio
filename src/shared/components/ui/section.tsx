import { cn } from "@/shared/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn("py-24", className)}>
      {children}
    </section>
  );
}
