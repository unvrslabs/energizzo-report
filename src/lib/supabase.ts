import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!url || !anon) {
  console.error("Missing Supabase env vars");
}

export const supabase = createClient(url, anon, {
  auth: { persistSession: false, autoRefreshToken: false },
});

export type LeadForSurvey = {
  id: string;
  ragione_sociale: string;
  piva: string;
  tipo_servizio: string;
  provincia: string | null;
  survey_completed: boolean;
};

export async function fetchLeadForSurvey(token: string): Promise<LeadForSurvey | null> {
  const { data, error } = await supabase.rpc("get_lead_for_survey", { p_token: token });
  if (error) {
    console.error("get_lead_for_survey error", error);
    return null;
  }
  const row = Array.isArray(data) ? data[0] : data;
  return row ?? null;
}

export async function fetchSurveyProgress(token: string) {
  const { data, error } = await supabase
    .from("survey_responses")
    .select("answers, current_step, completed")
    .eq("token", token)
    .maybeSingle();
  if (error) return null;
  return data as {
    answers: Record<string, string | string[] | null>;
    current_step: number;
    completed: boolean;
  } | null;
}

export async function saveSurveyProgress(
  token: string,
  step: number,
  answers: Record<string, string | string[] | null>,
) {
  return supabase.rpc("save_survey_progress", {
    p_token: token,
    p_step: step,
    p_answers: answers,
  });
}

export async function completeSurveyResponse(
  token: string,
  answers: Record<string, string | string[] | null>,
) {
  return supabase.rpc("complete_survey", { p_token: token, p_answers: answers });
}
