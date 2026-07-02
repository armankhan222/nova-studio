import { HTMLAttributes } from "react";

export function Container({ children, className = "" }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`container mx-auto px-4 md:px-6 max-w-7xl ${className}`}>
      {children}
    </div>
  );
}
