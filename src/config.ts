type SiteProps = {
	title: string
	fallbackDesc: string
}

export const SITE: SiteProps = {
	title: "Kuiper",
	fallbackDesc: "",
}

type SocialLink = {
	label: string
	href: string | URL
	rel: string | undefined
	icon: string
}

export const SiteMetadata = {
	title: "Kuiper",
	description: "Kuiper is an opinionated Astro starter to help you launch your websites quickly.",
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
