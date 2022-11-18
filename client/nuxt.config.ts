// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
	buildModules: [
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
	runtimeConfig: {
		nuxtus: {
			directus: {
				email: '',
				password: ''
			}
		}
	}
}
