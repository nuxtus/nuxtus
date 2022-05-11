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
	googleFonts: {
		families: {
			Inter: true,
		},
	},
	tailwindcss: {
		// Options
		jit: true,
	},
	runtimeConfig: {
		public: {
			directusHost: "",
			directusToken: "",
		},
	},
})
