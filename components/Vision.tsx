"use client";

export default function Vision() {
  return (
    <section
      id="vision"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--text-dark)" }}
    >
      {/* Background subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(122, 92, 58, 0.12) 0%, transparent 55%), radial-gradient(circle at 75% 30%, rgba(122, 92, 58, 0.08) 0%, transparent 45%)",
        }}
      />

      {/* Decorative large circle */}
      <div
        className="absolute -right-24 -top-24 w-96 h-96 rounded-full border border-white pointer-events-none"
        style={{ opacity: 0.04 }}
      />
      <div
        className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full border border-white pointer-events-none"
        style={{ opacity: 0.04 }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="reveal">
          <p
            className="section-label mb-6"
            style={{ color: "rgba(240, 238, 230, 0.45)" }}
          >
            Research Vision
          </p>

          {/* Large quotation mark */}
          <div
            className="text-8xl leading-none mb-4 font-serif"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "rgba(122, 92, 58, 0.4)",
              lineHeight: 1,
            }}
          >
            "
          </div>

          <blockquote
            className="text-2xl md:text-4xl font-medium leading-snug mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--bg-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            Building intelligent multimodal AI systems that enhance clinical workflows and improve healthcare accessibility in low-resource environments such as Tanzania.
          </blockquote>

          <div
            className="w-12 h-px mx-auto mb-8"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(240, 238, 230, 0.55)" }}
          >
            AI has transformative potential in healthcare. My goal is to ensure that potential is realized not just in well-resourced hospitals — but in every clinic, in every country, where patients need it.
          </p>

          {/* Supporting pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Multimodal",
                desc: "Fusing imaging, signals, and text for complete clinical understanding",
              },
              {
                title: "Accessible",
                desc: "Systems optimized for low-resource infrastructure and limited compute",
              },
              {
                title: "Trustworthy",
                desc: "Interpretable, evidence-grounded, and safe for clinical deployment",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="reveal rounded-xl p-6 text-left"
                style={{
                  backgroundColor: "rgba(240, 238, 230, 0.05)",
                  border: "1px solid rgba(240, 238, 230, 0.08)",
                }}
              >
                <h4
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--bg-primary)" }}
                >
                  {pillar.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240, 238, 230, 0.5)" }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
