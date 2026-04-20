import { useEffect, useState } from "react";
import { Loader2, AlertTriangle } from "lucide-react";
import {
  fetchLeadForSurvey,
  fetchSurveyProgress,
  type LeadForSurvey,
} from "@/lib/supabase";
import type { Answers } from "@/lib/survey-config";
import { SurveyRunner } from "./survey-runner";

export function SurveyPage({ token }: { token: string }) {
  const [state, setState] = useState<
    | { phase: "loading" }
    | { phase: "invalid" }
    | {
        phase: "ready";
        lead: LeadForSurvey;
        answers: Answers;
        step: number;
        completed: boolean;
      }
  >({ phase: "loading" });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [lead, progress] = await Promise.all([
        fetchLeadForSurvey(token),
        fetchSurveyProgress(token),
      ]);
      if (cancelled) return;
      if (!lead) {
        setState({ phase: "invalid" });
        return;
      }
      setState({
        phase: "ready",
        lead,
        answers: (progress?.answers as Answers) ?? {},
        step: progress?.current_step ?? 0,
        completed: progress?.completed ?? lead.survey_completed ?? false,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);

  if (state.phase === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <Loader2 className="h-7 w-7 animate-spin text-primary" />
      </div>
    );
  }

  if (state.phase === "invalid") {
    return (
      <div className="fixed inset-0 flex items-center justify-center px-6">
        <div className="max-w-md text-center space-y-5 animate-fade-in-up">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-500/15 border border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <AlertTriangle className="h-7 w-7 text-red-400" />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight">Link non valido</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questo link non risulta più attivo. Se pensi sia un errore, scrivi a{" "}
            <a href="mailto:emanuele@unvrslabs.dev" className="text-primary hover:underline font-medium">
              emanuele@unvrslabs.dev
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <SurveyRunner
      token={token}
      initialAnswers={state.answers}
      initialStep={state.step}
      alreadyCompleted={state.completed}
    />
  );
}
