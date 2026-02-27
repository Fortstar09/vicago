import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vicago Group",
    short_name: "Vicago",
    description:
      "Trusted agricultural commodity trading — premium Nigerian cocoa and Canadian wheat.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9faf7",
    theme_color: "#679550",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
