"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchFocus from "@/components/ResearchFocus";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Resume from "@/components/Resume";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ResearchFocus />
      <Projects />
      <Publications />
      <Resume />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
