import Image from 'next/image';
import FeedPostCard from './FeedPostCard';
import type { Post, FeedMeta } from '@/lib/types';

interface FeedSectionProps {
  posts: Post[];
  meta: FeedMeta;
}

export default function FeedSection({ posts, meta }: FeedSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      {/* Section header card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'var(--bg-panel)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div className="flex flex-col items-center gap-1 px-4 py-4">
          <div className="flex items-center gap-2">
            <span
              className="text-base font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              See what others
            </span>
            {/* Stacked avatars */}
            <div className="flex items-center -space-x-2">
              {meta.participantAvatars.map((url, i) => (
                <div
                  key={i}
                  className="relative size-6 rounded-full border-2 overflow-hidden"
                  style={{ borderColor: 'var(--bg-panel)' }}
                >
                  <Image
                    src={url}
                    alt="Participant"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <span
              className="text-base font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              shared
            </span>
          </div>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {meta.participantCount}+ participants already completed
          </p>
        </div>
      </div>

      {/* Feed post cards */}
      {posts.map((post) => (
        <FeedPostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
