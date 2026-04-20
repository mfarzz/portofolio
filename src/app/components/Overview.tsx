import { useState } from "react";
import { Mail, Github } from "lucide-react";
import { motion } from "motion/react";
import { Divider } from "./Divider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";
import { getTechColor } from "./techColors";

const techStack = [
  "Python", "React.js", "Express.js", "Next.js", "Flutter",
  "PostgreSQL", "TensorFlow", "scikit-learn", "Power BI", "Laravel", "Flask", "Pentaho",
];

function TechPill({ name }: { name: string }) {
  const { theme } = useTheme();
  const d = theme === "dark";
  const [hovered, setHovered] = useState(false);
  const [bg, border, text] = getTechColor(name);

  return (
    <motion.span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="font-mono text-[11px] px-3 py-1.5 rounded-md cursor-default transition-all duration-300 border"
      style={{
        backgroundColor: hovered ? bg : (d ? "#18181b" : "#f4f4f5"),
        borderColor: hovered ? border : (d ? "#27272a" : "#e4e4e7"),
        color: hovered ? text : (d ? "#71717a" : "#a1a1aa"),
        boxShadow: hovered ? `0 4px 20px ${bg}` : "none",
      }}
    >
      {name}
    </motion.span>
  );
}

export function Overview({ repoCount }: { repoCount: number | null }) {
  const { theme } = useTheme();
  const d = theme === "dark";

  return (
    <div>
      <div className="pb-12">
        <div className="flex items-start gap-8 mb-8">
          <motion.div className="shrink-0" whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }}>
            <div
              className="w-32 h-32 rounded-2xl border-2 overflow-hidden relative group transition-colors"
              style={{ borderColor: d ? "#27272a" : "#e4e4e7", backgroundColor: d ? "#18181b" : "#f4f4f5" }}
            >
              <ImageWithFallback src="https://avatars.githubusercontent.com/mfarzz" alt="Muhammad Fariz" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </motion.div>

          <div className="flex-1 pt-1">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="font-mono text-[11px]" style={{ color: d ? "#71717a" : "#a1a1aa" }}>
                Open to opportunities · Padang, Indonesia
              </span>
            </div>
            <h1 className="text-[2.8rem] leading-[1.1] tracking-tight mb-1" style={{ fontWeight: 400, color: d ? "#fafafa" : "#18181b" }}>
              Muhammad <span style={{ fontWeight: 500 }}>Fariz</span>
            </h1>
            <div className="font-mono text-xs flex items-center gap-2" style={{ color: d ? "#71717a" : "#a1a1aa" }}>
              <span style={{ color: d ? "#3f3f46" : "#d4d4d8" }}>//</span> Developer & Data Analyst
            </div>
          </div>
        </div>

        <p className="text-sm max-w-[640px] mb-7" style={{ lineHeight: 1.8, color: d ? "#71717a" : "#71717a" }}>
          Information Systems student at Universitas Andalas (GPA 3.85) with hands-on experience building full-stack applications and data pipelines. Passionate about turning raw data into clear insights and shipping real-world software.
        </p>

        <div className="flex gap-3">
          <motion.a whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
            href="mailto:mfarix730@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-xs px-6 py-2.5 rounded-md transition-colors"
            style={{ backgroundColor: d ? "#fafafa" : "#18181b", color: d ? "#09090b" : "#fafafa" }}
          >
            <Mail size={14} /> Get in touch
          </motion.a>
          <motion.a whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
            href="https://github.com/mfarzz" target="_blank"
            className="inline-flex items-center gap-2 font-mono text-xs px-6 py-2.5 rounded-md border transition-colors"
            style={{ borderColor: d ? "#3f3f46" : "#d4d4d8", color: d ? "#71717a" : "#a1a1aa" }}
          >
            <Github size={14} /> GitHub
          </motion.a>
        </div>
      </div>

      <Divider label="Stats" />
      <div className="grid grid-cols-3 border rounded-xl overflow-hidden mb-12 transition-colors" style={{ borderColor: d ? "#27272a" : "#e4e4e7" }}>
        {[
          { num: "3.85", lbl: "GPA · Universitas Andalas" },
          { num: repoCount !== null ? String(repoCount) : "—", lbl: "Public Repositories" },
          { num: "2+", lbl: "Years Experience" },
        ].map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: d ? "rgba(24,24,27,0.8)" : "rgba(244,244,245,0.8)" }}
            className="p-6 transition-colors"
            style={{ borderRight: i < 2 ? `1px solid ${d ? "#27272a" : "#e4e4e7"}` : undefined }}
          >
            <div className="text-2xl tracking-tight" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>{s.num}</div>
            <div className="text-[11px] mt-1" style={{ color: d ? "#71717a" : "#a1a1aa" }}>{s.lbl}</div>
          </motion.div>
        ))}
      </div>

      <Divider label="Tech Stack" />
      <div className="flex flex-wrap gap-2">
        {techStack.map((t) => <TechPill key={t} name={t} />)}
      </div>
    </div>
  );
}
