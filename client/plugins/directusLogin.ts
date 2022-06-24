export default defineNuxtPlugin(async (nuxtApp) => {
	const config = useRuntimeConfig()
	const { login } = useDirectusAuth()
	try {
		await login({
			email: config.public.directusEmail,
			password: config.public.directusPassword,
		})
	} catch (error) {
		// console.error(error)
	}
})
