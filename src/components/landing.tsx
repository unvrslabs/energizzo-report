import { ArrowRight, BarChart3, Lock, Sparkles } from "lucide-react";
import { InviteRequestForm } from "./invite-request-form";

export function Landing() {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="min-h-full px-6 py-16 sm:py-24 flex items-center">
        <div className="mx-auto max-w-4xl w-full animate-fade-in-up">
          <div className="section-pill">
            <Sparkles className="h-3 w-3" />
            Energizzo · Report 2026
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="gradient-text">Stato del Reseller</span>
            <br />
            <span className="text-foreground">Energia in Italia</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Il primo report indipendente sui benchmark operativi del reseller energia italiano.
            In uscita entro il 2026.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            <Feature
              icon={BarChart3}
              title="Benchmark privato"
              body="Confronta la tua azienda in anonimato con i peer della tua fascia dimensionale."
            />
            <Feature
              icon={Lock}
              title="Dati aggregati"
              body="Nessun dato individuale sarà mai pubblicato o associato al nome della tua azienda."
            />
            <Feature
              icon={Sparkles}
              title="3–5 minuti"
              body="Rispondi a 24 domande. Il benchmark arriva entro 60 giorni."
            />
          </div>

          <div className="mt-12">
            <InviteRequestForm />
          </div>

          <a
            href="https://energizzo.it"
            className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Scopri Energizzo
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="liquid-glass-hover rounded-[1.5rem] p-5">
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
        style={{
          background: "linear-gradient(135deg, hsl(158 64% 42% / 0.25), hsl(160 70% 36% / 0.15))",
          border: "1px solid hsl(158 64% 42% / 0.3)",
        }}
      >
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
