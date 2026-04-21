const CONFETTI_PIECES = [
  { left: "8%",   top: "15%", width: 6,  height: 10, color: "#f87171", rotate: "20deg" },
  { left: "18%",  top: "5%",  width: 8,  height: 8,  color: "#fb923c", rotate: "-15deg" },
  { left: "28%",  top: "20%", width: 5,  height: 12, color: "#facc15", rotate: "40deg" },
  { left: "42%",  top: "8%",  width: 7,  height: 7,  color: "#4ade80", rotate: "-30deg" },
  { left: "58%",  top: "18%", width: 9,  height: 6,  color: "#60a5fa", rotate: "10deg" },
  { left: "68%",  top: "5%",  width: 6,  height: 10, color: "#a78bfa", rotate: "-45deg" },
  { left: "78%",  top: "20%", width: 8,  height: 8,  color: "#f472b6", rotate: "25deg" },
  { left: "88%",  top: "10%", width: 5,  height: 11, color: "#34d399", rotate: "-20deg" },
  { left: "12%",  top: "60%", width: 7,  height: 7,  color: "#fbbf24", rotate: "35deg" },
  { left: "75%",  top: "65%", width: 6,  height: 9,  color: "#f87171", rotate: "-10deg" },
];

export default function ConfettiHeader() {
  return (
    <div
      className="relative flex items-center justify-center py-3 px-4 rounded-t-2xl overflow-hidden"
      style={{ background: "var(--confetti-bg)" }}
    >
      {CONFETTI_PIECES.map((piece, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: piece.left,
            top: piece.top,
            width: piece.width,
            height: piece.height,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotate})`,
          }}
        />
      ))}
      <span
        className="relative z-10 text-sm font-semibold tracking-wide"
        style={{ color: "var(--confetti-text)" }}
      >
        Your Submission
      </span>
    </div>
  );
}
