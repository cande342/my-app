import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Candela Echazú" },
      { name: "description", content: "Quién soy, qué me mueve y con qué herramientas trabajo." },
      { property: "og:title", content: "Sobre mí — Candela Echazú" },
      { property: "og:description", content: "Conocé a Candela Echazú, Frontend Developer." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const skills = [
  { group: "Lenguajes", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  { group: "Frameworks", items: ["React", "Next.js", "TanStack", "Angular"] },
  { group: "Estilos", items: ["Tailwind", "CSS Modules", "Framer Motion", "Sass"] },
  { group: "Herramientas", items: ["Figma", "Git","Loveable", "Gemini"] },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <Reveal>
        <p className="font-hand text-2xl text-ink/70">capítulo uno</p>
        <h1 className="mt-1 font-display text-5xl sm:text-6xl">Sobre mí</h1>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <Reveal delay={0.1}>
          <div className="watercolor relative aspect-[3/4] overflow-hidden rounded-[2rem] p-1">
            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-blush via-lilac to-sage">
              {/* Stylized avatar illustration */}
              <svg viewBox="0 0 300 400" className="h-full w-full">
                <circle cx="150" cy="160" r="78" fill="oklch(0.92 0.05 60)" />
                {/* Hair */}
                <path d="M70 165 Q 80 60 150 70 Q 230 60 230 165 Q 230 130 200 115 Q 195 140 150 142 Q 105 140 100 115 Q 70 130 70 165 Z" fill="oklch(0.32 0.07 320)" />
                <path d="M82 170 Q 78 250 120 280" stroke="oklch(0.32 0.07 320)" strokeWidth="22" fill="none" strokeLinecap="round" />
                {/* Eyes */}
                <ellipse cx="125" cy="170" rx="5" ry="8" fill="var(--ink)" />
                <ellipse cx="175" cy="170" rx="5" ry="8" fill="var(--ink)" />
                <circle cx="127" cy="167" r="1.6" fill="white" />
                <circle cx="177" cy="167" r="1.6" fill="white" />
                {/* Cheeks */}
                <ellipse cx="112" cy="195" rx="10" ry="5" fill="var(--sakura)" opacity="0.7" />
                <ellipse cx="188" cy="195" rx="10" ry="5" fill="var(--sakura)" opacity="0.7" />
                {/* Smile */}
                <path d="M138 200 Q 150 210 162 200" stroke="var(--ink)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                {/* Sweater */}
                <path d="M50 400 Q 60 270 150 260 Q 240 270 250 400 Z" fill="var(--sakura)" />
                <path d="M50 400 Q 60 270 150 260 Q 240 270 250 400 Z" fill="url(#g)" opacity="0.5" />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="var(--lilac)" />
                    <stop offset="1" stopColor="var(--butter)" />
                  </linearGradient>
                </defs>
                {/* Flower on ear */}
                <g transform="translate(208 160)">
                  <circle r="6" fill="var(--butter)" />
                  {[0, 72, 144, 216, 288].map((d) => (
                    <ellipse key={d} cx="0" cy="-10" rx="4" ry="7" fill="white" transform={`rotate(${d})`} />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              ¡Hola! Soy <span className="font-semibold text-ink">Candela</span>, FullStack Developer
              con su espacio en el cruce entre el diseño y el código. 
            </p>
            <p>
              Me apasionan las interfaces que se sienten <em>humanas</em>: que respiran, que
              responden con suavidad, que cuidan los detalles más pequeños. Creo en el código
              ordenado, los sistemas de diseño claros y las animaciones que tienen un porqué.
            </p>
            <p>
              Tengo experiencia en el backoffice de instituciones gubernamentales y startups.
              Siempre estoy buscando algún nuevo proyecto donde pueda aportar y aprender.
            </p>

          </div>
        </Reveal>
      </div>

      {/* Skills "ingredientes" */}
      <section className="mt-24">
        <Reveal>
          <p className="font-hand text-2xl text-ink/70">en mi stack</p>
          <h2 className="font-display text-4xl">Los Favoritos</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.08}>
              <div className="watercolor h-full rounded-2xl p-5">
                <h3 className="font-display text-xl">{s.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-cream/70 px-3 py-1 text-xs font-medium text-ink/80"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}