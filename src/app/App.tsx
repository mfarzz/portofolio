import { Navbar } from "./components/Navbar";
import { Overview } from "./components/Overview";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { GithubRepos } from "./components/GithubRepos";
import { CustomCursor } from "./components/CustomCursor";
import { FloatingProfile } from "./components/FloatingProfile";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { useState, useEffect } from "react";

const sections = ["overview", "experience", "projects", "repositories", "skills", "contact"];

function AppContent() {
  const { theme } = useTheme();
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    fetch("https://api.github.com/users/mfarzz/repos?per_page=100")
      .then((r) => r.json())
      .then((repos) => setRepoCount(repos.filter((r: any) => !r.fork).length))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const bg = theme === "dark" ? "bg-[#09090b]" : "bg-[#fafafa]";
  const text = theme === "dark" ? "text-[#fafafa]" : "text-[#18181b]";

  return (
    <div className={`min-h-screen ${bg} ${text} cursor-none transition-colors duration-500`} style={{ fontFamily: "'Inter', sans-serif" }}>
      <CustomCursor />
      <FloatingProfile />
      <Navbar activeSection={activeSection} />
      <main className="max-w-[1100px] mx-auto px-8">
        <section id="overview" className="py-12"><Overview repoCount={repoCount} /></section>
        <section id="experience" className="py-12"><Experience /></section>
        <section id="projects" className="py-12"><Projects /></section>
        <section id="repositories" className="py-12"><GithubRepos /></section>
        <section id="skills" className="py-12"><Skills /></section>
        <section id="contact" className="py-12 pb-28"><Contact /></section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
