import { SiteMetadata } from "@/config"
import type { APIRoute } from "astro"
import { readFileSync } from "fs"
import satori from "satori"
import { html } from "satori-html"
import sharp from "sharp"

// https://rumaan.dev/blog/open-graph-images-using-satori
export const get: APIRoute = async ({ params, request }) => {
	const { slug } = params

	try {
		const { searchParams } = new URL(request.url)
		const title = searchParams.has("title")
			? searchParams.get("title")?.slice(0, 100)
			: "My Post"
		const desc = searchParams.has("desc")
			? searchParams.get("desc")
			: "Lorem ipsum dolor sit amet."

		const fontFileRegularPath = `${process.cwd()}/public/fonts/haskoy/otf/Haskoy-Regular.otf`
		const fontFileBoldPath = `${process.cwd()}/public/fonts/haskoy/otf/Haskoy-Bold.otf`
		const fontFileRegular = readFileSync(fontFileRegularPath)
		const fontFileBold = readFileSync(fontFileBoldPath)

		const markup = html`<div
			style="height: 100%; width: 100%; position: relative; display: flex; background-color: black"
		>
			<div
				style="position: absolute; inset: 0; width: 100%; height: 100%; display: flex; background-image: linear-gradient(to bottom right, #c7d2fe, white, #e9d5ff);"
			></div>
			<div
				style="position: relative; display: flex; width: 100%; height: 100%; flex-direction: column; align-items: center; justify-content: center; padding: 1rem;"
			>
				<div style="font-size: 32px; display: flex; color: #71717a;">
					${SiteMetadata.title}
				</div>
				<p
					style="font-size: 64px; font-weight: 700; display: flex; color: black;"
				>
					${decodeURIComponent(title)}
				</p>
				<p style="font-size: 32px; display: flex; color: #71717a;">
					${decodeURIComponent(desc)}
				</p>
			</div>
		</div>`

		const svg = await satori(markup, {
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "Haskoy",
					data: fontFileRegular,
					style: "normal",
					weight: 400,
				},
				{
					name: "Haskoy",
					data: fontFileBold,
					style: "normal",
					weight: 700,
				},
			],
		})

		const png = sharp(Buffer.from(svg)).png()
		const response = await png.toBuffer()

		return new Response(response, {
			status: 200,
			headers: {
				"Content-Type": "image/png",
				// "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
				"Cache-Control": "public, immutable, no-transform, max-age=31536000",
			},
		})
	} catch (err: any) {
		console.error(err.message)

		return new Response("Failed to generate the image", {
			status: 500,
		})
	}
}
