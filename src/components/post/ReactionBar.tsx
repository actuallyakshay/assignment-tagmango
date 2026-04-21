import { Smile, MessageCircle } from 'lucide-react';
import type { Reaction } from '@/lib/types';

interface ReactionBarProps {
  reactions: Reaction[];
  commentCount: number;
}

export default function ReactionBar({
  reactions,
  commentCount,
}: ReactionBarProps) {
  const totalReactions = reactions.reduce((sum, r) => sum + r.count, 0);

  return (
    <div
      className="flex items-center justify-between px-4 py-3"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      {/* Left: emoji reactions + count */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 ">
          {reactions.map((r, i) => (
            <button
              key={i}
              className="flex items-center justify-center size-8 rounded-full border transition-all hover:scale-110 active:scale-95 cursor-pointer"
              style={{
                background: 'var(--bg-subtle)',
                borderColor: 'var(--border-subtle)',
              }}
              aria-label={`React with ${r.emoji}`}
            >
              <span className="text-base leading-none">{r.emoji}</span>
            </button>
          ))}
        </div>

        {totalReactions > 0 && (
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--text-primary)' }}
          >
            {totalReactions}
          </span>
        )}

        <button
          className="flex items-center justify-center size-8 rounded-full border transition-all hover:scale-110 active:scale-95 cursor-pointer"
          style={{
            background: 'var(--bg-subtle)',
            borderColor: 'var(--border-subtle)',
          }}
          aria-label="Add emoji reaction"
        >
          <Smile size={16} style={{ color: 'var(--text-secondary)' }} />
        </button>

        <button
          className="flex items-center justify-center size-8 rounded-full border transition-all hover:scale-110 active:scale-95 cursor-pointer"
          style={{
            background: 'var(--bg-subtle)',
            borderColor: 'var(--border-subtle)',
          }}
          aria-label="Comment"
        >
          <MessageCircle size={16} style={{ color: 'var(--text-secondary)' }} />
        </button>
      </div>

      {/* Right: comment count */}
      {commentCount > 0 && (
        <button
          className="text-sm transition-colors hover:underline cursor-pointer"
          style={{ color: 'var(--text-primary)' }}
        >
          {commentCount} Comments
        </button>
      )}
    </div>
  );
}
