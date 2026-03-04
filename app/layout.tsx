import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Servas Adolph | Multimodal AI Researcher in Healthcare",
  description:
    "Servas Adolph is a PhD researcher at Soonchunhyang University specializing in multimodal machine learning for healthcare, domain adaptation, medical report generation, white blood cell detection, emotion recognition, and retrieval-augmented clinical AI systems.",
  keywords: [
    "Servas Adolph",
    "Multimodal AI",
    "Medical AI Researcher",
    "Healthcare Machine Learning",
    "Domain Adaptation in Medical Imaging",
    "White Blood Cell Detection",
    "Medical Report Generation",
    "Retrieval-Augmented Generation RAG",
    "Clinical Decision Support Systems",
    "AI for Global Health",
  ],
  openGraph: {
    title: "Servas Adolph | Multimodal AI Researcher",
    description:
      "PhD researcher specializing in multimodal AI, domain adaptation, and clinical intelligence systems for healthcare innovation.",
    url: "https://servasadolph.github.io",
    siteName: "Servas Adolph",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
