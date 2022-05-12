export default defineNuxtPlugin(async (nuxtApp) => {
	const config = useRuntimeConfig()
	console.log("CONFIG URL", config)
	const { login } = useDirectusAuth()
	try {
		await login({
			email: config.public.directusEmail,
			password: config.public.directusPassword,
		})
	} catch (error) {
		console.error(error)
	}
})
