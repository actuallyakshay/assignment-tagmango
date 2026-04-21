import { Check, Lock } from 'lucide-react';
import type { Day } from '@/lib/types';

interface DayItemProps {
  day: Day;
  isSelected: boolean;
  onClick: () => void;
}

export default function DayItem({ day, isSelected, onClick }: DayItemProps) {
  const isLocked = day.status === 'locked';
  const isCompleted = day.status === 'completed';
  const showCompleteBadge = isCompleted || isSelected;

  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      aria-label={`Select ${day.label}`}
      className={[
        'relative w-full min-h-[52px] flex items-center justify-between px-5 py-3 rounded-[18px] transition-colors duration-200',
        'text-left select-none',
        isLocked ? 'cursor-not-allowed opacity-75' : 'cursor-pointer',
      ].join(' ')}
    >
      <span
        className={[
          'text-base leading-6 truncate',
          isSelected
            ? 'font-semibold text-[#27272f]'
            : 'font-medium text-[#7f808d]',
        ].join(' ')}
      >
        {day.label}
      </span>

      {showCompleteBadge ? (
        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#24C173] text-white shadow-sm">
          <Check size={13} strokeWidth={3} />
        </span>
      ) : isLocked ? (
        <Lock size={17} strokeWidth={1.8} className="shrink-0 text-[#81818d]" />
      ) : null}
    </button>
  );
}
