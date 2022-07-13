import axios from "axios"
import fs from "fs"
import openapiTS from "openapi-typescript"

const directusServer: string =
	process.env.DIRECTUS_URL || "http://localhost:8055"

export default defineEventHandler(async (event) => {
	if (process.env.NODE_ENV !== "production") {
		const config = useRuntimeConfig()
		// TODO: Can't seem to share login from directusLogin (currently client only plugin)
		try {
			const { data } = await axios.post(`${directusServer}/auth/login`, {
				email: config.public.directusEmail,
				password: config.public.directusPassword,
			})
			axios.defaults.headers.common[
				"Authorization"
			] = `Bearer ${data.data.access_token}`
		} catch (err) {
			console.error("Failed to login to Directus: " + err.message)
			throw err
		}
		const openapi = await axios.get(`${directusServer}/server/specs/oas`)
		// console.log(JSON.stringify(openapi.data.components.schemas))
		const types = await openapiTS(openapi.data)
		if (!fs.existsSync("interfaces")) {
			fs.mkdirSync("interfaces")
		}
		fs.writeFileSync("interfaces/nuxtus.ts", types)
		return {
			api: "ok",
		}
	}
})
