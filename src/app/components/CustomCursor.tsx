import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";

export function CustomCursor() {
  const { theme } = useTheme();
  const d = theme === "dark";
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer"));
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const loop = () => {
      setPos((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.15,
        y: prev.y + (targetRef.current.y - prev.y) * 0.15,
      }));
      rafRef.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  if (!visible) return null;

  const ringColor = hovering
    ? "rgba(34,197,94,0.5)"
    : d ? "rgba(250,250,250,0.2)" : "rgba(24,24,27,0.2)";
  const dotColor = d ? "#fafafa" : "#18181b";

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
        animate={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          x: pos.x - (hovering ? 24 : 16),
          y: pos.y - (hovering ? 24 : 16),
          scale: clicking ? 0.8 : 1,
          borderColor: ringColor,
        }}
        transition={{ type: "tween", duration: 0.08 }}
        style={{ mixBlendMode: "difference" }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          width: hovering ? 6 : 4,
          height: hovering ? 6 : 4,
          x: pos.x - (hovering ? 3 : 2),
          y: pos.y - (hovering ? 3 : 2),
          scale: clicking ? 1.5 : 1,
          backgroundColor: dotColor,
        }}
        transition={{ type: "tween", duration: 0.05 }}
      />
    </>
  );
}
