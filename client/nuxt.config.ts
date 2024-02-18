// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
	buildModules: ["@nuxtjs/google-fonts"],
	modules: ["@nuxtjs/tailwindcss", "@nuxtus/nuxt-module"],
	googleFonts: {
		families: {
			Inter: true,
		},
	},
	tailwindcss: {
		// Options
		// jit: true,
	},
	runtimeConfig: {
		nuxtus: {
			directus: {
				email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
				password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
			},
		},
		public: {
			nuxtus: {
				authDirectus: process.env.NUXTUS_DIRECTUS_AUTH,
				// If you are not using Nuxt SSR then these credentials will be public, give user read one access
				directus: {
					token: "",
				},
			},
		},
	},
}
