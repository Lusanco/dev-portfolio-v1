// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  site: "https://lusanco.github.io",
  integrations: [tailwind()],
});
