"use client";
import { MapPin, GraduationCap, Microscope } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5", backgroundColor: "var(--bg-card)" }}
            >
              {/* Photo placeholder with initials */}
              <div
                className="w-full h-full flex flex-col items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%)",
                }}
              >
                <div
                  className="text-7xl font-bold mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--accent)",
                    opacity: 0.4,
                  }}
                >
                  SA
                </div>
                <p className="text-sm" style={{ color: "var(--text-light)" }}>
                  Photo coming soon
                </p>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute top-0 left-0 w-16 h-16"
                style={{
                  borderTop: "3px solid var(--accent)",
                  borderLeft: "3px solid var(--accent)",
                  borderTopLeftRadius: "16px",
                  opacity: 0.5,
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-16 h-16"
                style={{
                  borderBottom: "3px solid var(--accent)",
                  borderRight: "3px solid var(--accent)",
                  borderBottomRightRadius: "16px",
                  opacity: 0.5,
                }}
              />
            </div>

            {/* Floating info card */}
            <div
              className="absolute -bottom-6 -right-6 p-4 rounded-xl"
              style={{
                backgroundColor: "var(--bg-primary)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 32px var(--shadow)",
              }}
            >
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--text-dark)" }}>
                <MapPin size={14} style={{ color: "var(--accent)" }} />
                Soonchunhyang University
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-light)" }}>
                Asan, South Korea
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal reveal-delay-2">
            <p className="section-label mb-4">About Me</p>
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "var(--text-dark)" }}
            >
              Researcher at the
              <br />
              <em>intersection of AI</em>
              <br />
              and healthcare.
            </h2>

            <p className="mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I am a PhD student in the Department of Future Convergence Technology at Soonchunhyang University, South Korea. My research focuses on multimodal machine learning for healthcare — building systems that reason from diverse data modalities including medical images, EEG signals, audio, facial expressions, and clinical text.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I work on domain adaptation techniques that allow AI models to generalize across clinical sites and populations — a critical challenge for real-world deployment. I am also deeply invested in clinical AI systems, including medical report generation using LLMs and Retrieval-Augmented Generation (RAG) for evidence-grounded decision support.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I grew up in Tanzania, where witnessing the gap between available AI capabilities and accessible healthcare shaped my research identity. My long-term mission is to build systems that work not only in top-tier hospitals, but in the clinics where they are needed most.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <GraduationCap size={16} />,
                  text: "PhD — Future Convergence Technology, Soonchunhyang University",
                },
                {
                  icon: <Microscope size={16} />,
                  text: "Research: Multimodal ML, Domain Adaptation, Clinical AI",
                },
                {
                  icon: <MapPin size={16} />,
                  text: "From Tanzania · Based in South Korea",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
