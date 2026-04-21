export type DayStatus = "completed" | "active" | "locked";

export interface Day {
  id: number;
  label: string;
  status: DayStatus;
}

export interface Reaction {
  emoji: string;
  count: number;
}

export interface Author {
  name: string;
  avatarUrl: string;
  timeAgo: string;
}

export interface Post {
  id: string;
  author: Author;
  content: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  reactions: Reaction[];
  commentCount: number;
  isPinned?: boolean;
  instructions?: string[];
}

export interface FeedMeta {
  participantCount: number;
  participantAvatars: string[];
}
