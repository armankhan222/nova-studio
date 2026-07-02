import { HTMLAttributes } from "react";

export function Section({ children, className = "", ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-12 md:py-24 lg:py-32 ${className}`} {...props}>
      {children}
    </section>
  );
}
