// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Space\\ Grotesk\\ variant",
					"Space\\ Grotesk\\ variant\\ fallback",
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
	plugins: [],
}
