const projects = [
  {
    thumbnail: "./assets/images/ue.webp",
    title: "Unearth.news",
    desc: "Paste an article URL → get a sourced summary + bias/misinformation signals.",
    stats: [
      "Built end-to-end",
      "Cloud Run",
      "CI/CD",
      "~9k cached source ratings",
      "AI",
    ],
    tech: [
      "TypeScript",
      "React",
      "Node/Express",
      "PostgreSQL",
      "GCP",
      "Docker",
      "Vitest",
    ],
    links: ["https://unearth.news", "https://github.com/cdom27/unearth_news"],
  },
  {
    thumbnail: "./assets/images/oa.webp",
    title: "Openart.work",
    desc: "REST API for artwork metadata with key-based access, origin validation, and rate limiting.",
    stats: [
      "Built end-to-end",
      "Key-based auth",
      "Cloud Storage",
      "CI/CD",
      "~1k artworks",
    ],
    tech: [
      "TypeScript",
      "React",
      "Node/Express",
      "PostgreSQL",
      "GCP",
      "Docker",
      "Vitest",
      "SuperTest",
    ],
    links: ["https://openart.work", "https://github.com/cdom27/art-api"],
  },
  {
    thumbnail: "./assets/images/ar.webp",
    title: "Reading Analyzer",
    desc: "Submit a Goodreads profile → get personalized reading insights and rating.",
    stats: [
      "Built end-to-end",
      "Scraping + Image processing",
      "AI",
      "~500 books locally cached",
    ],
    tech: ["TypeScript", "Hono", "Bun.js", "LibSQL", "GCP", "Docker", "Vitest"],
    links: ["https://aura.swe.cd", "https://github.com/cdom27/reader-aura"],
  },
  {
    thumbnail: null,
    title: "Habit Tracker",
    desc: "REST API + React UI for tracking habits and streaks. Features Stripe for payment processing and Clerk for authentication",
    stats: null,
    tech: ["Go", "React", "PostgreSQL", "Clerk", "Stripe", "Docker"],
    links: ["https://github.com/cdom27/habit-tracker-golang-react"],
  },
  {
    thumbnail: null,
    title: "Music Review Bot (BlueSky)",
    desc: "Daily pipeline that ingests RSS, enriches metadata, stores to Postgres, and auto-posts.",
    stats: null,
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Drizzle", "Spotify Web API"],
    links: ["https://github.com/cdom27/bsky-music-review-bot"],
  },
  {
    thumbnail: null,
    title: "Expense Tracking Bot (Discord)",
    desc: "Chat-command bot for managing tracking expenses and savings goals.",
    stats: null,
    tech: ["Bun.js", "TypeScript", "Prisma", "PostgreSQL", "Discord.js"],
    links: ["https://github.com/cdom27/expense-tracking-discord-bot"],
  },
  {
    thumbnail: null,
    title: "Bookkeeping WebApp (WIP)",
    desc: "Multi-store bookkeeping app: authentication + email verification. In active development.",
    stats: null,
    tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "JWT"],
    links: ["https://github.com/cdom27/bk"],
  },
];

function renderProjects(projectList) {
  // featured projects
  const featContainer = document.getElementById("featured-projects");
  const featTemplate = document.getElementById("feat-project-card");

  projectList.slice(0, 3).forEach((p) => {
    const clone = featTemplate.content.cloneNode(true);

    clone.querySelector(".project-image").src = p.thumbnail;
    clone.querySelector(".project-image").alt = p.title;
    clone.querySelector(".feat-project-title").textContent = p.title;
    clone.querySelector(".project-description").textContent = p.desc;
    clone.querySelector(".project-stats").textContent = p.stats.join(" • ");
    clone.querySelector(".feat-project-tech").textContent = p.tech.join(", ");

    clone.getElementById("website").href = p.links[0];
    clone.getElementById("repo").href = p.links[1];

    featContainer.appendChild(clone);
  });

  // other projects
  const otherContainer = document.getElementById("other-projects");
  const otherTemplate = document.getElementById("other-project-card");

  projectList.slice(3).forEach((p) => {
    const clone = otherTemplate.content.cloneNode(true);

    clone.querySelector(".other-project-title").textContent = p.title;
    clone.querySelector(".project-description").textContent = p.desc;
    clone.querySelector(".project-tech").textContent = p.tech.join(", ");
    clone.getElementById("repo").href = p.links[0];

    otherContainer.appendChild(clone);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects);
});

function updateNav() {
  const nav = document.getElementById("top-nav");
  const btn = document.getElementById("nav-btn");

  if (nav.className === "top-nav") {
    nav.style.display = "block";
    nav.className = "top-nav opened";
    btn.classList.add("active");
    btn.setAttribute("aria-expanded", "true");
  } else {
    nav.style.display = "none";
    nav.className = "top-nav";
    btn.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
  }
}
