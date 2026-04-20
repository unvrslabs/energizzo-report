import { ArrowRight } from "lucide-react";
import type { StatementScreen as S } from "@/lib/survey-config";
import { SectionLabel } from "../section-label";

export function StatementScreen({ screen, onNext }: { screen: S; onNext: () => void }) {
  return (
    <div className="space-y-6">
      {screen.section && <SectionLabel index={screen.section.index} label={screen.section.label} />}
      <h2 className="font-display text-2xl sm:text-4xl font-bold leading-tight">{screen.title}</h2>
      <p className="text-base sm:text-lg text-muted max-w-xl whitespace-pre-line">
        {screen.description}
      </p>
      <button onClick={onNext} className="btn-primary mt-4">
        {screen.buttonText ?? "Continua"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
