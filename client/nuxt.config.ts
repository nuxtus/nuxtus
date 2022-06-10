import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	buildModules: [
		[
			"@nuxtjs/google-fonts",
			{
				/* module options */
			},
		],
		"@nuxtjs/tailwindcss",
	],
	modules: ["nuxt-directus"],
	googleFonts: {
		families: {
			Inter: true,
		},
	},
	tailwindcss: {
		// Options
		jit: true,
	},
	directus: {},
	publicRuntimeConfig: {
		directusEmail: "",
		directusPassword: "",
	},
})
