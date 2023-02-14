// https://github.com/johneatmon/precedent/blob/main/lib/utils.ts
export default function capitalize(str: string) {
	if (!str || typeof str !== "string") return str
	return str.charAt(0).toUpperCase() + str.slice(1)
}
