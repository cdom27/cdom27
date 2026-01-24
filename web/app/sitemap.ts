import { MetadataRoute } from "next";
import { projects } from "./_lib/utils/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cidominguez.com";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  const caseStudyPages = projects.map((project) => ({
    url: `${baseUrl}/case-study/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...caseStudyPages];
}
