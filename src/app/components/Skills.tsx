import { useState } from "react";
import { motion } from "motion/react";
import { Divider } from "./Divider";
import { useTheme } from "./ThemeContext";
import { getTechColor } from "./techColors";
import { skillSections } from "../data/portfolio";

function SkillPill({ name }: { name: string }) {
  const { theme } = useTheme();
  const d = theme === "dark";
  const [hovered, setHovered] = useState(false);
  const [bg, border, text] = getTechColor(name);

  return (
    <motion.span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08, y: -2 }}
      className="text-xs px-3.5 py-1.5 rounded-md cursor-default transition-all duration-300 border"
      style={{
        backgroundColor: hovered ? bg : "transparent",
        borderColor: hovered ? border : (d ? "#27272a" : "#e4e4e7"),
        color: hovered ? text : (d ? "#71717a" : "#a1a1aa"),
        boxShadow: hovered ? `0 4px 20px ${bg}` : "none",
      }}
    >
      {name}
    </motion.span>
  );
}

export function Skills() {
  const { theme } = useTheme();
  const d = theme === "dark";

  return (
    <div>
      {skillSections.map((section, si) => (
        <div key={si} className={si > 0 ? "mt-12" : ""}>
          <Divider label={section.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {section.groups.map((g, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: j * 0.08 }}
              >
                <div className="font-mono text-[10px] tracking-wider uppercase mb-3" style={{ color: d ? "#71717a" : "#a1a1aa" }}>{g.category}</div>
                <div className="flex flex-wrap gap-2">
                  {g.pills.map((p) => <SkillPill key={p} name={p} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
