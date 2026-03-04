"use client";
import { Download, GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    type: "education",
    degree: "PhD — Future Convergence Technology",
    institution: "Soonchunhyang University",
    location: "Asan, South Korea",
    period: "2023 – Present",
    details:
      "Research on multimodal machine learning for healthcare. Focus areas: domain adaptation, WBC detection, emotion recognition, clinical AI systems.",
  },
  {
    type: "work",
    degree: "Research Assistant — Medical AI Lab",
    institution: "Soonchunhyang University",
    location: "South Korea",
    period: "2023 – Present",
    details:
      "Developing deep learning pipelines for medical image analysis and clinical AI systems. Contributing to grant-funded healthcare AI research.",
  },
  {
    type: "education",
    degree: "MSc — Big Data Engineering",
    institution: "Soonchunhyang University",
    location: "Asan, South Korea",
    period: "2021 – 2023",
    details:
      "Graduated with focus on large-scale data processing and machine learning. Thesis on healthcare data analytics.",
  },
  {
    type: "education",
    degree: "BSc — Computer Engineering & IT",
    institution: "United African University of Tanzania",
    location: "Tanzania",
    period: "2016 – 2020",
    details:
      "Bachelor's degree in Computer Engineering and Information Technology. Foundation in software engineering and data systems.",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">Resume</p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "var(--text-dark)" }}
            >
              Academic &amp;{" "}
              <em>Professional Journey</em>
            </h2>
          </div>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold self-start md:self-auto"
          >
            <Download size={15} />
            Download Full CV
          </a>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {timeline.map((item, i) => (
            <div
              key={item.degree}
              className={`timeline-item reveal reveal-delay-${Math.min(i + 1, 4)} relative pl-8 pb-10`}
            >
              {/* Line */}
              {i < timeline.length - 1 && (
                <div className="timeline-line" />
              )}

              {/* Dot */}
              <div
                className="absolute left-0 top-1 w-4 h-4 rounded-full flex items-center justify-center -translate-x-1.5"
                style={{
                  backgroundColor:
                    item.type === "education" ? "var(--accent)" : "var(--text-dark)",
                  border: "2px solid var(--bg-secondary)",
                }}
              >
                {item.type === "education" ? (
                  <GraduationCap size={8} color="white" />
                ) : (
                  <Briefcase size={8} color="white" />
                )}
              </div>

              {/* Content */}
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3
                    className="text-base font-semibold leading-snug"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {item.degree}
                  </h3>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full shrink-0"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {item.institution} · {item.location}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
