import { useState } from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Divider } from "./Divider";
import { useTheme } from "./ThemeContext";

const contacts = [
  {
    label: "Email", value: "mfarix730@gmail.com", href: "mailto:mfarix730@gmail.com", icon: Mail,
    hoverBg: "rgba(239,68,68,0.08)", hoverBorder: "rgba(239,68,68,0.35)", hoverIcon: "#ef4444", hoverGlow: "rgba(239,68,68,0.1)",
  },
  {
    label: "GitHub", value: "github.com/mfarzz", href: "https://github.com/mfarzz", icon: Github,
    hoverBg: "rgba(168,85,247,0.08)", hoverBorder: "rgba(168,85,247,0.35)", hoverIcon: "#a855f7", hoverGlow: "rgba(168,85,247,0.1)",
  },
  {
    label: "LinkedIn", value: "linkedin.com/in/mfarizz", href: "https://www.linkedin.com/in/mfarizz", icon: Linkedin,
    hoverBg: "rgba(59,130,246,0.08)", hoverBorder: "rgba(59,130,246,0.35)", hoverIcon: "#3b82f6", hoverGlow: "rgba(59,130,246,0.1)",
  },
  {
    label: "Phone", value: "0895-6233-78313", href: "tel:0895623378313", icon: Phone,
    hoverBg: "rgba(34,197,94,0.08)", hoverBorder: "rgba(34,197,94,0.35)", hoverIcon: "#22c55e", hoverGlow: "rgba(34,197,94,0.1)",
  },
];

function ContactCard({ c, index }: { c: typeof contacts[0]; index: number }) {
  const { theme } = useTheme();
  const d = theme === "dark";
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={c.href}
      target={c.label !== "Email" && c.label !== "Phone" ? "_blank" : undefined}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.02 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 border rounded-xl p-5 transition-all duration-300 group"
      style={{
        backgroundColor: hovered ? c.hoverBg : (d ? "#111114" : "#ffffff"),
        borderColor: hovered ? c.hoverBorder : (d ? "#27272a" : "#e4e4e7"),
        boxShadow: hovered ? `0 8px 30px ${c.hoverGlow}` : "none",
      }}
    >
      <motion.div
        animate={{ rotate: hovered ? 8 : 0 }}
        className="w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300"
        style={{
          backgroundColor: hovered ? c.hoverBg : (d ? "#18181b" : "#f4f4f5"),
          borderColor: hovered ? c.hoverBorder : (d ? "#27272a" : "#e4e4e7"),
          color: hovered ? c.hoverIcon : (d ? "#71717a" : "#a1a1aa"),
        }}
      >
        <c.icon size={16} />
      </motion.div>
      <div>
        <div className="font-mono text-[10px] mb-0.5 transition-colors duration-300"
          style={{ color: hovered ? c.hoverIcon : (d ? "#3f3f46" : "#d4d4d8") }}
        >{c.label}</div>
        <div className="text-xs transition-colors duration-300" style={{ color: d ? "#fafafa" : "#18181b" }}>{c.value}</div>
      </div>
    </motion.a>
  );
}

export function Contact() {
  return (
    <div>
      <Divider label="Get In Touch" />
      <div className="grid grid-cols-2 gap-3">
        {contacts.map((c, i) => <ContactCard key={c.label} c={c} index={i} />)}
      </div>
    </div>
  );
}
