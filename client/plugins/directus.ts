import type {
	DirectusClient,
	RestClient,
	StaticTokenClient,
} from "@directus/sdk"
import {
	createDirectus,
	readItem,
	readItems,
	rest,
	staticToken,
	withToken,
} from "@directus/sdk"

import type { NuxtError } from "#app"
import type { Ref } from "vue"

// TODO: Import schema from ../interfaces/nuxtus.ts?
type Schema = {}

type DirectusRest = DirectusClient<Schema> & RestClient<Schema>

type DirectusRestToken = DirectusClient<Schema> &
	RestClient<Schema> &
	StaticTokenClient<Schema>

let directus: DirectusRest | DirectusRestToken

export default defineNuxtPlugin(() => {
	const runtimeConfig = useRuntimeConfig()

	// TODO: If we are using server then we can simply retrieve everything using the admin details???

	if (!runtimeConfig.public.nuxtus.authDirectus) {
		directus = createDirectus(runtimeConfig.public.nuxtus.directus.url).with(
			rest()
		) as DirectusRest
	} else {
		if (!runtimeConfig.public.nuxtus.directus.token) {
			throw createError({
				statusCode: 400,
				statusMessage:
					"No Directus token set when requiring authenticated user.",
			})
		}
		directus = createDirectus(runtimeConfig.public.nuxtus.directus.url)
			.with(rest())
			.with(
				staticToken(runtimeConfig.public.nuxtus.directus.token)
			) as DirectusRestToken

		// TODO: In create CLI make a note that this token/user should not be able to access UI or write anything! Public token!
	}

	function checkError(error: Ref<NuxtError<unknown> | null>): void {
		if (error.value) {
			throw createError({
				statusCode: error.value.statusCode,
				statusMessage:
					"An error occurred fetching Directus data. Check server logs - this is usually caused by invalid/missing permissions.",
			})
		}
	}

	return {
		provide: { checkError, directus, withToken, readItem, readItems },
	}
})
