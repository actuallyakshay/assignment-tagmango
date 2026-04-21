import { ChevronLeft, Info } from "lucide-react";

interface SubHeaderProps {
  currentDay: number;
  totalDays: number;
  challengeTitle: string;
}

export default function SubHeader({
  currentDay,
  totalDays,
  challengeTitle,
}: SubHeaderProps) {
  return (
    <div
      className="flex items-center justify-between px-4 md:px-6 h-[52px] shrink-0"
      style={{
        background: "var(--bg-panel)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {/* Left: Back + Day info */}
      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-70"
          style={{ color: "var(--text-primary)" }}
          aria-label="Go back"
        >
          <ChevronLeft size={18} />
          <span className="hidden sm:inline">Back</span>
        </button>

        <div
          className="w-px h-6 shrink-0"
          style={{ background: "var(--border-subtle)" }}
        />

        <span
          className="text-sm md:text-base font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Day {currentDay} of {totalDays}
        </span>
      </div>

      {/* Right: Challenge title */}
      <div className="flex items-center gap-1.5">
        <span
          className="text-sm md:text-base font-semibold hidden sm:block"
          style={{ color: "var(--text-primary)" }}
        >
          {challengeTitle}
        </span>
        <button
          aria-label="Challenge info"
          className="transition-colors hover:opacity-70"
        >
          <Info size={18} style={{ color: "var(--text-secondary)" }} />
        </button>
      </div>
    </div>
  );
}
