import { Flame, Bell } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 h-[60px]"
      style={{
        background: 'var(--bg-panel)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <LogoIcon />
        <span
          className="text-xl font-bold tracking-tight leading-none hidden sm:block cursor-pointer"
          style={{ color: 'var(--text-primary)' }}
        >
          Backstage
          <span style={{ color: 'var(--accent-gold)' }}>Pass</span>
        </span>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Streak badge */}
        <div
          className="flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer"
          style={{ background: 'var(--bg-subtle)' }}
        >
          <Flame size={18} className="text-orange-500" />
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--text-primary)' }}
          >
            30
          </span>
        </div>

        {/* Notification bell */}
        <button
          aria-label="Notifications"
          className="flex items-center justify-center size-8 rounded-full border transition-colors hover:bg-[var(--bg-subtle)] cursor-pointer"
          style={{ borderColor: 'var(--border-muted)' }}
        >
          <Bell size={16} style={{ color: 'var(--text-secondary)' }} />
        </button>

        {/* Theme toggle */}
        <ThemeToggle />

        {/* User avatar */}
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Akshay"
          alt="User avatar"
          size={32}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}

function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <circle cx="16" cy="16" r="14" stroke="#8d6500" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="8" stroke="#8d6500" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="3" fill="#8d6500" />
    </svg>
  );
}
