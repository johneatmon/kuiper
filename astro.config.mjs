import { defineConfig } from "astro/config"

import image from "@astrojs/image"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	integrations: [
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		mdx(),
		react(),
		sitemap(),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
	],
	site: "https://example.com",
	vite: {
		ssr: {
			noExternal: ["smartypants"],
		},
	},
})
