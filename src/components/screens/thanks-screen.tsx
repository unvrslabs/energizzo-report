import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ThanksScreen as T } from "@/lib/survey-config";

export function ThanksScreen({ screen }: { screen: T }) {
  return (
    <div className="space-y-8">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 border border-primary/40 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
        <CheckCircle2 className="h-8 w-8 text-primary" />
      </div>
      <h1 className="font-display text-4xl sm:text-6xl font-bold leading-tight bg-gradient-to-br from-white to-primary/80 bg-clip-text text-transparent">
        {screen.title}
      </h1>
      <div className="space-y-4 text-base sm:text-lg text-muted max-w-xl">
        {screen.description.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <a href={screen.buttonHref} className="btn-primary text-base px-6 py-3.5">
        {screen.buttonText}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
