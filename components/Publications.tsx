"use client";
import { ExternalLink, BookOpen } from "lucide-react";

const publications = [
  {
    title:
      "Multimodal Emotion Recognition Using EEG, Audio, and Facial Expression Fusion for Mental Health Applications",
    venue: "International Conference on Medical AI",
    year: "2024",
    type: "Conference",
    links: { pdf: "#", doi: "#" },
  },
  {
    title:
      "Domain Adaptation for White Blood Cell Classification Across Clinical Sites Using Vision Transformers",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    year: "2024",
    type: "Journal",
    links: { pdf: "#", doi: "#", github: "#" },
  },
  {
    title:
      "Retrieval-Augmented Generation for Evidence-Based Clinical Decision Support in Low-Resource Settings",
    venue: "Workshop on AI for Healthcare in Developing Regions, NeurIPS",
    year: "2023",
    type: "Workshop",
    links: { pdf: "#" },
  },
  {
    title:
      "Automated WBC Detection and Counting Using YOLOv8 for Resource-Constrained Laboratory Environments",
    venue: "MICCAI 2023 — Medical Image Computing and Computer Assisted Intervention",
    year: "2023",
    type: "Conference",
    links: { pdf: "#", doi: "#", github: "#" },
  },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  Journal: { bg: "rgba(122, 92, 58, 0.12)", text: "var(--accent)" },
  Conference: { bg: "rgba(28, 24, 20, 0.07)", text: "var(--text-muted)" },
  Workshop: { bg: "rgba(107, 92, 69, 0.1)", text: "var(--text-muted)" },
};

export default function Publications() {
  return (
    <section id="publications" className="py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">Publications</p>
            <h2 className="text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
              Research Output
            </h2>
          </div>
          <a
            href="https://scholar.google.com/citations?user=LCd83TUAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium self-start md:self-auto"
          >
            <BookOpen size={14} />
            Google Scholar
          </a>
        </div>

        {/* Publications list */}
        <div className="flex flex-col gap-0">
          {publications.map((pub, i) => (
            <div
              key={pub.title}
              className={`pub-row reveal reveal-delay-${Math.min(i + 1, 4)} py-7 px-2`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Year */}
                <div
                  className="shrink-0 text-sm font-semibold w-12"
                  style={{ color: "var(--accent)" }}
                >
                  {pub.year}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-base font-semibold leading-snug mb-1"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {pub.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                    {pub.venue}
                  </p>

                  {/* Links + type */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: typeColors[pub.type]?.bg,
                        color: typeColors[pub.type]?.text,
                      }}
                    >
                      {pub.type}
                    </span>

                    {pub.links.pdf && (
                      <a
                        href={pub.links.pdf}
                        className="inline-flex items-center gap-1 text-xs font-medium hover:underline"
                        style={{ color: "var(--accent)" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={11} /> PDF
                      </a>
                    )}
                    {pub.links.doi && (
                      <a
                        href={pub.links.doi}
                        className="inline-flex items-center gap-1 text-xs font-medium hover:underline"
                        style={{ color: "var(--text-light)" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={11} /> DOI
                      </a>
                    )}
                    {pub.links.github && (
                      <a
                        href={pub.links.github}
                        className="inline-flex items-center gap-1 text-xs font-medium hover:underline"
                        style={{ color: "var(--text-light)" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={11} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
