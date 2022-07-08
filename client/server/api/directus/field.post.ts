import axios from "axios"
import fs from "fs"
import openapiTS from "openapi-typescript"

export default defineEventHandler(async (event) => {
	if (process.env.NODE_ENV !== "production") {
		const config = useRuntimeConfig()
		// TODO: Can't seem to share login from directusLogin (currently client only plugin)
		try {
			const { data } = await axios.post("http://localhost:8055/auth/login", {
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
		const openapi = await axios.get("http://localhost:8055/server/specs/oas")
		// console.log(JSON.stringify(openapi.data.components.schemas))
		const output = await openapiTS(openapi.data)
		if (!fs.existsSync("interfaces")) {
			fs.mkdirSync("interfaces")
		}
		fs.writeFileSync("interfaces/nuxtus.ts", output)
		return {
			api: "ok",
		}
	}
})
