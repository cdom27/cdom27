import UNEARTH from "@/public/un.png";
import OPEN_ARTWORK from "@/public/openartwork.jpg";

export const work = [
  {
    id: 0,
    imgSrc: UNEARTH,
    title: "Unearth News",
    status: "Recently updated",
    duration: null,
    description: `AI-powered news analysis with a mobile-first, accessible UI. Users
    paste a URL to get a clear breakdown of claims and rhetorical analysis. Originally containerized and deployed on GCP; rebuilt on Next.js/Vercel.`,
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Anthropic", "Exa AI"],
    liveUrl: "https://unearth.news",
    codebaseUrl: "https://github.com/cdom27/unearth",
  },
  {
    id: 1,
    imgSrc: OPEN_ARTWORK,
    title: "Open Artwork",
    status: "Rehaul in progress",
    duration: null,
    description: `A developer-friendly public-domain art API with a lightweight,
      responsive front-end for browsing clean metadata (artist, medium,
      year) and optimized images. Backend currently being rebuilt in
      Go (Gin) for concurrent image and palette processing.`,
    tags: [
      "TypeScript",
      "React",
      "Node.js / Express",
      "PostgreSQL",
      "GCP",
      "Docker",
    ],
    liveUrl: null,
    codebaseUrl: "https://github.com/cdom27/open-artwork",
  },
];
