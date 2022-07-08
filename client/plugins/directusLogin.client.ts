export default defineNuxtPlugin(async (nuxtApp) => {
	try {
		const config = useRuntimeConfig()
		const { login } = useDirectusAuth()
		await login({
			email: config.public.directusEmail,
			password: config.public.directusPassword,
		})
	} catch (error) {
		console.error(error)
	}
})
