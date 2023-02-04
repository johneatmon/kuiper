import { defineConfig } from "astro/config"

import image from "@astrojs/image"
import mdx from "@astrojs/mdx"
import prefetch from "@astrojs/prefetch"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

import { remarkReadingTime } from "./remark-reading-time.mjs"
import { remarkWidont } from "./remark-widont.mjs"

// https://astro.build/config
export default defineConfig({
	integrations: [
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		mdx(),
		prefetch({
			selector: "a[href^='https:']", // By default, only external links
			throttle: 3,
		}),
		react(),
		sitemap(),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
	],
	markdown: {
		remarkPlugins: [remarkWidont, remarkReadingTime],
		drafts: true,
	},
	site: "https://example.com",
	vite: {
		ssr: {
			noExternal: [/^@radix-ui\/*/, "smartypants"],
		},
	},
})
