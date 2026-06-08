import { useState } from "react";
import { Award, Monitor } from "lucide-react";
import { motion } from "motion/react";
import { Divider } from "./Divider";
import { useTheme } from "./ThemeContext";
import { getTechColor } from "./techColors";
import { certifications, organizationExperience, workExperiences } from "../data/portfolio";

const certificationIcons = {
  award: Award,
  monitor: Monitor,
};

function ChipColored({ name }: { name: string }) {
  const { theme } = useTheme();
  const d = theme === "dark";
  const [hovered, setHovered] = useState(false);
  const [bg, border, text] = getTechColor(name);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="font-mono text-[10px] px-2 py-0.5 rounded-sm cursor-default transition-all duration-300 border"
      style={{
        backgroundColor: hovered ? bg : "transparent",
        borderColor: hovered ? border : (d ? "#27272a" : "#e4e4e7"),
        color: hovered ? text : (d ? "#a1a1aa" : "#71717a"),
      }}
    >
      {name}
    </span>
  );
}

function ExpRow({ exp, index }: { exp: typeof workExperiences[number]; index: number }) {
  const { theme } = useTheme();
  const d = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ backgroundColor: d ? "rgba(24,24,27,0.5)" : "rgba(244,244,245,0.5)" }}
      className="py-5 px-4 -mx-4 rounded-xl border-b last:border-b-0 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 sm:gap-4 transition-colors"
      style={{ borderColor: d ? "#27272a" : "#e4e4e7" }}
    >
      <div className="min-w-0">
        <div className="text-sm mb-0.5" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>{exp.role}</div>
        <div className="text-xs mb-2.5" style={{ color: d ? "#a1a1aa" : "#71717a" }}>{exp.org}</div>
        <div className="flex flex-col gap-1 mb-2.5">
          {exp.points.map((p, i) => (
            <div key={i} className="text-xs pl-3.5 relative" style={{ lineHeight: 1.65, color: d ? "#a1a1aa" : "#71717a" }}>
              <span className="absolute left-0.5 top-[9px] w-1 h-px" style={{ backgroundColor: d ? "#71717a" : "#d4d4d8" }} />
              {p}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {exp.chips.map((c) => <ChipColored key={c} name={c} />)}
        </div>
      </div>
      <div className="font-mono text-[10px] whitespace-nowrap pt-0.5 text-left sm:text-right" style={{ color: d ? "#71717a" : "#a1a1aa" }}>{exp.period}</div>
    </motion.div>
  );
}

export function Experience() {
  const { theme } = useTheme();
  const d = theme === "dark";

  return (
    <div>
      <Divider label="Work Experience" />
      <div>{workExperiences.map((exp, i) => <ExpRow key={i} exp={exp} index={i} />)}</div>

      <div className="mt-12">
        <Divider label="Organization" />
        <ExpRow exp={organizationExperience} index={0} />
      </div>

      <div className="mt-12">
        <Divider label="Certifications" />
        <div className="flex flex-col gap-3">
          {certifications.map((c, i) => {
            const Icon = certificationIcons[c.icon];

            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.01, borderColor: d ? "#3f3f46" : "#d4d4d8" }}
                className="flex items-center gap-4 border rounded-xl p-5 transition-colors"
                style={{ backgroundColor: d ? "#111114" : "#ffffff", borderColor: d ? "#27272a" : "#e4e4e7" }}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-11 h-11 rounded-lg border flex items-center justify-center shrink-0"
                  style={{ borderColor: d ? "#3f3f46" : "#d4d4d8", backgroundColor: d ? "#18181b" : "#f4f4f5", color: d ? "#a1a1aa" : "#71717a" }}
                >
                  <Icon size={17} />
                </motion.div>
                <div className="min-w-0">
                  <div className="text-[13px]" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>{c.name}</div>
                  <div className="font-mono text-[11px]" style={{ color: d ? "#a1a1aa" : "#71717a" }}>{c.issuer}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
