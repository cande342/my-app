import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Trabajo — Candela Gómez" },
      { name: "description", content: "Selección de proyectos de Candela Gómez, Frontend Developer." },
      { property: "og:title", content: "Trabajo — Candela Gómez" },
      { property: "og:description", content: "Algunos proyectos en los que estuve trabajando." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

type Project = {
  title: string;
  tagline: string;
  tags: string[];
  swatch: [string, string];
  doodle: "petals" | "leaves" | "stars" | "waves";
};

const projects: Project[] = [
  {
    title: "Proyecto uno",
    tagline: "Una aplicación para el control de gastos e inversiones personales. Próximamente.",
    tags: ["Diseño", "Next.js", "Tailwind"],
    swatch: ["var(--sakura)", "var(--butter)"],
    doodle: "petals",
  },
  {
    title: "Proyecto dos",
    tagline: "Aplicación mobile para mood tracking. Próximamente.",
    tags: ["React", "TypeScript", "Design System"],
    swatch: ["var(--lilac)", "var(--blush)"],
    doodle: "stars",
  },
  {
    title: "Proyecto tres",
    tagline: "Sitio personal con animaciones al scroll. Próximamente.",
    tags: ["Astro", "Framer Motion", "MDX"],
    swatch: ["var(--sage)", "var(--butter)"],
    doodle: "leaves",
  },
  {
    title: "Proyecto cuatro",
    tagline: "Mini-app de mood tracking con ilustraciones propias. Próximamente.",
    tags: ["React", "Supabase", "SVG"],
    swatch: ["var(--lilac)", "var(--sage)"],
    doodle: "waves",
  },
];

function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <Reveal>
        <p className="font-hand text-2xl text-ink/70">capítulo cuatro</p>
        <h1 className="mt-1 font-display text-5xl sm:text-6xl">Trabajo</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          Estos espacios están reservados para mostrar proyectos reales. Pronto van a vivir acá ✿
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article
              className="group relative overflow-hidden rounded-[2rem] p-1 shadow-[0_20px_40px_-22px_rgba(80,40,120,0.3)] transition-transform hover:-translate-y-1"
              style={{ background: `linear-gradient(135deg, ${p.swatch[0]}, ${p.swatch[1]})` }}
            >
              <div className="rounded-[1.7rem] bg-cream p-6">
                <div
                  className="relative mb-5 grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${p.swatch[0]}, ${p.swatch[1]})` }}
                >
                  <Doodle kind={p.doodle} />
                  <span className="absolute bottom-3 left-3 rounded-full bg-cream/80 px-3 py-1 text-xs font-medium text-ink/70 backdrop-blur">
                    Próximamente
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-2xl">{p.title}</h2>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-blush text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/75">{p.tagline}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-cream/70 px-3 py-1 text-xs font-medium text-ink/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 watercolor rounded-3xl p-8 text-center">
          <p className="font-hand text-2xl text-ink/80">¿Querés colaborar?</p>
          <h3 className="mt-1 font-display text-3xl">Estoy abierta a nuevos proyectos</h3>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream shadow transition-transform hover:-translate-y-0.5"
          >
            Hablemos
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

function Doodle({ kind }: { kind: Project["doodle"] }) {
  if (kind === "petals") {
    return (
      <svg viewBox="0 0 200 120" className="h-2/3 w-2/3 opacity-90">
        {[...Array(7)].map((_, i) => (
          <g key={i} transform={`translate(${20 + i * 25} ${30 + (i % 2) * 30}) rotate(${i * 30})`}>
            <ellipse cx="0" cy="0" rx="10" ry="6" fill="white" />
            <circle r="2" fill="var(--butter)" />
          </g>
        ))}
      </svg>
    );
  }
  if (kind === "leaves") {
    return (
      <svg viewBox="0 0 200 120" className="h-2/3 w-2/3 opacity-90">
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d="M0 0 Q 20 -20 40 0 Q 20 20 0 0 Z"
            transform={`translate(${30 + i * 30} ${40 + (i % 2) * 30}) rotate(${i * 25})`}
            fill="white"
            stroke="var(--ink)"
            strokeOpacity="0.15"
          />
        ))}
      </svg>
    );
  }
  if (kind === "stars") {
    return (
      <svg viewBox="0 0 200 120" className="h-2/3 w-2/3 opacity-90">
        {[...Array(9)].map((_, i) => (
          <path
            key={i}
            d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
            transform={`translate(${20 + i * 20} ${30 + (i % 3) * 25})`}
            fill="white"
          />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 120" className="h-2/3 w-2/3 opacity-90">
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M0 ${30 + i * 20} Q 50 ${10 + i * 20} 100 ${30 + i * 20} T 200 ${30 + i * 20}`}
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
