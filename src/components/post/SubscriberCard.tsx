import Image from 'next/image';
import { MoreHorizontal, Play } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import ConfettiHeader from '@/components/ui/ConfettiHeader';
import ReactionBar from './ReactionBar';
import type { Post } from '@/lib/types';

interface SubscriberCardProps {
  post: Post;
}

export default function SubscriberCard({ post }: SubscriberCardProps) {
  return (
    <article
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'var(--bg-panel)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Confetti header */}
      <ConfettiHeader />

      {/* Author row */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-2.5">
          <Avatar
            src={post.author.avatarUrl}
            alt={post.author.name}
            size={40}
            className="cursor-pointer"
          />
          <div>
            <p
              className="text-sm font-semibold leading-tight cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
            >
              {post.author.name}
            </p>
            <p
              className="text-xs leading-tight"
              style={{ color: 'var(--text-secondary)' }}
            >
              {post.author.timeAgo}
            </p>
          </div>
        </div>
        <button
          aria-label="Post options"
          className="p-1 rounded-lg transition-colors hover:bg-[var(--bg-subtle)] cursor-pointer"
        >
          <MoreHorizontal
            size={18}
            style={{ color: 'var(--text-secondary)' }}
          />
        </button>
      </div>

      {/* Post text */}
      <p
        className="px-4 pb-3 text-sm leading-relaxed"
        style={{ color: 'var(--text-primary)' }}
      >
        {post.content}
      </p>

      {/* Media */}
      {post.mediaUrl && (
        <div className="relative mb-0 overflow-hidden aspect-video">
          <Image
            src={post.mediaUrl}
            alt="Post media"
            fill
            className="object-cover cursor-pointer"
            unoptimized
          />
          {post.mediaType === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <div className="flex items-center justify-center size-14 rounded-full bg-white/80 backdrop-blur-sm shadow-md">
                <Play
                  size={22}
                  className="text-gray-800 ml-1"
                  fill="currentColor"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Reactions */}
      <ReactionBar
        reactions={post.reactions}
        commentCount={post.commentCount}
      />
    </article>
  );
}
