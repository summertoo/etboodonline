import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.defaultTitle,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#090612",
    theme_color: "#160f2e",
    icons: [
      {
        src: "/avatars/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/avatars/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
