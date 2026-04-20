import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Repos", href: "#repositories" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ activeSection }: { activeSection: string }) {
  const { theme, toggle } = useTheme();
  const d = theme === "dark";

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500"
      style={{
        borderColor: d ? "#27272a" : "#e4e4e7",
        backgroundColor: d ? "rgba(9,9,11,0.85)" : "rgba(250,250,250,0.85)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-8 h-14 flex items-center justify-between">
        <a href="#overview" className="font-mono text-sm" style={{ color: d ? "#71717a" : "#a1a1aa" }}>
          <span style={{ color: d ? "#fafafa" : "#18181b" }}>mfarzz</span>.dev
        </a>
        <div className="flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeSection === tab.href.slice(1);
            return (
              <a
                key={tab.href}
                href={tab.href}
                className="relative px-3.5 py-1.5 text-[13px] rounded-md transition-colors"
                style={{ color: isActive ? (d ? "#fafafa" : "#18181b") : (d ? "#71717a" : "#a1a1aa") }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-md border"
                    style={{
                      backgroundColor: d ? "#18181b" : "#f4f4f5",
                      borderColor: d ? "#27272a" : "#e4e4e7",
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </a>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="ml-3 w-8 h-8 rounded-lg border flex items-center justify-center transition-colors cursor-pointer"
            style={{
              borderColor: d ? "#27272a" : "#e4e4e7",
              backgroundColor: d ? "#18181b" : "#f4f4f5",
              color: d ? "#71717a" : "#a1a1aa",
            }}
          >
            {d ? <Sun size={14} /> : <Moon size={14} />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
