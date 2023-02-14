// https://github.com/johneatmon/precedent/blob/main/lib/utils.ts
export const truncate = (str: string, length: number) => {
	if (!str || str.length <= length) return str
	return `${str.slice(0, length)}...`
}
