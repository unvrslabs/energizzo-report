import { ArrowRight, BarChart3, Lock, Sparkles } from "lucide-react";

export function Landing() {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="min-h-full px-6 py-16 sm:py-24 flex items-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-mono uppercase tracking-widest text-primary/80">
            Energizzo · Report 2026
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold leading-tight bg-gradient-to-br from-white to-primary/80 bg-clip-text text-transparent">
            Stato del Reseller Energia in Italia
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl">
            Il primo report indipendente sui benchmark operativi del reseller energia italiano.
            In uscita entro il 2026.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
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
              title="12–15 minuti"
              body="Rispondi a 24 domande. Il benchmark arriva entro 60 giorni."
            />
          </div>

          <div className="mt-12 glass rounded-lg p-6">
            <p className="text-sm text-muted">
              Se hai ricevuto un link personalizzato dal team Energizzo, aprilo per iniziare.
            </p>
            <p className="mt-3 text-xs text-muted/70">
              Per richiedere un invito scrivi a{" "}
              <a href="mailto:report@energizzo.it" className="text-primary hover:underline">
                report@energizzo.it
              </a>
              .
            </p>
          </div>

          <a
            href="https://energizzo.it"
            className="mt-10 inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
          >
            Scopri Energizzo
            <ArrowRight className="h-3.5 w-3.5" />
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
    <div className="glass rounded-lg p-5">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="mt-3 font-display text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted">{body}</p>
    </div>
  );
}
