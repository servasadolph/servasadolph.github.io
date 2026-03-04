"use client";
import { Brain, Eye, Droplets, FileText, Database } from "lucide-react";

const areas = [
  {
    icon: <Brain size={24} />,
    title: "Domain Adaptation in Medical AI",
    description:
      "Developing transfer learning and domain adaptation techniques that enable AI models to generalize across clinical sites, imaging protocols, and patient populations without requiring full re-training.",
    tags: ["Transfer Learning", "Distribution Shift", "Generalization"],
  },
  {
    icon: <Eye size={24} />,
    title: "Multimodal Emotion Recognition",
    description:
      "Fusing EEG brain signals, audio features, and facial expression data into unified deep learning architectures for robust emotional state inference — targeting mental health monitoring.",
    tags: ["EEG", "Audio Processing", "Facial Analysis"],
  },
  {
    icon: <Droplets size={24} />,
    title: "WBC Detection & Classification",
    description:
      "Automated white blood cell detection, counting, and classification using YOLO and Vision Transformers — designed to support diagnostic hematology in resource-limited clinical settings.",
    tags: ["YOLO", "Vision Transformers", "Hematology"],
  },
  {
    icon: <FileText size={24} />,
    title: "Clinical Report Generation",
    description:
      "Fine-tuning large language models to produce structured, physician-style clinical reports and patient summaries from diagnostic inputs, reducing documentation burden.",
    tags: ["LLMs", "Medical NLP", "Report Automation"],
  },
  {
    icon: <Database size={24} />,
    title: "RAG for Clinical Decision Support",
    description:
      "Building retrieval-augmented generation systems that ground AI responses in verified medical literature, enabling safe and evidence-based clinical decision support.",
    tags: ["RAG", "Knowledge Retrieval", "Clinical AI"],
  },
];

export default function ResearchFocus() {
  return (
    <section id="research" className="py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 max-w-xl">
          <p className="section-label mb-4">Research Focus</p>
          <h2
            className="text-4xl font-bold leading-tight"
            style={{ color: "var(--text-dark)" }}
          >
            Five areas at the frontier of
            <em> Medical AI.</em>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`research-card reveal reveal-delay-${Math.min(i + 1, 5)} rounded-2xl p-7`}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
              >
                {area.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-3 leading-snug"
                style={{ color: "var(--text-dark)" }}
              >
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                {area.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Last cell — decorative quote */}
          <div
            className="reveal reveal-delay-5 rounded-2xl p-7 flex flex-col justify-center"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--bg-primary)",
            }}
          >
            <p
              className="text-xl font-medium leading-relaxed italic mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "AI for healthcare must work where healthcare is needed most."
            </p>
            <span className="text-sm opacity-70">— Research Philosophy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
