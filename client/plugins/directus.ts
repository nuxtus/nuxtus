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
} from "@directus/sdk"

import type { NuxtError } from "#app"
import type { Ref } from "vue"

// TODO: Import schema from ../interfaces/nuxtus.ts?
type Schema = {}

// Remove all the auth stuff, just using a public API for version 1.

type DirectusRest = DirectusClient<Schema> & RestClient<Schema>

type DirectusRestToken = DirectusClient<Schema> &
	RestClient<Schema> &
	StaticTokenClient<Schema>

let directus: DirectusRest | DirectusRestToken

if (process.env.NUXTUS_DIRECTUS_AUTH) {
	directus = createDirectus(
		process.env.DIRECTUS_URL || "http://localhost:8055"
	).with(rest()) as DirectusRest
} else {
	if (!process.env.NUXTUS_DIRECTUS_STATIC_TOKEN) {
		throw createError({
			statusCode: 400,
			statusMessage: "No Directus token set when requiring authenticated user.",
		})
	}
	console.log("STATIC TOKEN", process.env.NUXTUS_DIRECTUS_STATIC_TOKEN)
	directus = createDirectus(process.env.DIRECTUS_URL || "http://localhost:8055")
		.with(rest())
		.with(
			staticToken(process.env.NUXTUS_DIRECTUS_STATIC_TOKEN)
		) as DirectusRestToken
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

export default defineNuxtPlugin(() => {
	return {
		provide: { checkError, directus, readItem, readItems },
	}
})
