import { projects } from "./projects";

type ContentBlock = string | { text: string; link: string };
type Paragraph = ContentBlock[];

export const studies = [
  {
    project: projects.find((p) => p.slug === "ade-construction"),
    overview: {
      paragraphs: [
        "Ade Construction is a conceptual residential construction company based in San Diego, California.",
        "I designed a marketing website that includes landing pages, service offerings, and a home gallery.",
      ],
      meta: {
        role: "UI/UX Design, Visual Design",
        timeline: "3 weeks (2024)",
        tools: "Figma, Next.js, Tailwind",
        type: "Self-directed concept",
      },
    },
    sections: [
      {
        id: "research",
        title: "Research & Discovery",
        subsections: [
          {
            heading: "Competitive Analysis",
            imageId: "competitive-analysis", // Links when clicked
            paragraphs: [
              [
                "I began by examining local San Diego construction companies. A clear pattern emerged: ",
                {
                  text: "most sites were information-dense",
                  link: "research-dense-nav",
                },
                " with 15+ navigation links, walls of text, and generic beach imagery.",
              ],
              "Many were built on WordPress with poor performance and slow load times.",
            ],
          },
          {
            heading: "Design Exploration",
            imageId: "design-exploration",
            paragraphs: [
              [
                "To define a fresh direction, I looked beyond construction sites to ",
                {
                  text: "health-tech, wellness, and eco-conscious brands",
                  link: "inspiration-board",
                },
                " that successfully captured a coastal aesthetic.",
              ],
            ],
          },
          {
            heading: "Content Strategy",
            imageId: "content-strategy",
            paragraphs: [
              "I researched what content categories successful home builders included and studied the language commonly used in the market.",
            ],
          },
        ],
      },
      {
        id: "design",
        title: "Design Process",
        subsections: [
          {
            heading: "Visual Direction",
            imageId: "visual-direction",
            paragraphs: [
              "The visual identity needed to feel distinctly San Diego—warm, coastal, contemporary.",
            ],
          },
        ],
      },
    ],
    reflection: {
      paragraphs: [
        "This project taught me how to balance aesthetic goals with functional expectations.",
        "If I were to iterate, I'd conduct usability testing with potential homebuyers.",
        "I'd also explore how to make the scheduling feature more prominent.",
      ],
    },
    images: [
      {
        id: "hero",
        src: "/images/ade/hero.jpg",
        alt: "Landing page",
        height: 600,
      },
      {
        id: "competitive-analysis",
        src: "/images/ade/comp-analysis.jpg",
        alt: "Competitor analysis",
        height: 500,
      },
      {
        id: "research-dense-nav",
        src: "/images/ade/dense-nav.jpg",
        alt: "Dense navigation",
        height: 450,
      },
      // ...
    ],
  },
];
