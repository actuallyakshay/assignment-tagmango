'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import SubHeader from '@/components/layout/SubHeader';
import Sidebar from '@/components/sidebar/Sidebar';
import SubscriberCard from '@/components/post/SubscriberCard';
import FeedSection from '@/components/post/FeedSection';
import { days, subscriberPost, feedPosts, feedMeta } from '@/lib/mockData';

export default function Home() {
  const [selectedDayId, setSelectedDayId] = useState(1);
  const selectedDay = days.find((d) => d.id === selectedDayId) ?? days[0];
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Fixed header */}
      <Header />

      {/* Content sits below the 60px header */}
      <div className="pt-[60px] flex flex-col h-screen">
        {/* Sub-header */}
        <SubHeader
          currentDay={selectedDay.id}
          totalDays={days.length}
          challengeTitle="9-Day Fitness Challenge"
        />

        {/* Main content area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Desktop sidebar */}
          <div className="hidden md:block h-full overflow-y-auto">
            <Sidebar
              days={days}
              selectedDayId={selectedDayId}
              onSelectDay={setSelectedDayId}
            />
          </div>

          {/* Feed */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-5">
              <SubscriberCard post={subscriberPost} />
              <FeedSection posts={feedPosts} meta={feedMeta} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
