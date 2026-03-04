"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["about", "research", "projects", "publications", "resume", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "rgba(240, 238, 230, 0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.35s ease, border-color 0.35s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-dark)" }}
          className="text-lg font-semibold tracking-tight"
        >
          SA
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href.slice(1) ? "active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary px-5 py-2 rounded-full text-sm font-medium"
        >
          Get in Touch
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1"
          style={{ color: "var(--text-dark)" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}
          className="md:hidden px-6 py-4 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="nav-link text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary px-5 py-2 rounded-full text-sm font-medium text-center mt-2"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
