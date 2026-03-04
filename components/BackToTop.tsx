"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        backgroundColor: "var(--text-dark)",
        color: "var(--bg-primary)",
        boxShadow: "0 4px 20px rgba(28, 24, 20, 0.25)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--accent)";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px) scale(1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--text-dark)";
        (e.currentTarget as HTMLButtonElement).style.transform = visible
          ? "translateY(0) scale(1)"
          : "translateY(12px) scale(0.85)";
      }}
    >
      <ArrowUp size={16} />
    </button>
  );
}
