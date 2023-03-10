import { defineConfig } from "astro/config"
import { FontaineTransform } from "fontaine"

import image from "@astrojs/image"
import mdx from "@astrojs/mdx"
import prefetch from "@astrojs/prefetch"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"

import { remarkReadingTime } from "./remark-plugins/remark-reading-time.mjs"
import { remarkWidont } from "./remark-plugins/remark-widont.mjs"

// https://astro.build/config
export default defineConfig({
	adapter: vercel({
		includeFiles: [
			"./public/fonts/haskoy/otf/Haskoy-Regular.otf",
			"./public/fonts/haskoy/otf/Haskoy-Bold.otf",
		],
	}),
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
	output: "server",
	site: import.meta.env.DEV ? "http://localhost:3000" : "https://kuiper-starter.vercel.app",
	vite: {
		plugins: [
			// https://stackblitz.com/github/unjs/fontaine/tree/main/playground?file=vite.config.mjs
			FontaineTransform.vite({
				fallbacks: ["Arial"],
				resolvePath: (id) => new URL(`./public${id}`, import.meta.url), // id is the font src value in the CSS
			}),
		],
		ssr: {
			noExternal: [/^@radix-ui\/*/, "smartypants"],
		},
	},
})
