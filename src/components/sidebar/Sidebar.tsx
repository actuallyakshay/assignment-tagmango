import { Check, Lock } from 'lucide-react';
import type { Day } from '@/lib/types';

interface SidebarProps {
  days: Day[];
  selectedDayId: number;
  onSelectDay: (dayId: number) => void;
}

export default function Sidebar({
  days,
  selectedDayId,
  onSelectDay,
}: SidebarProps) {
  return (
    <aside className="relative w-64 h-full shrink-0 overflow-hidden">
      {/* Blurred bg image — this part is valid, needs inline style */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(28px) saturate(0.8)',
          opacity: 0.45,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/90" />

      {/* Day list — pure Tailwind from here */}
      <div className="relative z-10 flex flex-col gap-3 pt-5 pb-8">
        {days.map((day) => {
          const isSelected = day.id === selectedDayId;
          const isLocked = day.status === 'locked';

          return (
            <button
              key={day.id}
              onClick={() => !isLocked && onSelectDay(day.id)}
              disabled={isLocked}
              className={`flex items-center justify-between mx-2 px-4 py-3 rounded-full text-sm transition-all 
                ${isSelected ? 'bg-white font-semibold text-gray-900' : 'font-medium text-gray-700'}
                ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <span className="truncate ">{day.label}</span>
              {isSelected || day.status === 'completed' ? (
                <span className="shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-green-700 p-1">
                  <Check strokeWidth={3} size={12} className="text-white" />
                </span>
              ) : (
                <Lock
                  strokeWidth={3}
                  size={14}
                  className="shrink-0 text-gray-400"
                />
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
