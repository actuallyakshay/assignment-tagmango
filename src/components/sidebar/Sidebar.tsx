'use client';

import type { Day } from '@/lib/types';
import { Check, Lock } from 'lucide-react';

interface SidebarProps {
  days: Day[];
  selectedDayId: number;
  onSelectDay: (id: number) => void;
}

const ROW_HEIGHT = 52;
const TOP_PAD = 20;

export default function Sidebar({
  days,
  selectedDayId,
  onSelectDay,
}: SidebarProps) {
  const selectedIdx = Math.max(
    0,
    days.findIndex((d) => d.id === selectedDayId)
  );
  const indicatorY = TOP_PAD + selectedIdx * ROW_HEIGHT;

  return (
    <aside
      className="relative shrink-0 overflow-hidden h-full"
      style={{ width: 258 }}
    >
      {/* Layer 1 — white base */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--bg-panel)' }}
      />

      {/* Layer 2 — background image with CSS blur (visible like Figma) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(28px) saturate(0.8)',
          transform: 'scale(1.12)',
          opacity: 0.55,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(253,252,253,0.18) 0%, rgba(253,252,253,0.18) 50%, var(--bg-primary) 100%)',
        }}
      />

      {/* Layer 4 — sliding white pill indicator */}
      <div
        className="absolute z-10 pointer-events-none rounded-full overflow-hidden"
        style={{
          left: 8,
          right: 8,
          height: ROW_HEIGHT,
          top: 0,
          transform: `translateY(${indicatorY}px)`,
          transition: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
          background: 'var(--bg-panel)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)',
        }}
      />

      {/* Layer 5 — day list */}
      <div
        className="relative z-20 flex flex-col"
        style={{ paddingTop: TOP_PAD, paddingBottom: 30 }}
      >
        {days.map((day) => {
          const isSelected = day.id === selectedDayId;
          const isCompleted = day.status === 'completed';
          const isLocked = !isSelected && day.status === 'locked';

          return (
            <button
              key={day.id}
              onClick={() => !isLocked && onSelectDay(day.id)}
              disabled={isLocked}
              className={[
                'w-full flex items-center justify-between px-4 bg-transparent border-0 outline-none select-none text-left',
                isLocked ? 'cursor-not-allowed' : 'cursor-pointer',
              ].join(' ')}
              style={{ height: ROW_HEIGHT }}
            >
              <span
                className={
                  isSelected
                    ? 'dark:text-(--text-primary)!'
                    : 'dark:text-(--text-secondary)!'
                }
                style={{
                  flex: 1,
                  minWidth: 0,
                  fontSize: 14,
                  lineHeight: '24px',
                  fontWeight: isSelected ? 600 : 500,
                  color: isSelected ? '#211f26' : 'rgba(4, 0, 17, 0.61)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  padding: '0 12px',
                  textAlign: 'left',
                }}
              >
                {day.label}
              </span>
              <span
                className={[
                  'shrink-0 flex items-center justify-center w-4 h-4',
                  isSelected || isCompleted
                    ? 'rounded-full bg-green-700 text-white p-0.5'
                    : 'text-[#6f6b7b]',
                ].join(' ')}
              >
                {isSelected || isCompleted ? (
                  <Check size={16} strokeWidth={1.5} />
                ) : (
                  <Lock size={16} strokeWidth={1.5} />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Layer 6 — top fade: masks the first item's top edge (Figma node 6:249) */}
      <div
        className="absolute top-0 left-0 right-0 z-30 pointer-events-none"
        style={{
          height: 56,
          background:
            'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 100%)',
        }}
      />
    </aside>
  );
}
