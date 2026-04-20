import { ArrowRight } from "lucide-react";
import type { WelcomeScreen as W } from "@/lib/survey-config";

export function WelcomeScreen({ screen, onNext }: { screen: W; onNext: () => void }) {
  return (
    <div className="space-y-8">
      <p className="text-sm font-mono uppercase tracking-widest text-primary/80">
        Energizzo · Report 2026
      </p>
      <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight bg-gradient-to-br from-white to-primary/80 bg-clip-text text-transparent">
        {screen.title}
      </h1>
      <div className="space-y-4 text-base sm:text-lg text-muted max-w-xl">
        {screen.description.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button onClick={onNext} className="btn-primary text-base px-6 py-3.5">
          {screen.buttonText}
          <ArrowRight className="h-4 w-4" />
        </button>
        <span className="text-xs text-muted">
          premi <kbd className="rounded border border-border bg-card/60 px-1.5 py-0.5 font-mono text-[10px]">Invio</kbd> ↵
        </span>
      </div>
    </div>
  );
}
