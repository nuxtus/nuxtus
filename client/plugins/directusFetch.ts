import { UseFetchOptions } from "#app"

export default defineNuxtPlugin(async (nuxtApp) => {
	return {
		provide: {
			directus: async (uri: string, customOptions?: UseFetchOptions) => {
				const options = {
					method: "GET",
					headers: {
						Authorization: "Bearer UNSECURE_ACCESS_TOKEN",
					},
					baseURL: "http://localhost:8055",
					transform: (result) => result.data,
					...customOptions,
				}
				const result = await useFetch("http://localhost:8055" + uri, options)
				console.log(result)
				return result
			},
		},
	}
})
