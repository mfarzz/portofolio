import { useTheme } from "./ThemeContext";

export function Divider({ label }: { label: string }) {
  const { theme } = useTheme();
  const d = theme === "dark";
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="font-mono text-[10px] tracking-widest uppercase whitespace-nowrap"
        style={{ color: d ? "#71717a" : "#a1a1aa" }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: d ? "#27272a" : "#e4e4e7" }} />
    </div>
  );
}
