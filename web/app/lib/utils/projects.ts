import COLONY from "../public/colony.png";
import ADE from "../public/ade.png";
import TENKA from "../public/tenka.png";

export const projects = [
  {
    id: 0,
    type: "design",
    imgSrc: TENKA,
    title: "Tenka",
    description:
      "Complete e-commerce flow concept for a Japanese stationery brand, covering search, product pages, auth, cart, and checkout across mobile and desktop.",
    tags: ["Web Design", "E-commerce", "Responsive", "SEO", "UX/UI"],
    slug: "tenka-stationery",
    url: "",
  },
  {
    id: 1,
    type: "full",
    imgSrc: ADE,
    title: "Ade Construction",
    description:
      "SEO-focused marketing site concept for a fictional San Diego construction company, with service pages, galleries, and home listing detail pages.",
    tags: ["Web Design", "Marketing Site", "Responsive", "SEO"],
    slug: "ade-construction",
    url: "https://github.com/cdom27/ade-react-typescript-frontend",
  },
  {
    id: 2,
    type: "design",
    imgSrc: COLONY,
    title: "Colony",
    description:
      "Responsive dashboard concept for collaborative budgeting. Designed for roommates with shared goals, real-time visibility, and notifications.",
    tags: ["Dashboard UI", "UX/UI", "Product Design", "Responsive"],
    slug: "colony",
    url: "",
  },
  // {
  //   id: 3,
  //   type: "design",
  //   imgSrc: null,
  //   title: "Plant-Based San Diego",
  //   description:
  //     "Modern, mobile-first landing page for a San Diego plant-based guide; built to make finding restaurants, and submitting community picks feel simple and current.",
  //   tags: ["Web Design", "Landing Page", "UX/UI", "Responsive", "SEO"],
  //   slug: "plant-based-san-diego",
  //   url: "",
  // },
];
