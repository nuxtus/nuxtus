import { createPage } from "@nuxtus/generator"
import { createRouter } from "h3"

export default defineEventHandler(async (event) => {
	if (process.env.NODE_ENV !== "production") {
		const body = await useBody(event)
		try {
			const collection = body.collection
			createPage(collection, body.singleton)
		} catch (err) {
			throw new Error("Unable to create page: " + err.message)
		}
		return {
			api: "ok",
		}
	}
})
