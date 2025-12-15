import type { PersonalWork } from "../types/experience/personal-work";

export const PERSONAL_WORK: PersonalWork[] = [
  {
    title: "Open Artwork",
    description:
      "A REST API centered around artist and artwork metadata, with key-based authentication.",
    stack: [
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
      "GCP",
      "Cloud Run",
      "Cloud Storage",
      "Docker",
      "GitHub Actions",
    ],
    site_url: "https://art.cidominguez.com",
    repo_url: "https://github.com/cdom27/art-api",
  },
  {
    title: "Unearth",
    description: "An AI-native media analysis platform.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "Vertex AI SDK",
      "GCP",
      "PostgreSQL",
    ],
    site_url: null,
    repo_url: "https://github.com/cdom27/unearth_news",
  },
  {
    title: "Aura",
    description: "Get a personalized reading based on your reading habits.",
    stack: [
      "Bun",
      "TypeScript",
      "Hono",
      "HTML",
      "CSS",
      "Lib SQL",
      "Web Scraping",
      "GCP",
      "Cloud Run",
      "Docker",
    ],
    site_url: "https://aura.swe.cd",
    repo_url: "https://github.com/cdom27/reader-aura",
  },
];
