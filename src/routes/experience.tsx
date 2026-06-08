import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experiencia — Candela Gómez" },
      { name: "description", content: "Mi recorrido profesional como Frontend Developer." },
      { property: "og:title", content: "Experiencia — Candela Gómez" },
      { property: "og:description", content: "Roles, equipos y proyectos en los que trabajé." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const experiences = [
  {
    role: "Frontend Developer Jr",
    company: "TRASUS Consulting",
    period: "Nov 2024 — Presente",
    description:
      "Me dedico a actualizar la interfaz de páginas web y al desarrollo pixel perfect de pantallas para nuevos proyectos. Versiones de angular desde la 16 a la 21. Migraciones desde código Legacy. Integración de pasarelas de Pago.",
    stack: ["Angular", "TypeScript", "Tailwind", ".NET"],
    color: "var(--sakura)",
  },
  {
    role: "Frontend y Diseño UI/UX freelance",
    company: "IMK: fletes internacionales",
    period: "2025",
    description:
      "Diseñé y desarrollé el front de la aplicación backoffice para la gestión de viajes, datos de empleados y reportes.",
    stack: ["Figma", "Angular", "Tailwind"],
    color: "var(--lilac)",
  },
  {
    role: "Ayudante Alumna",
    company: "UNICEN",
    period: "2024",
    description:
      "Ayudé en el desarrollo de la materia Programación 1, lo que me permitió profundizar en mis conocimientos de programación orientada a objetos, algoritmos y estructuras de datos. Además, tuve la oportunidad de guiar a estudiantes en sus proyectos finales, fomentando un ambiente de aprendizaje colaborativo.  ",
    stack: ["Java", "Python", "Git"],
    color: "var(--moss)",
  },
];

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
      <Reveal>
        <p className="font-hand text-2xl text-ink/70">capítulo dos</p>
        <h1 className="mt-1 font-display text-5xl sm:text-6xl">Experiencia</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          Un sendero de paradas. Cada una me enseñó algo distinto sobre cómo construir productos
          con cuidado.
        </p>
      </Reveal>

      <ol className="relative mt-16 space-y-12 border-l-2 border-dashed border-sakura/60 pl-8 sm:pl-12">
        {experiences.map((exp, i) => (
          <Reveal as="li" key={exp.company} delay={i * 0.1}>
            <span
              className="absolute -left-[11px] mt-3 grid h-5 w-5 place-items-center rounded-full border-2 border-cream shadow"
              style={{ background: exp.color }}
              aria-hidden
            />
            <article className="watercolor rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-2xl sm:text-3xl">{exp.role}</h2>
                <span className="font-hand text-xl text-ink/70">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-ink/60">
                {exp.company}
              </p>
              <p className="mt-4 text-ink/80">{exp.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-cream/70 px-3 py-1 text-xs font-medium"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}