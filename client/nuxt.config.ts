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
	modules: ["nuxt-directus", "@nuxtus/nuxt-module"],
	googleFonts: {
		families: {
			Inter: true,
		},
	},
	tailwindcss: {
		// Options
		// jit: true,
	},
	directus: {},
	nuxtus: {
		authDirectus: true,
	},
	publicRuntimeConfig: {
		directusEmail: "",
		directusPassword: "",
	},
})
