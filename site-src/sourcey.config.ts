import { defineConfig, markdown, openapi } from "sourcey";

export default defineConfig({
  name: "Wakapi API Reference",
  siteUrl: "https://merioneeason.github.io",
  baseUrl: "/wakapi-api-docs/",
  repo: "https://github.com/muety/wakapi",
  editBranch: "master",
  theme: { name: "api-first" },
  navigation: {
    tabs: [
      { tab: "Guide", slug: "", source: markdown({ groups: [
        { group: "Get started", pages: ["index", "authentication", "heartbeats"] },
      ] }) },
      { tab: "API Reference", slug: "api", source: openapi("./wakapi-openapi.yaml") },
    ],
  },
});
