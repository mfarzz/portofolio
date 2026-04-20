import { useState } from "react";
import { Award, Monitor } from "lucide-react";
import { motion } from "motion/react";
import { Divider } from "./Divider";
import { useTheme } from "./ThemeContext";
import { getTechColor } from "./techColors";

const workExperience = [
  {
    role: "Data Analyst",
    org: "Career Development Center · Universitas Andalas",
    period: "Sep 2024 – Present",
    points: [
      "Managed and maintained master alumni database for tracer study and KPI (IKU) reporting",
      "Cleaned and processed alumni data using Excel, Google Sheets, and Python",
      "Produced data-driven reports for institutional performance evaluation",
    ],
    chips: ["Python", "Excel", "Google Sheets", "Data Analysis"],
  },
  {
    role: "IT Intern",
    org: "Badan Pusat Statistik Sumatera Barat",
    period: "Jan – Feb 2025",
    points: [
      "Developed a web-based system for managing internship data and internal resources",
      "Built full-stack application using Express.js, React.js, and PostgreSQL",
    ],
    chips: ["Express.js", "React.js", "PostgreSQL"],
  },
  {
    role: "Assistant Coordinator · Lab Rekayasa Data & BI",
    org: "Universitas Andalas",
    period: "Aug 2024 – Feb 2026",
    points: [
      "Coordinated lab sessions for Data Mining and Database Systems courses",
      "Prepared datasets and assisted in evaluation for quality consistency",
    ],
    chips: ["Data Mining", "Database", "Teaching"],
  },
];

const organization = {
  role: "Coordinator, Programming Division",
  org: "UKM Neo Telemetri · Universitas Andalas",
  period: "Feb – Dec 2025",
  points: [
    "Led full-stack development of Portal Teknologi Pertanian dan Biosistem and Website Firetech, both live and actively used",
    "Managed end-to-end delivery of Excamotion mobile app as Project Manager",
    "Mentored junior members in JavaScript, React, and Python",
  ],
  chips: ["React.js", "Flutter", "Project Management", "Mentoring"],
};

const certs = [
  { name: "Bangkit Academy 2024 Graduate – Machine Learning Path", issuer: "Google · Bangkit Academy · 2024", icon: Award },
  { name: "IT Internship Certificate", issuer: "Badan Pusat Statistik Sumatera Barat · 2025", icon: Monitor },
];

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
        color: hovered ? text : (d ? "#3f3f46" : "#d4d4d8"),
      }}
    >
      {name}
    </span>
  );
}

function ExpRow({ exp, index }: { exp: typeof workExperience[0]; index: number }) {
  const { theme } = useTheme();
  const d = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ backgroundColor: d ? "rgba(24,24,27,0.5)" : "rgba(244,244,245,0.5)" }}
      className="py-5 px-4 -mx-4 rounded-xl border-b last:border-b-0 grid grid-cols-[1fr_auto] gap-4 transition-colors"
      style={{ borderColor: d ? "#27272a" : "#e4e4e7" }}
    >
      <div>
        <div className="text-sm mb-0.5" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>{exp.role}</div>
        <div className="text-xs mb-2.5" style={{ color: d ? "#71717a" : "#a1a1aa" }}>{exp.org}</div>
        <div className="flex flex-col gap-1 mb-2.5">
          {exp.points.map((p, i) => (
            <div key={i} className="text-xs pl-3.5 relative" style={{ lineHeight: 1.65, color: d ? "#71717a" : "#a1a1aa" }}>
              <span className="absolute left-0.5 top-[9px] w-1 h-px" style={{ backgroundColor: d ? "#3f3f46" : "#d4d4d8" }} />
              {p}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {exp.chips.map((c) => <ChipColored key={c} name={c} />)}
        </div>
      </div>
      <div className="font-mono text-[10px] whitespace-nowrap pt-0.5 text-right" style={{ color: d ? "#3f3f46" : "#d4d4d8" }}>{exp.period}</div>
    </motion.div>
  );
}

export function Experience() {
  const { theme } = useTheme();
  const d = theme === "dark";

  return (
    <div>
      <Divider label="Work Experience" />
      <div>{workExperience.map((exp, i) => <ExpRow key={i} exp={exp} index={i} />)}</div>

      <div className="mt-12">
        <Divider label="Organization" />
        <ExpRow exp={organization} index={0} />
      </div>

      <div className="mt-12">
        <Divider label="Certifications" />
        <div className="flex flex-col gap-3">
          {certs.map((c, i) => (
            <motion.div
              key={i}
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
                style={{ borderColor: d ? "#3f3f46" : "#d4d4d8", backgroundColor: d ? "#18181b" : "#f4f4f5", color: d ? "#71717a" : "#a1a1aa" }}
              >
                <c.icon size={17} />
              </motion.div>
              <div>
                <div className="text-[13px]" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>{c.name}</div>
                <div className="font-mono text-[11px]" style={{ color: d ? "#71717a" : "#a1a1aa" }}>{c.issuer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
