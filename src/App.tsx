import { useMemo } from "react";
import { Landing } from "./components/landing";
import { SurveyPage } from "./components/survey-page";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default function App() {
  const token = useMemo(() => {
    if (typeof window === "undefined") return null;
    const m = window.location.pathname.match(/^\/s\/([^/]+)/);
    if (!m) return null;
    const candidate = decodeURIComponent(m[1]).trim().toLowerCase();
    return UUID_RE.test(candidate) ? candidate : null;
  }, []);

  if (token) return <SurveyPage token={token} />;
  return <Landing />;
}
