import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { Divider } from "./Divider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";
import { projects } from "../data/portfolio";

export function Projects() {
  const { theme } = useTheme();
  const d = theme === "dark";

  return (
    <div>
      <Divider label="Projects" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group border rounded-xl overflow-hidden transition-all hover:shadow-xl"
            style={{
              backgroundColor: d ? "#111114" : "#ffffff",
              borderColor: d ? "#27272a" : "#e4e4e7",
              boxShadow: "none",
            }}
          >
            <div className={`relative w-full h-56 overflow-hidden transition-colors ${p.isMobile ? "flex items-center justify-center p-6 bg-gradient-to-br" : "block"}`}
              style={{ backgroundColor: d ? "#18181b" : "#f4f4f5" }}>

              {p.isMobile && (
                <div className="absolute inset-0 opacity-20 blur-2xl scale-125">
                  <ImageWithFallback src={p.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}

              <ImageWithFallback
                src={p.image}
                alt={p.title}
                className={`${p.isMobile ? "h-full w-auto rounded-[1.2rem] border-2 shadow-2xl z-10" : "w-full h-full object-cover"} opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500`}
                style={p.isMobile ? { borderColor: d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)" } : {}}
              />

              <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${d ? "#111114" : "#ffffff"} 0%, transparent 40%, transparent 100%)` }} />

              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-30">
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg backdrop-blur-md border flex items-center justify-center transition-colors shadow-lg"
                  style={{ backgroundColor: d ? "rgba(9,9,11,0.8)" : "rgba(255,255,255,0.8)", borderColor: d ? "#3f3f46" : "#e4e4e7", color: d ? "#fafafa" : "#18181b" }}
                ><Github size={14} /></a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg backdrop-blur-md border flex items-center justify-center transition-colors shadow-lg"
                    style={{ backgroundColor: d ? "rgba(9,9,11,0.8)" : "rgba(255,255,255,0.8)", borderColor: d ? "#3f3f46" : "#e4e4e7", color: d ? "#fafafa" : "#18181b" }}
                  ><ExternalLink size={14} /></a>
                )}
              </div>
            </div>
            <div className="p-5 -mt-3 relative">
              <div className="text-[15px] mb-1.5 transition-colors" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>{p.title}</div>
              <p className="text-xs mb-4" style={{ lineHeight: 1.7, color: d ? "#a1a1aa" : "#71717a" }}>{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] border px-2.5 py-0.5 rounded-md"
                    style={{ color: d ? "#a1a1aa" : "#71717a", backgroundColor: d ? "#18181b" : "#f4f4f5", borderColor: d ? "#27272a" : "#e4e4e7" }}
                  >{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[11px] transition-colors" style={{ color: d ? "#a1a1aa" : "#71717a" }}>
                  <Github size={13} /> Source Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[11px] transition-colors" style={{ color: d ? "#a1a1aa" : "#71717a" }}>
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
