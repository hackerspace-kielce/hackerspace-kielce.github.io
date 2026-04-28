import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const organization = "hackerspace-kielce";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isOrganizationSite = repository === `${organization}.github.io`;

export default defineConfig({
  output: "static",
  site: `https://${organization}.github.io`,
  base: isGitHubPagesBuild && repository && !isOrganizationSite ? `/${repository}` : undefined,
  integrations: [tailwind()]
});
