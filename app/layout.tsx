import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Servas Adolph | Multimodal Medical AI Researcher",
  description:
    "PhD researcher at Soonchunhyang University specializing in multimodal machine learning for healthcare, domain adaptation, WBC detection, emotion recognition, and clinical AI systems.",
  keywords: [
    "Medical AI",
    "Multimodal Machine Learning",
    "Healthcare AI",
    "Domain Adaptation",
    "WBC Detection",
    "Emotion Recognition",
    "RAG Clinical AI",
    "PhD Researcher",
  ],
  openGraph: {
    title: "Servas Adolph | Multimodal Medical AI Researcher",
    description:
      "Building intelligent AI systems that improve healthcare accessibility in low-resource settings.",
    url: "https://servasadolph.github.io",
    siteName: "Servas Adolph",
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
