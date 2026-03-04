"use client";
import { ExternalLink, BookOpen } from "lucide-react";

const publications = [
  // =========================
  // Journal Articles
  // =========================
  {
    title:
      "Diffusion-based Wasserstein Generative Adversarial Network for Blood Cell Image Augmentation",
    venue: "Engineering Applications of Artificial Intelligence",
    year: "2024",
    type: "Journal",
    links: {
      doi: "https://doi.org/10.1016/j.engappai.2024.108221",
    },
  },
  {
    title:
      "WBC YOLO-ViT: 2-Way 2-Stage White Blood Cell Detection and Classification with a Combination of YOLOv5 and Vision Transformer",
    venue: "Computers in Biology and Medicine",
    year: "2024",
    type: "Journal",
    links: {
      doi: "https://doi.org/10.1016/j.compbiomed.2024.107875",
    },
  },

  // =========================
  // International Conference
  // =========================
  {
    title:
      "White Blood Cell Detection and Classification using YOLOv5 with Hybrid ResNet50-VGG16-SVM",
    venue:
      "Proceedings of the 6th International Conference on ICT for Smart Health & Home (ICT4sHealth & Home), Kota Kinabalu, Malaysia",
    year: "2022",
    type: "Conference",
    links: {},
  },

  // =========================
  // Domestic Conference (Korea)
  // =========================
  {
    title:
      "Adapting YOLO-ViT for Differential Diagnosis of Myelodysplastic Syndromes and Normal Blood Cell",
    venue:
      "Proceedings of the Korea Society of Computer and Information Conference",
    year: "2024",
    type: "Conference",
    links: {},
  },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  Journal: { bg: "rgba(122, 92, 58, 0.12)", text: "var(--accent)" },
  Conference: { bg: "rgba(28, 24, 20, 0.07)", text: "var(--text-muted)" },
};

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-28"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">Publications</p>
            <h2
              className="text-4xl font-bold"
              style={{ color: "var(--text-dark)" }}
            >
              Peer-Reviewed Research
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
              className={`pub-row reveal reveal-delay-${Math.min(
                i + 1,
                4
              )} py-7 px-2`}
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
                  <p
                    className="text-sm mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {pub.venue}
                  </p>

                  {/* Type + Links */}
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