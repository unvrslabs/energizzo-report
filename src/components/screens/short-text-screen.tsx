import { useEffect, useRef } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";
import type { ShortTextScreen as S } from "@/lib/survey-config";
import { SectionLabel } from "../section-label";

export function ShortTextScreen({
  screen,
  value,
  onChange,
  onNext,
  error,
}: {
  screen: S;
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  error: string | null;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [screen.id]);

  return (
    <div className="space-y-6">
      {screen.section && <SectionLabel index={screen.section.index} label={screen.section.label} />}
      <h2 className="font-display text-2xl sm:text-4xl font-bold leading-tight">
        {screen.title}
        {screen.required && <span className="text-primary">*</span>}
      </h2>
      {screen.description && <p className="text-muted">{screen.description}</p>}
      <input
        ref={inputRef}
        type="text"
        className="underline-input"
        placeholder={screen.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onNext();
          }
        }}
      />
      {error && (
        <p className="text-sm text-red-400 flex items-center gap-1.5">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button onClick={onNext} className="btn-primary">
          OK
          <ArrowRight className="h-4 w-4" />
        </button>
        <span className="text-xs text-muted">
          premi <kbd className="rounded border border-border bg-card/60 px-1.5 py-0.5 font-mono text-[10px]">Invio</kbd> ↵
        </span>
      </div>
    </div>
  );
}
