import UNEARTH from "@/public/unearth.png";
import OPEN_ARTWORK from "@/public/openartwork.jpg";

export const work = [
  {
    id: 0,
    imgSrc: UNEARTH,
    title: "Unearth News",
    status: "Overhaul in progress",
    duration: "Sept. 2025 - Present",
    description: `AI-powered news analysis with a mobile-first, accessible UI. Users
    paste a URL to get a clear breakdown of claims/framing plus
    related coverage and source credibility context.`,
    tags: [
      "TypeScript",
      "React",
      "Node.js / Express",
      "PostrgeSQL",
      "GCP",
      "Docker",
    ],
    liveUrl: null,
    codebaseUrl: "https://github.com/cdom27/unearth_news",
  },
  {
    id: 1,
    imgSrc: OPEN_ARTWORK,
    title: "Open Artwork",
    status: "Redesign in progress",
    duration: "May 2025 - Present",
    description: `A developer-friendly public-domain art API with a lightweight,
    responsive front-end for browsing clean metadata (artist, medium,
    year) and optimized images.`,
    tags: [
      "TypeScript",
      "React",
      "Node.js / Express",
      "PostrgeSQL",
      "GCP",
      "Docker",
    ],
    liveUrl: null,
    codebaseUrl: "https://github.com/cdom27/art-api",
  },
];
