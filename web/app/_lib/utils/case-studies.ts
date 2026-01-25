import { projects } from "./projects";
import YO from "@/public/yo.jpg";

export const studies = [
  {
    project: projects.find((p) => p.slug === "ade-construction"),
    sections: [
      {
        id: "overview",
        title: "PROJECT OVERVIEW",
        paragraphs: [
          "Ade Construction is a conceptual residential construction company based in San Diego, California. The project explores how local home builders can better represent themselves digitally while embracing the coastal, warm aesthetic that defines Southern California living.",
          "I designed a marketing website that includes landing pages, service offerings, and a home gallery with an integrated showing scheduler; addressing a gap I noticed in the local market where many companies rely solely on contact forms or phone calls.",
        ],
        subsections: null,
      },
      {
        id: "research",
        title: "RESEARCH AND DISCOVERY",
        subsections: [
          {
            heading: "COMPETITIVE ANALYSIS",
            id: "competitive-analysis",
            paragraphs: [
              `I began by examining local San Diego construction companies to understand the current digital landscape. A clear pattern emerged: most sites were information-dense with 15+ navigation links, walls of text, and generic beach or plant imagery meant to evoke "Southern California living." The designs felt dated and template-driven, failing to reflect the quality of craftsmanship these companies actually delivered.`,
              `I also noticed that many sites were built on heavy CMS platforms like WordPress with little optimization, resulting in poor performance and slow load times. First Contentful Paint was often delayed by unoptimized images and bloated scripts; a friction point that likely cost them conversions before users even saw the portfolio.`,
            ],
          },
          {
            heading: "DESIGN EXPLORATION",
            id: "design-exploration",
            paragraphs: [
              "To define a fresh direction, I looked beyond traditional construction sites toward health-tech, wellness, and eco-conscious brands that successfully captured a modern coastal aesthetic. These industries had mastered the use of clean layouts, generous whitespace, warm neutral tones, and large-format imagery that felt premium without being sterile. I wanted Ade to feel approachable yet sophisticated—a company you'd trust to build your dream home.",
            ],
          },
          {
            heading: "CONTENT STRATEGY",
            id: "content-strategy",
            paragraphs: [
              `I researched what content categories successful home builders included and studied the language commonly used in the market. Most companies leaned heavily on corporate jargon and technical specs. I adapted this to align with Ade's coastal, lifestyle-focused brand voice: less "residential construction services," more "crafting homes that reflect how you live."`,
            ],
          },
        ],
      },
      {
        id: "design",
        title: "DESIGN PROCESS",
        subsections: [
          {
            heading: "VISUAL DIRECTION",
            id: "visual-direction",
            paragraphs: [
              `The visual identity needed to feel distinctly San Diego—warm, coastal, and contemporary. I built the design around generous whitespace, soft neutral backgrounds, vibrant accents, and strategic color blocking to create visual rhythm as users scroll. I used a refined serif for display text and key phrases paired with a clean sans-serif for navigation and body copy.`,
              `Navigation was streamlined to five core links with ample spacing, and CTAs follow a consistent pattern with outlined buttons and arrow icons, creating a cohesive interaction language throughout the experience.`,
            ],
          },
        ],
      },
      {
        id: "reflection",
        title: "REFLECTION",
        paragraphs: [
          `This project taught me how to balance aesthetic goals with functional expectations in a traditional, high-consideration industry. While I focused heavily on visual design and user flow, I recognize there are conversion-focused UX patterns I didn't implement—like prominent phone numbers in navigation or urgency-driven CTAs that are psychologically effective for industries like home construction.`,
          "If I were to iterate, I'd conduct usability testing with potential homebuyers to validate whether the streamlined, modern aesthetic resonates with the target demographic, or if the traditional information-dense approach exists for reasons I haven't fully explored.",
        ],
      },
    ],
    images: [
      {
        id: "hero",
        src: YO,
        alt: "Landing page",
        width: 2674,
        height: 1319,
      },
      {
        id: "competitive-analysis",
        src: YO,
        alt: "Competitor analysis",
        width: 2674,
        height: 1319,
      },
      {
        id: "research-dense-nav",
        src: YO,
        alt: "Dense navigation",
        width: 2674,
        height: 1319,
      },
      {
        id: "competitive-analysis2",
        src: YO,
        alt: "Competitor analysis",
        width: 2674,
        height: 1319,
      },
      {
        id: "competitive-analysis1",
        src: YO,
        alt: "Competitor analysis",
        width: 2674,
        height: 1319,
      },
      {
        id: "competitive-analysis13",
        src: YO,
        alt: "Competitor analysis",
        width: 2674,
        height: 1319,
      },
    ],
  },
];
