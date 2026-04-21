import Image from 'next/image';
import { MoreHorizontal, Pin } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import ReactionBar from './ReactionBar';
import type { Post } from '@/lib/types';

interface FeedPostCardProps {
  post: Post;
}

export default function FeedPostCard({ post }: FeedPostCardProps) {
  return (
    <article
      className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg cursor-pointer"
      style={{
        background: 'var(--bg-panel)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Pinned badge */}
      {post.isPinned && (
        <div
          className="flex items-center gap-1.5 px-4 py-2"
          style={{ borderBottom: '1px solid var(--border-subtle)' }}
        >
          <Pin size={13} style={{ color: 'var(--text-secondary)' }} />
          <span
            className="text-xs font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            This is a pinned post
          </span>
        </div>
      )}

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
              className="text-sm font-semibold leading-tight"
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

      {/* Numbered instructions */}
      {post.instructions && post.instructions.length > 0 && (
        <ol className="px-4 pb-3 flex flex-col gap-2">
          {post.instructions.map((step, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <span
                className="flex items-center justify-center size-6 shrink-0 rounded-full text-xs font-semibold"
                style={{
                  background: 'var(--bg-subtle)',
                  color: 'var(--text-primary)',
                }}
              >
                {i + 1}
              </span>
              <span
                className="text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                {step}
              </span>
            </li>
          ))}
        </ol>
      )}

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
