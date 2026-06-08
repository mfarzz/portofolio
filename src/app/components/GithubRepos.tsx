import { useState, useEffect } from "react";
import { Star, GitFork, ArrowUpRight, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { Divider } from "./Divider";
import { useTheme } from "./ThemeContext";
import { githubLanguageColors, githubRepoConfig } from "../data/portfolio";

interface Repo {
  id: number; name: string; html_url: string; description: string | null;
  language: string | null; stargazers_count: number; forks_count: number;
  updated_at: string; fork: boolean;
}

export function GithubRepos() {
  const { theme } = useTheme();
  const d = theme === "dark";
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubRepoConfig.username}/repos?sort=updated&per_page=${githubRepoConfig.perPage}`)
      .then((r) => { if (!r.ok) throw new Error("GitHub API " + r.status); return r.json(); })
      .then((data) => setRepos(data.filter((r: Repo) => !r.fork).slice(0, 8)))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Divider label="GitHub Repositories" />
      {loading ? (
        <div className="flex items-center justify-center py-16" style={{ color: d ? "#a1a1aa" : "#71717a" }}>
          <Loader2 size={20} className="animate-spin mr-2" /> Loading repositories...
        </div>
      ) : error ? (
        <div className="text-center py-16 font-mono text-xs" style={{ color: d ? "#a1a1aa" : "#71717a" }}>Could not load repositories - {error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {repos.map((r, i) => {
            const lang = r.language || "Code";
            const color = githubLanguageColors[lang] || "#71717a";
            return (
              <motion.a
                key={r.id} href={r.html_url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group border rounded-xl p-5 block transition-all hover:shadow-lg"
                style={{ backgroundColor: d ? "#111114" : "#ffffff", borderColor: d ? "#27272a" : "#e4e4e7" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 font-mono text-[10px]" style={{ color: d ? "#a1a1aa" : "#71717a" }}>
                    <span className="w-[7px] h-[7px] rounded-full" style={{ background: color }} />
                    {lang}
                  </div>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" style={{ color: d ? "#71717a" : "#d4d4d8" }} />
                </div>
                <div className="text-[13px] mb-1 truncate" style={{ fontWeight: 500, color: d ? "#fafafa" : "#18181b" }}>{r.name}</div>
                <div className="text-[11px] leading-relaxed line-clamp-2 mb-3 min-h-[34px]" style={{ color: d ? "#a1a1aa" : "#71717a" }}>
                  {r.description || "No description provided."}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] flex items-center gap-1" style={{ color: d ? "#71717a" : "#a1a1aa" }}>
                    <Star size={11} /> {r.stargazers_count}
                  </span>
                  <span className="font-mono text-[10px] flex items-center gap-1" style={{ color: d ? "#71717a" : "#a1a1aa" }}>
                    <GitFork size={11} /> {r.forks_count}
                  </span>
                  <span className="ml-auto font-mono text-[10px]" style={{ color: d ? "#71717a" : "#a1a1aa" }}>
                    {new Date(r.updated_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      )}
    </div>
  );
}
