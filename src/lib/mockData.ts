import type { Day, Post, FeedMeta } from "./types";

export const days: Day[] = [
  { id: 1,  label: "Day - 1", status: "active" },
  { id: 2,  label: "Day - 2", status: "locked" },
  { id: 3,  label: "Day - 3", status: "locked" },
  { id: 4,  label: "Day - 4", status: "locked" },
  { id: 5,  label: "Day - 5", status: "locked" },
  { id: 6,  label: "Day - 6", status: "locked" },
  { id: 7,  label: "Day - 7", status: "locked" },
  { id: 8,  label: "Day - 8", status: "locked" },
  { id: 9,  label: "Day - 9", status: "locked" },
];

export const subscriberPost: Post = {
  id: "sub-1",
  author: {
    name: "Ashraf Idrishi",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ashraf",
    timeAgo: "1s",
  },
  content: "Today's challenge workout completed—feeling stronger already",
  mediaUrl:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  mediaType: "video",
  reactions: [
    { emoji: "🙏", count: 0 },
    { emoji: "❤️", count: 18 },
  ],
  commentCount: 10,
};

export const feedMeta: FeedMeta = {
  participantCount: 85,
  participantAvatars: [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
  ],
};

export const feedPosts: Post[] = [
  {
    id: "feed-1",
    isPinned: true,
    author: {
      name: "Russell Brunson",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Russell",
      timeAgo: "3 hrs ago",
    },
    content:
      "This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.",
    instructions: [
      "Minimum 20 minutes of sit-up",
      "Mention Intensity",
      "Upload Media (Optional)",
    ],
    reactions: [{ emoji: "❤️", count: 24 }],
    commentCount: 5,
  },
  {
    id: "feed-2",
    author: {
      name: "Sarah Mitchell",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      timeAgo: "2 hrs ago",
    },
    content:
      "Day 1 done! 25 minutes of sit-ups at medium intensity. Feeling the burn but loving it 🔥",
    mediaUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    mediaType: "image",
    reactions: [
      { emoji: "🙏", count: 3 },
      { emoji: "❤️", count: 12 },
    ],
    commentCount: 3,
  },
  {
    id: "feed-3",
    author: {
      name: "James Park",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      timeAgo: "1 hr ago",
    },
    content:
      "Completed the challenge with 30 minutes of high-intensity sit-ups. My core is on fire! Who else crushed it today?",
    mediaUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    mediaType: "image",
    reactions: [
      { emoji: "🙏", count: 5 },
      { emoji: "❤️", count: 31 },
    ],
    commentCount: 8,
  },
];
