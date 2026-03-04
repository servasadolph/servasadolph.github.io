"use client";
import Image from "next/image";
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
              {/* Profile photo */}
              <Image
                src="/servas.jpg"
                alt="Servas Adolph"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle bottom gradient for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(227,218,204,0.45) 0%, transparent 40%)",
                }}
              />

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
              I am a PhD researcher in the Department of Future Convergence Technology at Soonchunhyang University, South Korea. My work centers on multimodal machine learning for healthcare — designing intelligent systems that integrate medical images, EEG signals, audio, facial expressions, and clinical text to enable more comprehensive clinical understanding.
            </p>

            <p className="mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              My research addresses one of the core challenges of medical AI: generalization. I develop domain adaptation methods that allow models to transfer reliably across hospitals, devices, and patient populations. In parallel, I build clinical AI systems powered by large language models, including medical report generation and Retrieval-Augmented Generation (RAG) frameworks for evidence-grounded decision support.
            </p>

            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Growing up in Tanzania exposed me to the disparity between technological advancement and healthcare accessibility. That experience shapes my research vision: to build multimodal AI systems that are not only state-of-the-art, but deployable, trustworthy, and impactful in real-world clinical environments — especially in low-resource settings.
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
