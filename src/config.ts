type SocialLink = {
	label: string
	href: string | URL
	rel: string | undefined
	icon: string
}

export const SiteMetadata = {
	title: "Kuiper",
	description:
		"Kuiper is an opinionated starter kit for your next Astro project. It includes a fully-fleshed out TypeScript config, TailwindCSS with popular plugins installed, React, and SSR with Vercel's adapter.",
	author: {
		name: "John Eatmon",
		twitter: "@johneatmon_",
		url: "eatmon.co",
		email: "john@eatmon.co",
		summary: "Designer & Developer",
	},
	org: {
		name: "Kuiper",
		url: "kuiper.vercel.app",
		summary: "Kuiper is an opinionated Astro starter to help you launch your websites quickly.",
	},
	location: "Tacoma, WA",
	latlng: [1, 2] as [number, number],
	repository: "https://github.com/johneatmon/kuiper",
	social: [
		{
			label: "",
			href: "",
			rel: "",
			icon: "",
		},
	] as SocialLink[],
	buildTime: new Date(),
}
