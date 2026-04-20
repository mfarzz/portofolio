import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Github } from "lucide-react";
import { useTheme } from "./ThemeContext";

export function FloatingProfile() {
  const { theme } = useTheme();
  const d = theme === "dark";
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cardBg = d ? "rgba(17,17,20,0.9)" : "rgba(255,255,255,0.9)";
  const borderC = d ? "#27272a" : "#e4e4e7";
  const btnBg = d ? "#18181b" : "#f4f4f5";
  const iconC = d ? "#71717a" : "#a1a1aa";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.9 }}
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex"
        >
          <div className="flex flex-col items-center gap-3 backdrop-blur-xl border rounded-2xl p-4 shadow-2xl transition-colors duration-500"
            style={{ backgroundColor: cardBg, borderColor: borderC, boxShadow: d ? "0 25px 50px rgba(0,0,0,0.4)" : "0 25px 50px rgba(0,0,0,0.1)" }}
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden border relative transition-colors" style={{ borderColor: borderC, backgroundColor: btnBg }}>
              <ImageWithFallback src="https://avatars.githubusercontent.com/mfarzz" alt="Muhammad Fariz" className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <div className="text-[11px]" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>Fariz</div>
              <div className="font-mono text-[9px]" style={{ color: d ? "#3f3f46" : "#d4d4d8" }}>Dev</div>
            </div>
            <div className="w-6 h-px" style={{ backgroundColor: borderC }} />
            <div className="flex flex-col gap-2">
              {[
                { href: "mailto:mfarix730@gmail.com", icon: Mail },
                { href: "https://github.com/mfarzz", icon: Github },
              ].map((link, i) => (
                <a key={i} href={link.href} target={i === 1 ? "_blank" : undefined}
                  className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: btnBg, borderColor: borderC, color: iconC }}
                ><link.icon size={13} /></a>
              ))}
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all cursor-pointer hover:scale-110"
              style={{ backgroundColor: btnBg, borderColor: borderC, color: d ? "#3f3f46" : "#d4d4d8" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6" /></svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
