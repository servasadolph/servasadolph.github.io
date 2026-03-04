"use client";
import { ArrowDown, FileText, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dots grid */}
        <div
          className="absolute inset-0 dots-pattern opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(122, 92, 58, 0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Soft radial glows */}
        <div
          className="absolute anim-pulse"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            right: "-100px",
            background:
              "radial-gradient(circle, rgba(122, 92, 58, 0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute anim-pulse"
          style={{
            width: "400px",
            height: "400px",
            bottom: "-80px",
            left: "-60px",
            background:
              "radial-gradient(circle, rgba(122, 92, 58, 0.05) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />

        {/* Floating circles — medical/AI motif */}
        <div
          className="absolute anim-float"
          style={{
            width: "180px",
            height: "180px",
            top: "15%",
            right: "8%",
            border: "1px solid rgba(122, 92, 58, 0.18)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute anim-float-2"
          style={{
            width: "90px",
            height: "90px",
            top: "20%",
            right: "12%",
            border: "1px solid rgba(122, 92, 58, 0.12)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute anim-float"
          style={{
            width: "50px",
            height: "50px",
            bottom: "25%",
            right: "18%",
            border: "1px solid rgba(122, 92, 58, 0.15)",
            borderRadius: "50%",
            animationDelay: "1s",
          }}
        />

        {/* SVG neural net lines */}
        <svg
          className="absolute opacity-10"
          style={{ top: 0, right: 0, width: "50%", height: "100%" }}
          viewBox="0 0 500 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="420" cy="120" r="4" fill="#7a5c3a" />
          <circle cx="300" cy="260" r="3" fill="#7a5c3a" />
          <circle cx="380" cy="420" r="5" fill="#7a5c3a" />
          <circle cx="250" cy="560" r="3" fill="#7a5c3a" />
          <circle cx="450" cy="620" r="4" fill="#7a5c3a" />
          <line x1="420" y1="120" x2="300" y2="260" stroke="#7a5c3a" strokeWidth="0.8" />
          <line x1="300" y1="260" x2="380" y2="420" stroke="#7a5c3a" strokeWidth="0.8" />
          <line x1="380" y1="420" x2="250" y2="560" stroke="#7a5c3a" strokeWidth="0.8" />
          <line x1="380" y1="420" x2="450" y2="620" stroke="#7a5c3a" strokeWidth="0.8" />
          <line x1="420" y1="120" x2="380" y2="420" stroke="#7a5c3a" strokeWidth="0.5" strokeDasharray="4 6" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="anim-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--accent)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            PhD Researcher · Soonchunhyang University, South Korea
          </div>

          {/* Name */}
          <h1
            className="anim-fade-in-up delay-100 font-bold leading-none mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "var(--text-dark)",
              letterSpacing: "-0.02em",
            }}
          >
            Servas
            <br />
            <span style={{ color: "var(--accent)" }}>Adolph</span>
          </h1>

          {/* Subtitle */}
          <p
            className="anim-fade-in-up delay-200 text-xl font-medium mb-6"
            style={{ color: "var(--text-muted)", letterSpacing: "0.01em" }}
          >
            Multimodal Medical AI Researcher
          </p>

          {/* Research statement */}
          <p
            className="anim-fade-in-up delay-300 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            I build intelligent AI systems that fuse multimodal signals — from EEG and imaging to clinical text — to advance diagnostics and decision support in healthcare environments where it matters most.
          </p>

          {/* Buttons */}
          <div className="anim-fade-in-up delay-400 flex flex-wrap gap-3">
            <a
              href="#research"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            >
              View Research
            </a>
            <a
              href="https://drive.google.com/file/d/1wT7QgBuHbP4l5IiLpIh4yWSUn_08Bkdx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            >
              <FileText size={15} />
              Download CV
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            >
              <Mail size={15} />
              Contact
            </a>
          </div>

          {/* Stats */}
          <div
            className="anim-fade-in delay-500 flex flex-wrap gap-8 mt-16 pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {[
              { value: "5+", label: "Research Areas" },
              { value: "4+", label: "Active Projects" },
              { value: "2023", label: "MSc Graduated" },
              { value: "SCH", label: "University" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-dark)" }}
                >
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: "var(--text-light)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 anim-fade-in delay-700"
        style={{ color: "var(--text-light)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="anim-float" />
      </a>
    </section>
  );
}
