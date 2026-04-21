# TagMango Assignment

## Development Plan

### 1) Component Structure and Organization

I will organize components feature-wise inside `src/components` (for example `post`, `sidebar`, and shared/common components). I will start with small reusable components and then compose them into larger sections. Data models and interfaces will stay in `src/lib/types.ts`, and mock data will stay in `src/lib/mockData.ts` so UI and data remain cleanly separated.

### 2) Approach for Building UI Elements

I will first break the page into core UI sections: feed, sidebar, day items, post cards, and reaction bar. Each section will be built as an isolated component with clear props. I will keep styling consistent across spacing, typography, borders, and card structure, and only add component state where interaction actually requires it.

### 3) Responsiveness Strategy

I will use a mobile-first approach and then scale the layout for tablet and desktop breakpoints. Layouts will rely on flexible `flex`/`grid` patterns, relative sizing, and wrapping to avoid overflow issues. I will test the UI at common screen sizes and adjust spacing, font sizes, and tap targets to keep the interface usable on smaller devices.

### 4) Light and Dark Mode Support

I will support both light and dark mode using theme-aware styles instead of hardcoded values wherever possible. Dark mode classes will be applied consistently across all components so backgrounds, text, borders, and icons adapt correctly. I will verify contrast and readability in both themes throughout development to avoid last-minute fixes.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.
