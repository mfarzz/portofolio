import { useState } from "react";
import { Mail, Github } from "lucide-react";
import { motion } from "motion/react";
import { Divider } from "./Divider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";
import { getTechColor } from "./techColors";
import { profile, techStack } from "../data/portfolio";

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
        color: hovered ? text : (d ? "#a1a1aa" : "#71717a"),
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
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-8">
          <motion.div className="shrink-0" whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }}>
            <div
              className="w-32 h-32 rounded-2xl border-2 overflow-hidden relative group transition-colors"
              style={{ borderColor: d ? "#27272a" : "#e4e4e7", backgroundColor: d ? "#18181b" : "#f4f4f5" }}
            >
              <ImageWithFallback src={profile.avatarUrl} alt={profile.displayName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </motion.div>

          <div className="flex-1 pt-1 flex flex-col items-center sm:items-start min-w-0">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-3 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
              <span className="font-mono text-[10px] sm:text-[11px] text-center sm:text-left break-words" style={{ color: d ? "#a1a1aa" : "#71717a" }}>
                {profile.status}
              </span>
            </div>
            <h1 className="text-[2.05rem] min-[380px]:text-[2.2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight mb-1 text-center sm:text-left max-w-full" style={{ fontWeight: 400, color: d ? "#fafafa" : "#18181b" }}>
              {profile.firstName} <span style={{ fontWeight: 500 }}>{profile.lastName}</span>
            </h1>
            <div className="font-mono text-xs flex items-center gap-2" style={{ color: d ? "#a1a1aa" : "#71717a" }}>
              <span style={{ color: d ? "#71717a" : "#d4d4d8" }}>//</span> {profile.role}
            </div>
          </div>
        </div>

        <p className="text-sm max-w-[640px] mb-7 text-center sm:text-left" style={{ lineHeight: 1.8, color: d ? "#a1a1aa" : "#71717a" }}>
          {profile.summary}
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
          <motion.a whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-mono text-xs px-6 py-2.5 rounded-md transition-colors"
            style={{ backgroundColor: d ? "#fafafa" : "#18181b", color: d ? "#09090b" : "#fafafa" }}
          >
            <Mail size={14} /> Get in touch
          </motion.a>
          <motion.a whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
            href={profile.githubUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs px-6 py-2.5 rounded-md border transition-colors"
            style={{ borderColor: d ? "#3f3f46" : "#d4d4d8", color: d ? "#a1a1aa" : "#71717a" }}
          >
            <Github size={14} /> GitHub
          </motion.a>
        </div>
      </div>

      <Divider label="Stats" />
      <div className="grid grid-cols-1 sm:grid-cols-3 border rounded-xl overflow-hidden mb-12 transition-colors" style={{ borderColor: d ? "#27272a" : "#e4e4e7" }}>
        {[
          { num: profile.gpa, lbl: `GPA - ${profile.university}` },
          { num: repoCount !== null ? String(repoCount) : "-", lbl: "Public Repositories" },
          { num: profile.yearsExperience, lbl: "Years Experience" },
        ].map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: d ? "rgba(24,24,27,0.8)" : "rgba(244,244,245,0.8)" }}
            className={`p-6 transition-colors border-b sm:border-b-0 sm:border-r ${i === 2 ? "border-b-0 sm:border-r-0" : ""}`}
            style={{
              borderColor: d ? "#27272a" : "#e4e4e7"
            }}
          >
            <div className="text-2xl tracking-tight" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>{s.num}</div>
            <div className="text-[11px] mt-1" style={{ color: d ? "#a1a1aa" : "#71717a" }}>{s.lbl}</div>
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
