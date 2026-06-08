import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links: { to: "/" | "/about" | "/experience" | "/education" | "/work" | "/contact"; label: string; end?: boolean }[] = [
  { to: "/", label: "Inicio", end: true },
  { to: "/about", label: "Sobre mí" },
  { to: "/experience", label: "Experiencia" },
  { to: "/education", label: "Formación" },
  { to: "/work", label: "Trabajo" },
  { to: "/contact", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 backdrop-blur-md bg-cream/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sakura/80 font-display text-lg text-ink shadow-sm transition-transform group-hover:rotate-[-8deg]">
            C
          </span>
          <span className="font-display text-xl leading-none">
            Candela <span className="text-muted-foreground">Echazú</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={l.end ? { exact: true } : undefined}
                activeProps={{ className: "text-ink bg-blush" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-ink" }}
                className="rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-blush/60"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border bg-card/60 p-2 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-border/60 bg-cream/95 px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={l.end ? { exact: true } : undefined}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-ink bg-blush" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="block rounded-lg px-3 py-2 text-sm font-medium"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
