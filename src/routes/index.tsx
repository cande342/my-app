import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { SkyBackdrop } from "@/components/SkyBackdrop";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Candela Echazú — Frontend Developer" },
      { name: "description", content: "Portfolio de Candela Echazú. Frontend Developer con estética cálida e inspiración en el anime slice of life." },
      { property: "og:title", content: "Candela Echazú — Frontend Developer" },
      { property: "og:description", content: "Frontend, diseño y experiencias interactivas con un toque de magia anime." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <SkyBackdrop />
        <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-5 pb-32 pt-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/70 px-4 py-1.5 text-xs font-medium text-ink/80 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Bienvenida al estudio
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-7xl md:text-8xl">
              Candela <span className="italic text-sakura">Echazú</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-balance text-base text-ink/75 sm:text-lg">
              Fullstack Developer con foco en frontend y experiencia de usuario. 
              Diseño y desarrollo interfaces modernas, optimizo sitios web y creo experiencias digitales intuitivas. 
              También cuento con conocimientos en backend y bases de datos que me permiten participar en 
              el desarrollo completo de una aplicación.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream shadow-lg shadow-ink/20 transition-transform hover:-translate-y-0.5"
              >
                Ver mi trabajo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream/70 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-cream"
              >
                Sobre mí
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "Diseño", body: "Sistemas visuales suaves, jerarquía clara, tipografía con personalidad.", color: "var(--sakura)" },
            { title: "Frontend", body: "Angular, React, TypeScript, animaciones con propósito y accesibilidad de fábrica.", color: "var(--lilac)" },
            { title: "Detalle", body: "Microinteracciones, transiciones al scroll y atención a cada pixel.", color: "var(--moss)" },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="watercolor h-full rounded-3xl p-6">
                <div
                  className="mb-4 inline-block h-2 w-10 rounded-full"
                  style={{ background: c.color }}
                />
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INVITATION */}
      <section className="mx-auto max-w-4xl px-5 pb-24 text-center">
        <Reveal>
          <p className="font-hand text-3xl text-ink/80">— pasá, tengo un poco de contenido —</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Conocé mi historia</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Cada sección de este sitio te muestra mi trabajo desde una perspectiva diferente.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/experience" className="brush-link rounded-full bg-blush px-5 py-2 text-sm font-medium">Experiencia</Link>
            <Link to="/education" className="brush-link rounded-full bg-butter px-5 py-2 text-sm font-medium">Formación</Link>
            <Link to="/contact" className="brush-link rounded-full bg-sage px-5 py-2 text-sm font-medium">Contacto</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}