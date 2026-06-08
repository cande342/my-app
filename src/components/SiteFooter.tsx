import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-blush/30">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 sm:items-end">
        <div>
          <p className="font-display text-2xl">Hasta pronto ✿</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          <Link to="/contact" className="rounded-full bg-sakura px-4 py-2 text-sm font-medium text-ink shadow-sm transition-transform hover:-translate-y-0.5">
            Escribime
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card transition-transform hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card transition-transform hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hola@candelagomez.dev"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card transition-transform hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Candela Gómez · Fullstack Developer
      </p>
    </footer>
  );
}