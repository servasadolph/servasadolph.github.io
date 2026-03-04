"use client";
import { useState } from "react";
import { Mail, Linkedin, BookOpen, Github, Award, Copy, Check } from "lucide-react";

const EMAIL = "servasadolph@gmail.com";

const contacts = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    desc: "Primary contact",
    copyable: true,
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "servas-adolph-tarimo",
    href: "https://linkedin.com/in/servas-adolph-tarimo-66494066",
    desc: "Professional network",
  },
  {
    icon: <BookOpen size={20} />,
    label: "Google Scholar",
    value: "Research profile",
    href: "https://scholar.google.com/citations?user=LCd83TUAAAAJ",
    desc: "Publications & citations",
  },
  {
    icon: <Award size={20} />,
    label: "ORCID",
    value: "0009-0008-8415-2787",
    href: "https://orcid.org/0009-0008-8415-2787",
    desc: "Researcher identifier",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "servasadolph",
    href: "https://github.com/servasadolph",
    desc: "Code & projects",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 text-center max-w-xl mx-auto">
          <p className="section-label mb-4">Contact</p>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--text-dark)" }}>
            Let&apos;s Connect
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Open to research collaborations, academic discussions, and opportunities at the intersection of AI and healthcare.
          </p>
        </div>

        {/* Contact grid */}
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300`}
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(28, 24, 20, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
              >
                {c.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium mb-0.5" style={{ color: "var(--text-light)" }}>
                  {c.desc}
                </div>
                <div className="text-sm font-semibold mb-0.5" style={{ color: "var(--text-dark)" }}>
                  {c.label}
                </div>
                <div className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
                  {c.value}
                </div>
              </div>

              {/* Copy button for email */}
              {c.copyable && (
                <button
                  onClick={handleCopy}
                  title={copied ? "Copied!" : "Copy email"}
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    backgroundColor: copied ? "rgba(122,92,58,0.12)" : "var(--bg-secondary)",
                    color: copied ? "var(--accent)" : "var(--text-light)",
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              )}
            </a>
          ))}

          {/* CTA card */}
          <div
            className="reveal reveal-delay-5 sm:col-span-2 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <div>
              <p className="font-semibold mb-1" style={{ color: "var(--text-dark)" }}>
                Interested in collaborating?
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                I&apos;m always open to meaningful research partnerships and academic discussions.
              </p>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="btn-primary shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            >
              <Mail size={14} />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
