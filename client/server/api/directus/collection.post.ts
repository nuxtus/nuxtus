import { createPage } from "@nuxtus/cli"

export default defineEventHandler(async (event) => {
	if (process.env.NODE_ENV !== "production") {
		const body = await useBody(event)
		const collection = body.collection
		createPage(collection.collection, collection.singleton)
		// body.collection {singleton: boolean, collection: string}
		return {
			api: "ok",
		}
	}
})
