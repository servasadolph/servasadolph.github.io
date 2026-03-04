"use client";
import { Download, GraduationCap } from "lucide-react";

const timeline = [
  {
    degree: "PhD — Future Convergence Technology",
    institution: "Soonchunhyang University",
    location: "Asan, South Korea",
    period: "2023 – Present",
    status: "In Progress",
    details:
      "Research on multimodal machine learning for healthcare. Focus areas: domain adaptation, WBC detection, emotion recognition, clinical AI systems.",
  },
  {
    degree: "MSc — Big Data Engineering",
    institution: "Soonchunhyang University",
    location: "Asan, South Korea",
    period: "2021 – 2023",
    status: "Graduated",
    details:
      "Graduated with focus on large-scale data processing and machine learning. Thesis on healthcare data analytics.",
  },
  {
    degree: "BSc — Computer Engineering & IT",
    institution: "United African University of Tanzania",
    location: "Tanzania",
    period: "2016 – 2020",
    status: "Graduated",
    details:
      "Bachelor's degree in Computer Engineering and Information Technology. Foundation in software engineering and data systems.",
  },
];

const statusStyle: Record<string, { bg: string; color: string }> = {
  "In Progress": { bg: "rgba(122, 92, 58, 0.12)", color: "var(--accent)" },
  Graduated:     { bg: "rgba(28, 24, 20, 0.06)",  color: "var(--text-muted)" },
};

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
            <h2 className="text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
              Academic <em>Journey</em>
            </h2>
          </div>
          <a
            href="https://drive.google.com/file/d/1wT7QgBuHbP4l5IiLpIh4yWSUn_08Bkdx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold self-start md:self-auto"
          >
            <Download size={15} />
            Download Full CV
          </a>
        </div>

        {/* Layout: timeline left, stats right */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Timeline — spans 2 cols */}
          <div className="lg:col-span-2">
            {timeline.map((item, i) => (
              <div
                key={item.degree}
                className={`reveal reveal-delay-${Math.min(i + 1, 3)} relative pl-10 ${
                  i < timeline.length - 1 ? "pb-10" : ""
                }`}
              >
                {/* Vertical line */}
                {i < timeline.length - 1 && (
                  <div
                    className="absolute left-[7px] top-5 bottom-0 w-px"
                    style={{
                      background:
                        "linear-gradient(to bottom, var(--accent), var(--border))",
                    }}
                  />
                )}

                {/* Dot */}
                <div
                  className="absolute left-0 top-1 w-[18px] h-[18px] rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--accent)",
                    border: "3px solid var(--bg-secondary)",
                    boxShadow: "0 0 0 2px var(--accent)",
                  }}
                >
                  <GraduationCap size={9} color="white" strokeWidth={2.5} />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6 transition-shadow duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3
                      className="text-base font-semibold leading-snug"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--text-dark)",
                      }}
                    >
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={statusStyle[item.status]}
                      >
                        {item.status}
                      </span>
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "var(--bg-secondary)",
                          color: "var(--text-light)",
                        }}
                      >
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Institution */}
                  <p
                    className="text-sm font-medium mb-3 flex items-center gap-1.5"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.institution}
                    <span style={{ color: "var(--border)" }}>·</span>
                    <span style={{ color: "var(--text-light)", fontWeight: 400 }}>
                      {item.location}
                    </span>
                  </p>

                  {/* Details */}
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar stats */}
          <div className="reveal reveal-delay-4 flex flex-col gap-5">

            {/* Summary card */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--bg-primary)",
              }}
            >
              <p
                className="text-sm font-medium mb-4 opacity-70"
                style={{ letterSpacing: "0.05em" }}
              >
                EDUCATION SUMMARY
              </p>
              {[
                { label: "Degrees", value: "3" },
                { label: "Countries Studied", value: "2" },
                { label: "Years of Study", value: "8+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between py-3"
                  style={{ borderBottom: "1px solid rgba(240,238,230,0.15)" }}
                >
                  <span className="text-sm opacity-75">{s.label}</span>
                  <span
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Institutions */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "var(--bg-primary)",
                border: "1px solid var(--border)",
              }}
            >
              <p className="section-label mb-4">Institutions</p>
              {[
                {
                  abbr: "SCH",
                  name: "Soonchunhyang University",
                  country: "South Korea",
                },
                {
                  abbr: "UAUT",
                  name: "United African University of Tanzania",
                  country: "Tanzania",
                },
              ].map((inst) => (
                <div key={inst.abbr} className="flex items-start gap-3 mb-4 last:mb-0">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--accent)",
                    }}
                  >
                    {inst.abbr}
                  </div>
                  <div>
                    <p className="text-xs font-medium leading-snug" style={{ color: "var(--text-dark)" }}>
                      {inst.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-light)" }}>
                      {inst.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
