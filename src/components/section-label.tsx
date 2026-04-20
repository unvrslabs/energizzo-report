export function SectionLabel({ index, label }: { index: number; label: string }) {
  return (
    <p className="mb-4 text-xs font-mono tracking-widest uppercase text-primary/80">
      <span className="inline-block rounded bg-primary/10 border border-primary/30 px-2 py-0.5">
        Sezione {index}/7
      </span>
      <span className="ml-2 text-muted">{label}</span>
    </p>
  );
}
