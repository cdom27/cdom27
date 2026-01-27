import { projects } from "./projects";

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
        id: "landing",
        src: "/ade/landing/thumbnail.jpg",
        alt: "Ariel view of the San Diego coastline",
        videoSrc: "/ade/landing/720.webm",
        videoFallback: "/ade/landing/1080.mp4",
        width: 2560,
        height: 1440,
      },
      {
        id: "homes",
        src: "/ade/homes/thumbnail.jpg",
        alt: "Driving through San Diego",
        videoSrc: "/ade/homes/720.webm",
        videoFallback: "/ade/homes/1080.mp4",
        width: 2560,
        height: 1440,
      },
      {
        id: "details",
        src: "/ade/listing/thumbnail.jpg",
        alt: "Ariel view of home in San Diego",
        videoSrc: "/ade/listing/720.webm",
        videoFallback: "/ade/listing/1080.mp4",
        width: 2560,
        height: 1440,
      },
      {
        id: "mobile",
        src: "/ade/mobile/thumbnail.jpg",
        alt: "Ariel view of home in San Diego",
        videoSrc: null,
        videoFallback: null,
        width: 2560,
        height: 1440,
      },
    ],
  },
  {
    project: projects.find((p) => p.slug === "colony"),
    sections: [
      {
        id: "overview",
        title: "PROJECT OVERVIEW",
        paragraphs: [
          "Colony is a responsive dashboard concept designed for collaborative budgeting among roommates. The project explores how shared living situations could benefit from the collaborative tools typically reserved for small business finance platforms, adapted for personal use.",
          "I designed a multi-tenant budgeting interface that includes savings goals, budget tracking, transaction management, and real-time notifications; addressing the gap I experienced living with roommates where coordinating shared expenses and goals felt unnecessarily fragmented across multiple apps and spreadsheets.",
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
              "I began by examining popular personal finance tools like Splitwise, Mint, and YNAB to understand how they approached shared finances. Most were either purely transactional; focused on splitting bills after the fact, or designed for individual use with no concept of group visibility.",
              "I then looked at small business budgeting platforms, which offered robust collaborative features: multi-user access, real-time updates, budget alerts, and shared goal tracking. These tools had the infrastructure for transparency and accountability that personal finance apps lacked, but were too complex and business-focused for casual roommate use.",
            ],
          },
          {
            heading: "DESIGN EXPLORATION",
            id: "design-exploration",
            paragraphs: [
              "I studied dashboard applications with multi-tenant support to understand how they structured group-based financial data. I was particularly interested in how these platforms surfaced notifications, managed permissions, and visualized spending patterns across multiple users. The challenge was adapting enterprise-level transparency into something lightweight and approachable for personal use.",
            ],
          },
          {
            heading: "IDENTIFYING THE GAP",
            id: "identifying-gap",
            paragraphs: [
              "From my own experience, the pain points were clear: roommates needed shared visibility into budgets and goals, real-time notifications when spending limits were approaching, and a way to track contributions without constant manual reconciliation. Existing tools either over-simplified the problem or were built for contexts that didn't fit shared living.",
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
              "I built the interface around clarity and accessibility, using a muted gray foundation with yellow-green accents to draw attention to key actions and alerts. The dashboard needed to surface critical information at a glance—income, expenses, budget status, savings progress—without overwhelming users with data.",
              "I designed for responsive layouts starting at 320px, ensuring the experience worked seamlessly across devices. Navigation was streamlined into core sections: Dashboard, Transactions, Categories, Accounts, and Settings. Each section prioritized progressive disclosure, revealing complexity only when needed.",
            ],
          },
          {
            heading: "KEY FEATURES",
            id: "key-features",
            paragraphs: [
              "The system supports three category types: Savings Goals for shared targets like trips or down payments, Budgets for spending limits with visual alerts when thresholds are reached, and Generic Categories for flexible expense tracking. Users can create accounts for checking, credit, savings, and cash, with balance transfers between accounts.",
              "Notifications serve as the connective tissue, surfacing budget alerts, savings milestones, and spending anomalies in real-time. The transaction management system allows users to log expenses, assign authors, and categorize spending with filters for multi-user households.",
            ],
          },
        ],
      },
      {
        id: "reflection",
        title: "REFLECTION",
        paragraphs: [
          "This project taught me how to balance feature depth with usability in a collaborative financial context. While I designed a comprehensive system for multi-user budgeting, I recognize there are behavioral and trust dynamics in shared finances that I didn't validate through user testing—like whether roommates actually want full transparency or prefer opt-in visibility for certain accounts.",
          "If I were to iterate, I'd conduct usability testing with actual roommate groups to understand their mental models around shared money management. I'd also explore whether the concept of 'colonies' (multiple household groups) adds value or introduces unnecessary complexity for the target use case.",
        ],
      },
    ],
    images: [
      {
        id: "dashboard",
        src: "/colony/landing/thumbnail.jpg",
        alt: "Colony dashboard showing income, expenses, and spending breakdown",
        videoSrc: "/colony/landing/720.webm",
        videoFallback: "/colony/landing/1080.mp4",
        width: 2560,
        height: 1440,
      },
      {
        id: "transactions",
        src: "/colony/transaction/thumbnail.jpg",
        alt: "Transaction management interface with filtering and editing",
        videoSrc: "/colony/transaction/720.webm",
        videoFallback: "/colony/transaction/1080.mp4",
        width: 2560,
        height: 1440,
      },
      {
        id: "categories",
        src: "/colony/saving/thumbnail.jpg",
        alt: "Category management showing savings goals and budgets",
        videoSrc: "/colony/saving/720.webm",
        videoFallback: "/colony/saving/1080.mp4",
        width: 2560,
        height: 1440,
      },
      {
        id: "mobile",
        src: "/colony/mobile/thumbnail.jpg",
        alt: "Mobile responsive views of Colony interface",
        videoSrc: null,
        videoFallback: null,
        width: 2560,
        height: 1440,
      },
    ],
  },
  // Tenka case study object
  {
    project: projects.find((p) => p.slug === "tenka-stationery"),
    sections: [
      {
        id: "overview",
        title: "PROJECT OVERVIEW",
        paragraphs: [
          "Tenka is a conceptual Japanese stationery ecommerce platform designed to bring a curated, elevated shopping experience to American audiences. The project explores how intentional product curation and modern interface design can differentiate a brand in a market saturated with dated websites and mass-imported goods trading on 'Japanese' as a selling point alone.",
          "I designed a responsive ecommerce platform that includes traditional and quick checkout flows, guest purchasing options, account incentives, and community-driven content like weekly highlights and staff curations; addressing conversion friction points I observed across fashion and stationery retail while building a brand that feels refined and intentional rather than transactional.",
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
              "I began by examining established stationery retailers like JetPens, Kokuyo, and local San Diego stationery shops to understand the current landscape. A pattern emerged: most sites were either visually outdated with cluttered layouts and small product imagery, or felt like undifferentiated import catalogs where 'Japanese stationery' was expected to carry the brand without curation or context.",
              "I expanded my research beyond stationery into fashion and footwear ecommerce, studying how brands used large-format imagery to showcase single items with elegance and clarity. These industries had mastered the balance between editorial presentation and functional commerce.",
            ],
          },
          {
            heading: "CONVERSION PATTERN RESEARCH",
            id: "conversion-patterns",
            paragraphs: [
              "I studied quick-add and express checkout patterns across fashion and shoe retailers to understand how reducing friction impacts conversion. Many sites offered both traditional cart flows and streamlined quick-buy options, catering to different user mindsets: browsers who wanted to explore versus decisive buyers ready to purchase immediately.",
              "I also researched account creation friction, noting how forced registration often leads to cart abandonment. The challenge was designing a system that allowed seamless guest checkout while incentivizing account creation through tangible benefits like early access to sales or exclusive product drops.",
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
              "I built the visual identity around restraint and elegance, using off-white and black as the foundational palette with large-format product photography doing the heavy lifting. The design prioritizes generous whitespace and clean sans-serif typography to create a uniform, refined aesthetic that doesn't compete with the products being showcased.",
              "Navigation and UI elements rely on simple rounded shapes and minimal ornamentation, allowing the imagery and content to remain the focus. The approach was inspired by Japanese design principles: clarity, intention, and respect for negative space.",
            ],
          },
          {
            heading: "COMMERCE FEATURES",
            id: "commerce-features",
            paragraphs: [
              "I designed dual checkout pathways: a traditional multi-step cart flow for users who wanted to browse and build orders, and a quick-buy option for decisive purchasers. The quick-buy flow consolidates product selection, contact information, shipping, and payment into a streamlined experience with minimal navigation.",
              "Guest checkout was prioritized to reduce abandonment, but account creation was incentivized through strategic messaging: early access to sales, free shipping thresholds, and exclusive product bundles. The system respects user autonomy while presenting clear value for deeper engagement.",
            ],
          },
        ],
      },
      {
        id: "reflection",
        title: "REFLECTION",
        paragraphs: [
          "This project taught me how to balance aesthetic refinement with the functional demands of ecommerce, particularly around conversion optimization and user trust. While I designed comprehensive flows for guest checkout and quick-buy patterns, I recognize there are behavioral nuances I didn't validate, like whether users actually trust minimal checkout interfaces or prefer more traditional multi-step reassurance, especially for first-time purchases from an unknown brand.",
          "If I were to iterate, I'd conduct usability testing with stationery enthusiasts to validate whether the curated, editorial approach resonates with the target audience or if they prefer broader selection and filtering typical of established retailers. I'd also explore how the incentive structure for account creation performs against actual user behavior: do people value early access and exclusivity, or do friction-reducing features like saved addresses matter more?",
        ],
      },
    ],
    images: [
      {
        id: "product-detail",
        src: "/tenka/product/thumbnail.jpg",
        alt: "Product detail page showing notebook with specifications",
        videoSrc: "/tenka/product/720.webm",
        videoFallback: "/tenka/product/1080.mp4",
        width: 2560,
        height: 1440,
      },
      {
        id: "checkout",
        src: "/tenka/checkout/thumbnail.jpg",
        alt: "Checkout flow showing contact information and order summary",
        videoSrc: "/tenka/checkout/720.webm",
        videoFallback: "/tenka/checkout/1080.mp4",
        width: 2560,
        height: 1440,
      },
      {
        id: "homepage",
        src: "/tenka/landing/thumbnail.jpg",
        alt: "Homepage featuring December 2023 spotlight",
        videoSrc: "/tenka/landing/720.webm",
        videoFallback: "/tenka/landing/1080.mp4",
        width: 2560,
        height: 1440,
      },
      {
        id: "mobile",
        src: "/tenka/mobile/thumbnail.jpg",
        alt: "Mobile responsive views of Tenka interface",
        videoSrc: null,
        videoFallback: null,
        width: 2560,
        height: 1440,
      },
    ],
  },
];
