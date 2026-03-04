"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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

        <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-light)" }}>
          <a
            href="https://servasadolph.github.io"
            className="hover:underline transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            servasadolph.github.io
          </a>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
