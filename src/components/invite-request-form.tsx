import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export function InviteRequestForm() {
  const [form, setForm] = useState({
    ragione: "",
    piva: "",
    whatsapp: "",
    referente: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.ragione.trim() || !form.piva.trim() || !form.whatsapp.trim()) {
      setError("Compila tutti i campi obbligatori");
      return;
    }
    setSubmitting(true);
    try {
      const { data, error: rpcErr } = await supabase.rpc("request_report_invite", {
        p_ragione: form.ragione.trim(),
        p_piva: form.piva.trim(),
        p_whatsapp: form.whatsapp.trim(),
        p_referente: form.referente.trim() || null,
      });
      if (rpcErr) {
        setError(rpcErr.message);
        return;
      }
      const payload = data as { ok: boolean; error?: string } | null;
      if (!payload?.ok) {
        setError(payload?.error ?? "Errore");
        return;
      }
      setDone(true);
    } catch {
      setError("Errore di rete");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-6 max-w-2xl">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-300">Richiesta ricevuta</p>
            <p className="text-sm text-emerald-200/80 mt-1">
              Ti contatteremo su WhatsApp entro 48 ore con il link personalizzato per
              partecipare al report.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="liquid-glass-card p-7 max-w-2xl space-y-4">
      <div className="space-y-1">
        <p className="text-base text-foreground font-medium">
          Richiedi un invito per partecipare al report
        </p>
        <p className="text-xs text-muted-foreground">
          Se hai ricevuto un link personalizzato, aprilo direttamente. Altrimenti
          compila questo form e ti contatteremo su WhatsApp.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <label className="block text-sm space-y-1">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            Ragione sociale *
          </span>
          <input
            required
            value={form.ragione}
            onChange={(e) => setForm((f) => ({ ...f, ragione: e.target.value }))}
            placeholder="Es. Energia Srl"
            className="w-full bg-white/5 rounded-lg px-3 py-2.5 border border-white/10 outline-none focus:border-primary/50 transition-colors"
          />
        </label>
        <label className="block text-sm space-y-1">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            Partita IVA *
          </span>
          <input
            required
            value={form.piva}
            onChange={(e) => setForm((f) => ({ ...f, piva: e.target.value }))}
            placeholder="IT12345678901"
            className="w-full bg-white/5 rounded-lg px-3 py-2.5 border border-white/10 outline-none focus:border-primary/50 transition-colors"
          />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <label className="block text-sm space-y-1">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            WhatsApp *
          </span>
          <input
            required
            type="tel"
            value={form.whatsapp}
            onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
            placeholder="+39 ..."
            className="w-full bg-white/5 rounded-lg px-3 py-2.5 border border-white/10 outline-none focus:border-primary/50 transition-colors"
          />
        </label>
        <label className="block text-sm space-y-1">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            Referente (facoltativo)
          </span>
          <input
            value={form.referente}
            onChange={(e) => setForm((f) => ({ ...f, referente: e.target.value }))}
            placeholder="Nome e cognome"
            className="w-full bg-white/5 rounded-lg px-3 py-2.5 border border-white/10 outline-none focus:border-primary/50 transition-colors"
          />
        </label>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-6 h-11 text-sm disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Invio…
          </>
        ) : (
          "Richiedi invito"
        )}
      </button>
    </form>
  );
}
