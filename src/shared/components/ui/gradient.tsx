export function GradientBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-300/30 blur-3xl" />
    </div>
  );
}