import Generator from "@nuxtus/generator"

const directusServer: string =
	process.env.DIRECTUS_URL || "http://localhost:8055"

export default defineEventHandler(async (event) => {
	if (process.env.NODE_ENV !== "production") {
		const nuxtus = new Generator()
		nuxtus.createTypes()
		return {
			api: "ok",
		}
	}
})
