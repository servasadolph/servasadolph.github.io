"use client";
import { Github, Linkedin, BookOpen, Award } from "lucide-react";

const socials = [
  { icon: <Linkedin size={15} />, href: "https://linkedin.com/in/servas-adolph-tarimo-66494066", label: "LinkedIn" },
  { icon: <BookOpen size={15} />, href: "https://scholar.google.com/citations?user=LCd83TUAAAAJ", label: "Google Scholar" },
  { icon: <Award size={15} />, href: "https://orcid.org/0009-0008-8415-2787", label: "ORCID" },
  { icon: <Github size={15} />, href: "https://github.com/servasadolph", label: "GitHub" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10"
      style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Name + tagline */}
        <div>
          <span
            className="font-semibold"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-dark)" }}
          >
            Servas Adolph
          </span>
          <span className="ml-2 text-sm" style={{ color: "var(--text-light)" }}>
            — Multimodal Medical AI Researcher
          </span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ color: "var(--text-light)", backgroundColor: "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-primary)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--text-light)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-sm" style={{ color: "var(--text-light)" }}>
          © {year} · servasadolph.github.io
        </span>
      </div>
    </footer>
  );
}
