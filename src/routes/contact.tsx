import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — Candela Gómez" },
      { name: "description", content: "Escribime para colaborar, contratar o simplemente saludar." },
      { property: "og:title", content: "Contacto — Candela Gómez" },
      { property: "og:description", content: "Hablemos de tu próximo proyecto." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <Reveal>
        <p className="font-hand text-2xl text-ink/70">capítulo final</p>
        <h1 className="mt-1 font-display text-5xl sm:text-6xl">Contacto</h1>
        <p className="mt-4 text-ink/70">
          Te leo en cualquiera de estos lugares. Las cartas también son bienvenidas.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="mailto:gcandela894@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-sakura px-4 py-2 text-sm font-medium text-ink shadow-sm transition-transform hover:-translate-y-0.5">
            <Mail className="h-4 w-4" /> gcandela894@gmail.com
          </a>
          <a href="https://github.com/cande342" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-2 text-sm font-medium text-ink shadow-sm transition-transform hover:-translate-y-0.5">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/candela-echaz%C3%BA-111805236/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full bg-sage px-4 py-2 text-sm font-medium text-ink shadow-sm transition-transform hover:-translate-y-0.5">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="watercolor mt-12 space-y-5 rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Tu nombre" id="name">
              <input
                id="name"
                required
                className="w-full rounded-xl border border-border bg-cream/70 px-4 py-2.5 text-sm outline-none transition focus:border-sakura focus:ring-2 focus:ring-sakura/40"
                placeholder="Totoro"
              />
            </Field>
            <Field label="Tu email" id="email">
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-xl border border-border bg-cream/70 px-4 py-2.5 text-sm outline-none transition focus:border-sakura focus:ring-2 focus:ring-sakura/40"
                placeholder="hola@bosque.com"
              />
            </Field>
          </div>
          <Field label="Tu mensaje" id="msg">
            <textarea
              id="msg"
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-border bg-cream/70 px-4 py-2.5 text-sm outline-none transition focus:border-sakura focus:ring-2 focus:ring-sakura/40"
              placeholder="Contame en qué andás…"
            />
          </Field>
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-ink/60">
              {sent ? "¡Gracias! Te respondo prontito ✿" : "Tu mensaje vuela directo a mi bandeja."}
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream shadow transition-transform hover:-translate-y-0.5"
            >
              Enviar <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </Reveal>
    </div>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/70">{label}</span>
      {children}
    </label>
  );
}