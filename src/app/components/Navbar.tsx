import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className="sticky top-0 z-[60] border-b backdrop-blur-xl transition-colors duration-500"
        style={{
          borderColor: d ? "#27272a" : "#e4e4e7",
          backgroundColor: d ? "rgba(9,9,11,0.85)" : "rgba(250,250,250,0.85)",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between gap-4">
          <a href="#overview" className="font-mono text-sm shrink-0" style={{ color: d ? "#71717a" : "#a1a1aa" }}>
            <span style={{ color: d ? "#fafafa" : "#18181b" }}>mfarzz</span>.dev
          </a>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Desktop Tabs */}
            <div className="hidden sm:flex items-center gap-1">
              {tabs.map((tab) => {
                const isActive = activeSection === tab.href.slice(1);
                return (
                  <a
                    key={tab.href}
                    href={tab.href}
                    className="relative px-3.5 py-1.5 text-[13px] rounded-md transition-colors shrink-0"
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
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors cursor-pointer shrink-0"
              style={{
                borderColor: d ? "#27272a" : "#e4e4e7",
                backgroundColor: d ? "#18181b" : "#f4f4f5",
                color: d ? "#71717a" : "#a1a1aa",
              }}
            >
              {d ? <Sun size={14} /> : <Moon size={14} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden w-8 h-8 rounded-lg border flex items-center justify-center transition-colors cursor-pointer shrink-0"
              style={{
                borderColor: d ? "#27272a" : "#e4e4e7",
                backgroundColor: d ? "#18181b" : "#f4f4f5",
                color: d ? "#71717a" : "#a1a1aa",
              }}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 pt-20 px-6 sm:hidden backdrop-blur-2xl"
            style={{
              backgroundColor: d ? "rgba(9,9,11,0.95)" : "rgba(255,255,255,0.95)",
            }}
          >
            <div className="flex flex-col gap-4">
              {tabs.map((tab, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={tab.href}
                  href={tab.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium tracking-tight py-2 border-b"
                  style={{
                    color: activeSection === tab.href.slice(1) ? (d ? "#fafafa" : "#18181b") : (d ? "#71717a" : "#a1a1aa"),
                    borderColor: d ? "rgba(39,39,42,0.5)" : "rgba(228,228,231,0.5)",
                  }}
                >
                  {tab.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
