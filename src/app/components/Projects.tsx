import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { Divider } from "./Divider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";

const projects = [
  {
    title: "Portal Teknologi Pertanian & Biosistem",
    description: "Platform web untuk menampilkan informasi teknologi pertanian dan biosistem. Dibangun dengan React.js dan Express.js, sudah live dan digunakan secara aktif.",
    image: "/portofolio/portaltpb.png",
    tech: ["Laravel", "MySQL"],
    github: "https://github.com/Neotelemetri-2024/projectTPB",
    live: "https://portal.tpbunand.com/login",
  },
  {
    title: "RunUp Multi-platform App",
    description: "Aplikasi android dan ios yang dikembangkan menggunakan flutter untuk melakukan tracking aktifitas jalan, jogging, dan bersepeda",
    image: "/portofolio/runup.png",
    tech: ["Flutter", "Express.Js", "Firebase"],
    github: "https://github.com/mfarzz/runup",
    isMobile: true,
  },
  {
    title: "Excamotion Mobile App",
    description: "Aplikasi mobile yang dikembangkan dengan Kotlin. Dikelola sebagai Project Manager dengan delivery end-to-end dari konsep hingga rilis.",
    image: "/portofolio/excamotion.png",
    tech: ["Kotlin", "Android Studio"],
    github: "https://github.com/Neotelemetri-2024/ExcaMotion",
    live: null,
    isMobile: true,
  },
  {
    title: "Health Emergency Operation Center Kabupaten Agam",
    description: "Sistem web untuk mengelola data relawan dan logistik saat terjadi bencana alam di Kabupaten Agam 2025.",
    image: "/portofolio/heoc.png",
    tech: ["Laravel", "MySQL"],
    github: "https://github.com/mfarzz/pkdmt_agam",
    live: "https://pkdmt.neotelemetri.id/",
  },
];

export function Projects() {
  const { theme } = useTheme();
  const d = theme === "dark";

  return (
    <div>
      <Divider label="Projects" />
      <div className="grid grid-cols-2 gap-5">
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
                <a href={p.github} target="_blank"
                  className="w-8 h-8 rounded-lg backdrop-blur-md border flex items-center justify-center transition-colors shadow-lg"
                  style={{ backgroundColor: d ? "rgba(9,9,11,0.8)" : "rgba(255,255,255,0.8)", borderColor: d ? "#3f3f46" : "#e4e4e7", color: d ? "#fafafa" : "#18181b" }}
                ><Github size={14} /></a>
                {p.live && (
                  <a href={p.live} target="_blank"
                    className="w-8 h-8 rounded-lg backdrop-blur-md border flex items-center justify-center transition-colors shadow-lg"
                    style={{ backgroundColor: d ? "rgba(9,9,11,0.8)" : "rgba(255,255,255,0.8)", borderColor: d ? "#3f3f46" : "#e4e4e7", color: d ? "#fafafa" : "#18181b" }}
                  ><ExternalLink size={14} /></a>
                )}
              </div>
            </div>
            <div className="p-5 -mt-3 relative">
              <div className="text-[15px] mb-1.5 transition-colors" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>{p.title}</div>
              <p className="text-xs mb-4" style={{ lineHeight: 1.7, color: d ? "#71717a" : "#a1a1aa" }}>{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] border px-2.5 py-0.5 rounded-md"
                    style={{ color: d ? "#71717a" : "#a1a1aa", backgroundColor: d ? "#18181b" : "#f4f4f5", borderColor: d ? "#27272a" : "#e4e4e7" }}
                  >{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a href={p.github} target="_blank" className="inline-flex items-center gap-1.5 font-mono text-[11px] transition-colors" style={{ color: d ? "#71717a" : "#a1a1aa" }}>
                  <Github size={13} /> Source Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" className="inline-flex items-center gap-1.5 font-mono text-[11px] transition-colors" style={{ color: d ? "#71717a" : "#a1a1aa" }}>
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
