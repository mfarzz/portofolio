export const profile = {
  firstName: "Muhammad",
  lastName: "Fariz",
  displayName: "Muhammad Fariz",
  username: "mfarzz",
  siteLabel: "mfarzz.dev",
  role: "Developer & Data Analyst",
  status: "Open to opportunities - Padang, Indonesia",
  summary:
    "Information Systems student at Universitas Andalas (GPA 3.85) with hands-on experience building full-stack applications and data pipelines. Passionate about turning raw data into clear insights and shipping real-world software.",
  avatarUrl: "https://avatars.githubusercontent.com/mfarzz",
  email: "mfarix730@gmail.com",
  githubUrl: "https://github.com/mfarzz",
  githubUsername: "mfarzz",
  gpa: "3.85",
  university: "Universitas Andalas",
  yearsExperience: "2+",
};

export const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Repos", href: "#repositories" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const pageSections = navItems.map((item) => item.href.slice(1));

export const techStack = [
  "Python", "React.js", "Express.js", "Next.js", "Flutter",
  "PostgreSQL", "TensorFlow", "scikit-learn", "Power BI", "Laravel", "Flask", "Pentaho",
];

export const workExperiences = [
  {
    role: "Data Analyst",
    org: "Career Development Center - Universitas Andalas",
    period: "Sep 2024 - Present",
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
    period: "Jan - Feb 2025",
    points: [
      "Developed a web-based system for managing internship data and internal resources",
      "Built full-stack application using Express.js, React.js, and PostgreSQL",
    ],
    chips: ["Express.js", "React.js", "PostgreSQL"],
  },
  {
    role: "Assistant Coordinator - Lab Rekayasa Data & BI",
    org: "Universitas Andalas",
    period: "Aug 2024 - Feb 2026",
    points: [
      "Coordinated lab sessions for Data Mining and Database Systems courses",
      "Prepared datasets and assisted in evaluation for quality consistency",
    ],
    chips: ["Data Mining", "Database", "Teaching"],
  },
];

export const organizationExperience = {
  role: "Coordinator, Programming Division",
  org: "UKM Neo Telemetri - Universitas Andalas",
  period: "Feb - Dec 2025",
  points: [
    "Led full-stack development of Portal Teknologi Pertanian dan Biosistem and Website Firetech, both live and actively used",
    "Managed end-to-end delivery of Excamotion mobile app as Project Manager",
    "Mentored junior members in JavaScript, React, and Python",
  ],
  chips: ["React.js", "Flutter", "Project Management", "Mentoring"],
};

export const certifications = [
  {
    name: "Bangkit Academy 2024 Graduate - Machine Learning Path",
    issuer: "Google - Bangkit Academy - 2024",
    icon: "award",
  },
  {
    name: "IT Internship Certificate",
    issuer: "Badan Pusat Statistik Sumatera Barat - 2025",
    icon: "monitor",
  },
] as const;

export const projects = [
  {
    title: "Portal Teknologi Pertanian & Biosistem",
    description:
      "Platform web untuk menampilkan informasi teknologi pertanian dan biosistem. Dibangun dengan React.js dan Express.js, sudah live dan digunakan secara aktif.",
    image: "/portaltpb.png",
    tech: ["Laravel", "MySQL"],
    github: "https://github.com/Neotelemetri-2024/projectTPB",
    live: "https://portal.tpbunand.com/login",
  },
  {
    title: "RunUp Multi-platform App",
    description:
      "Aplikasi android dan ios yang dikembangkan menggunakan flutter untuk melakukan tracking aktifitas jalan, jogging, dan bersepeda",
    image: "/runup.png",
    tech: ["Flutter", "Express.Js", "Firebase"],
    github: "https://github.com/mfarzz/runup",
    isMobile: true,
  },
  {
    title: "Excamotion Mobile App",
    description:
      "Aplikasi mobile yang dikembangkan dengan Kotlin. Dikelola sebagai Project Manager dengan delivery end-to-end dari konsep hingga rilis.",
    image: "/excamotion.png",
    tech: ["Kotlin", "Android Studio"],
    github: "https://github.com/Neotelemetri-2024/ExcaMotion",
    live: null,
    isMobile: true,
  },
  {
    title: "Health Emergency Operation Center Kabupaten Agam",
    description:
      "Sistem web untuk mengelola data relawan dan logistik saat terjadi bencana alam di Kabupaten Agam 2025.",
    image: "/heoc.png",
    tech: ["Laravel", "MySQL"],
    github: "https://github.com/mfarzz/pkdmt_agam",
    live: "https://pkdmt.neotelemetri.id/",
  },
];

export const skillSections = [
  {
    title: "Machine Learning & Data",
    groups: [
      { category: "Libraries", pills: ["scikit-learn", "TensorFlow", "Pandas", "NumPy"] },
      { category: "Visualization", pills: ["Power BI", "Matplotlib", "Seaborn"] },
      { category: "Techniques", pills: ["Data Mining", "Business Intelligence", "Machine Learning"] },
      { category: "Languages", pills: ["Python"] },
    ],
  },
  {
    title: "Web & Mobile",
    groups: [
      { category: "Frontend", pills: ["React.js", "Next.js"] },
      { category: "Backend", pills: ["Express.js", "Laravel", "Flask"] },
      { category: "Database", pills: ["PostgreSQL", "MySQL"] },
      { category: "Mobile", pills: ["Flutter", "Dart"] },
    ],
  },
  {
    title: "Tools & Platforms",
    groups: [
      { category: "Version Control", pills: ["Git", "GitHub"] },
      { category: "Data Tools", pills: ["Pentaho", "Excel", "Google Sheets"] },
    ],
  },
];

export const contacts = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
    hoverBg: "rgba(239,68,68,0.08)",
    hoverBorder: "rgba(239,68,68,0.35)",
    hoverIcon: "#ef4444",
    hoverGlow: "rgba(239,68,68,0.1)",
  },
  {
    label: "GitHub",
    value: "github.com/mfarzz",
    href: profile.githubUrl,
    icon: "github",
    hoverBg: "rgba(168,85,247,0.08)",
    hoverBorder: "rgba(168,85,247,0.35)",
    hoverIcon: "#a855f7",
    hoverGlow: "rgba(168,85,247,0.1)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mfarizz",
    href: "https://www.linkedin.com/in/mfarizz",
    icon: "linkedin",
    hoverBg: "rgba(59,130,246,0.08)",
    hoverBorder: "rgba(59,130,246,0.35)",
    hoverIcon: "#3b82f6",
    hoverGlow: "rgba(59,130,246,0.1)",
  },
  {
    label: "Phone",
    value: "0895-6233-78313",
    href: "tel:0895623378313",
    icon: "phone",
    hoverBg: "rgba(34,197,94,0.08)",
    hoverBorder: "rgba(34,197,94,0.35)",
    hoverIcon: "#22c55e",
    hoverGlow: "rgba(34,197,94,0.1)",
  },
] as const;

export const floatingProfileLinks = [
  { href: `mailto:${profile.email}`, icon: "mail", external: false },
  { href: profile.githubUrl, icon: "github", external: true },
] as const;

export const githubRepoConfig = {
  username: profile.githubUsername,
  perPage: 8,
};

export const githubLanguageColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "Jupyter Notebook": "#DA5B0B",
  Dart: "#00B4AB",
  Java: "#b07219",
  Shell: "#89e051",
  R: "#198CE7",
};
