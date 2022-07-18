import Generator from "@nuxtus/generator"

export default defineEventHandler(async (event) => {
	if (process.env.NODE_ENV !== "production") {
		const body = await useBody(event)
		const nuxtus = new Generator()
		try {
			const collection = body.collection
			nuxtus.createPage(collection, body.singleton)
		} catch (err) {
			console.error(err.message)
			throw new Error("Unable to create page: " + err.message)
		}
		return {
			api: "ok",
		}
	}
})
