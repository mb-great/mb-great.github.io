import type { MetadataRoute } from "next";

// Required with next.config output: "export" - the sitemap route is otherwise
// treated as dynamic and the static export fails to collect it.
export const dynamic = "force-static";

// Single-page site today. Add an entry per route as pages are added -
// this is what tells Google the pages exist without waiting to be crawled.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mokshbudhiraja.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://mokshbudhiraja.com/tools",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://mokshbudhiraja.com/tools/label-calculator",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
