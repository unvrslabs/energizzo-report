export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-bg/60 z-50">
      <div
        className="h-full bg-primary transition-[width] duration-500 ease-out shadow-[0_0_12px_rgba(16,185,129,0.6)]"
        style={{ width: `${Math.min(100, Math.max(0, value * 100))}%` }}
      />
    </div>
  );
}
