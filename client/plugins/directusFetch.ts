import { UseFetchOptions } from "#app"

export default defineNuxtPlugin(async (nuxtApp) => {
	return {
		provide: {
			directus: async (uri: string, customOptions?: UseFetchOptions) => {
				const config = useRuntimeConfig()
				const options = {
					method: "GET",
					headers: {
						Authorization: `Bearer ${config.public.directusToken}`,
					},
					baseURL: config.public.directusHost,
					transform: (result) => result.data,
					...customOptions,
				}
				return useFetch(uri, options)
			},
		},
	}
})
