// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
	buildModules: ["@nuxtjs/google-fonts"],
	modules: ["@nuxtjs/tailwindcss", "nuxt-directus", "@nuxtus/nuxt-module"],
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
		public: {},
		nuxtus: {
			directus: {
				email: "",
				password: "",
			},
		},
	},
}
