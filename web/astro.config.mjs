import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    sitemap: true
  },
  devOptions: {
    host: true
  },
  integrations: [tailwind()]
})
