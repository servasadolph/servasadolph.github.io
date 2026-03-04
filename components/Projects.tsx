"use client";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "WBC Detection & Classification",
    description:
      "An automated pipeline for white blood cell detection, counting, and classification using YOLO and Vision Transformers. Optimized for deployment in resource-constrained clinical laboratories.",
    tech: ["Python", "YOLO", "ViT", "PyTorch", "OpenCV"],
    color: "#e8e0d4",
    accent: "#7a5c3a",
  },
  {
    title: "Multimodal Emotion Recognition",
    description:
      "A deep learning system that fuses EEG signals, audio features, and facial expression data for robust emotional state recognition — targeting mental health monitoring applications.",
    tech: ["PyTorch", "EEG", "Audio Processing", "Facial Landmarks", "Multimodal Fusion"],
    color: "#e3ddd5",
    accent: "#8b6f47",
  },
  {
    title: "Medical Report Generator",
    description:
      "An LLM-powered system that produces structured clinical reports and physician-style patient summaries from diagnostic data, enhanced with RAG for evidence grounding.",
    tech: ["LangGraph", "RAG", "FastAPI", "LLMs", "Python"],
    color: "#ddd8cf",
    accent: "#6b5940",
  },
  {
    title: "Healthcare AI Chatbot",
    description:
      "A bilingual (Swahili + English) AI-powered healthcare chatbot designed for low-resource settings in Tanzania — providing accessible clinical guidance where specialist access is limited.",
    tech: ["React Native", "FastAPI", "NLP", "Swahili NLP", "LangChain"],
    color: "#e0dbd2",
    accent: "#7a5c3a",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-lg">
            <p className="section-label mb-4">Selected Projects</p>
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ color: "var(--text-dark)" }}
            >
              Research translated
              <br />
              <em>into systems.</em>
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "var(--text-light)" }}>
            Each project is designed with real-world deployment in mind — not just benchmark performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className={`project-card reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl`}
            >
              {/* Color banner */}
              <div
                className="h-36 flex items-end p-6"
                style={{
                  backgroundColor: proj.color,
                  background: `linear-gradient(135deg, ${proj.color} 0%, ${proj.accent}18 100%)`,
                }}
              >
                <h3
                  className="text-lg font-semibold leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-dark)" }}
                >
                  {proj.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                  {proj.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                    title="View project"
                  >
                    <ExternalLink size={12} />
                    View Project
                  </button>
                  <button
                    className="btn-ghost inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                    title="GitHub"
                  >
                    <Github size={12} />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
