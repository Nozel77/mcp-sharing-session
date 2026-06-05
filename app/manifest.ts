import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MCP Remote Slide",
    short_name: "MCP Remote",
    description: "Remote control untuk MCP Sharing Session.",
    start_url: "/remote",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#07101f",
    theme_color: "#07101f",
    icons: [
      {
        src: "/remote-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/remote-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
