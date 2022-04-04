import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://coast.blog",
  server: {
    host: false
  },
  integrations: [tailwind()]
})
