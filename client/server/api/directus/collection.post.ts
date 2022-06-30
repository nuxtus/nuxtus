import { createPage } from "@nuxtus/generator"

export default defineEventHandler(async (event) => {
	if (process.env.NODE_ENV !== "production") {
		const body = await useBody(event)
		// TODO: Wrap in try/catch and return HTTP error if errors
		createPage(body.collection, body.singleton)
		return {
			api: "ok",
		}
	}
})
