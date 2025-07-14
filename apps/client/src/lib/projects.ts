import type { Project } from './types/experience/project';

export const PROJECTS: Project[] = [
  {
    title: 'Expense Tracking Discord Bot',
    description:
      'A Discord bot that lets users manage and track personal expenses via chat commands in their personal guilds.',
    stack: [
      'TypeScript',
      'Bun.js',
      'Prisma',
      'Discord.js',
      'PostgreSQL',
      'Fly.io',
    ],
    repo_url: 'https://github.com/cdom27/expense-tracking-discord-bot',
  },
  {
    title: 'Music Review Bot On BlueSky',
    description:
      'Automates music review posts on BlueSky by fetching RSS feeds from Pitchfork then aggregating metadata, storing it in a database, and scheduling daily posts.',
    stack: [
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Drizzle',
      'AT Proto',
      'Spotify Web API',
      'Fly.io',
    ],
    repo_url: 'https://github.com/cdom27/bsky-music-review-bot',
  },
];
