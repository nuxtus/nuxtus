import Generator from "@nuxtus/generator"

export default defineEventHandler(async (event) => {
	if (process.env.NODE_ENV !== "production") {
		const nuxtus = new Generator()
		await nuxtus.createTypes()
		return {
			api: "ok",
		}
	}
})
