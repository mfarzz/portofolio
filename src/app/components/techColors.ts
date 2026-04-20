// Hover color mappings for tech stack and skill pills
// Each returns [bgColor, borderColor, textColor]
const colorMap: Record<string, [string, string, string]> = {
  // Languages
  "Python": ["rgba(53,114,165,0.15)", "rgba(53,114,165,0.4)", "#5b9bd5"],
  "Dart": ["rgba(0,180,171,0.15)", "rgba(0,180,171,0.4)", "#00d4c8"],
  "R": ["rgba(25,140,231,0.12)", "rgba(25,140,231,0.35)", "#198CE7"],

  // Frontend
  "React.js": ["rgba(97,218,251,0.12)", "rgba(97,218,251,0.35)", "#61dafb"],
  "Next.js": ["rgba(250,250,250,0.08)", "rgba(250,250,250,0.25)", "#e4e4e7"],
  "Flutter": ["rgba(69,137,255,0.12)", "rgba(69,137,255,0.35)", "#4589ff"],

  // Backend
  "Express.js": ["rgba(104,159,56,0.12)", "rgba(104,159,56,0.35)", "#8bc34a"],
  "Laravel": ["rgba(255,45,32,0.1)", "rgba(255,45,32,0.3)", "#ff5252"],
  "Flask": ["rgba(250,250,250,0.06)", "rgba(250,250,250,0.2)", "#d4d4d8"],

  // Database
  "PostgreSQL": ["rgba(51,103,145,0.15)", "rgba(51,103,145,0.4)", "#5b9bd5"],
  "MySQL": ["rgba(0,136,204,0.12)", "rgba(0,136,204,0.35)", "#00acd7"],

  // ML & Data
  "TensorFlow": ["rgba(255,111,0,0.12)", "rgba(255,111,0,0.35)", "#ff8a50"],
  "scikit-learn": ["rgba(249,168,38,0.12)", "rgba(249,168,38,0.35)", "#f9a826"],
  "Pandas": ["rgba(21,0,137,0.15)", "rgba(130,100,255,0.35)", "#a78bfa"],
  "NumPy": ["rgba(77,171,207,0.12)", "rgba(77,171,207,0.35)", "#4dabcf"],
  "Power BI": ["rgba(242,186,22,0.12)", "rgba(242,186,22,0.35)", "#f2ba16"],
  "Matplotlib": ["rgba(31,119,180,0.12)", "rgba(31,119,180,0.35)", "#1f77b4"],
  "Seaborn": ["rgba(76,175,175,0.12)", "rgba(76,175,175,0.35)", "#4cafaf"],

  // Techniques
  "Data Mining": ["rgba(168,85,247,0.12)", "rgba(168,85,247,0.35)", "#a855f7"],
  "Business Intelligence": ["rgba(59,130,246,0.12)", "rgba(59,130,246,0.35)", "#3b82f6"],
  "Machine Learning": ["rgba(249,115,22,0.12)", "rgba(249,115,22,0.35)", "#f97316"],
  "Data Analysis": ["rgba(139,92,246,0.12)", "rgba(139,92,246,0.35)", "#8b5cf6"],

  // Tools
  "Git": ["rgba(240,80,50,0.12)", "rgba(240,80,50,0.35)", "#f05032"],
  "GitHub": ["rgba(250,250,250,0.06)", "rgba(250,250,250,0.2)", "#d4d4d8"],
  "Pentaho": ["rgba(0,128,128,0.12)", "rgba(0,128,128,0.35)", "#2dd4bf"],
  "Excel": ["rgba(33,115,70,0.12)", "rgba(33,115,70,0.35)", "#22c55e"],
  "Google Sheets": ["rgba(52,168,83,0.12)", "rgba(52,168,83,0.35)", "#34a853"],

  // Other
  "Firebase": ["rgba(255,196,0,0.12)", "rgba(255,196,0,0.35)", "#ffca28"],
  "Teaching": ["rgba(236,72,153,0.12)", "rgba(236,72,153,0.35)", "#ec4899"],
  "Project Management": ["rgba(99,102,241,0.12)", "rgba(99,102,241,0.35)", "#6366f1"],
  "Mentoring": ["rgba(20,184,166,0.12)", "rgba(20,184,166,0.35)", "#14b8a6"],
  "Database": ["rgba(59,130,246,0.12)", "rgba(59,130,246,0.35)", "#3b82f6"],
};

const defaultColor: [string, string, string] = ["rgba(113,113,122,0.1)", "rgba(113,113,122,0.3)", "#a1a1aa"];

export function getTechColor(name: string): [string, string, string] {
  return colorMap[name] || defaultColor;
}
