import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Formación — Candela Gómez" },
      { name: "description", content: "Mi formación académica y cursos relevantes." },
      { property: "og:title", content: "Formación — Candela Gómez" },
      { property: "og:description", content: "Estudios y aprendizajes que dieron forma a mi carrera." },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

const items = [
  {
    title: "Técnica en Desarrollo de Aplicaciones Web",
    place: "Universidad Nacional del Centro de Buenos Aires (UNICEN)",
    year: "2023 — en curso",
    note: "A dos materias de recibirme, fundamentos sólidos de programacion orienatda a objetos, algoritmos y arquitectura de software.",
    bg: "var(--blush)",
  },
  {
    title: "Experto en Arquitectura y Desarrollo de Inteligencia Artificial",
    place: "Instituto Provincial de Administración Pública de Mendoza",
    year: "2026",
    note: "Como desarrollar chatbots, asistentes vrituales y agentes autónomos con herramientas como Gemini, LangSmith y Loveable.",
    bg: "var(--lilac)",
  },
  {
    title: "Diseñadora UI/UX",
    place: "Coderhouse",
    year: "2024",
    note: "Principios del diseño, inclusividad, herramientas y prototipado con Figma. Research de usuarios, tests de usabilidad y diseño centrado en la experiencia.",
    bg: "var(--butter)",
  },
  {
    title: "Progrmador FullStack: Node.js",
    place: "Ministerio de Desarrollo Productivo de la Nación",
    year: "2024",
    note: "Creación de aplicaciones full-stack con Node.js y Express.",
    bg: "var(--sage)",
  },
];

function EducationPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <Reveal>
        <p className="font-hand text-2xl text-ink/70">capítulo tres</p>
        <h1 className="mt-1 font-display text-5xl sm:text-6xl">Formación</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          Postales de cada lugar donde aprendí algo nuevo.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <article
              className="group relative rounded-[1.5rem] p-3 shadow-[0_10px_25px_-12px_rgba(80,40,120,0.25)] transition-transform hover:-translate-y-1 hover:rotate-[-0.6deg]"
              style={{ background: it.bg }}
            >
              <div className="rounded-2xl bg-cream p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full" style={{ background: it.bg }}>
                    <GraduationCap className="h-5 w-5 text-ink" />
                  </div>
                  <span className="font-hand text-xl text-ink/70">{it.year}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl">{it.title}</h2>
                <p className="text-sm font-medium uppercase tracking-wider text-ink/60">{it.place}</p>
                <p className="mt-3 text-sm text-ink/75">{it.note}</p>
              </div>
              {/* Sello / stamp */}
              <span
                className="pointer-events-none absolute -right-2 -top-2 grid h-12 w-12 rotate-12 place-items-center rounded-full border-2 border-dashed border-ink/40 bg-cream font-hand text-[10px] uppercase tracking-wider text-ink/60"
                aria-hidden
              >
                ✿
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}