export default defineNuxtPlugin(async (nuxtApp) => {
	if (process.env.NODE_ENV !== "production") {
		const router = useRouter()
		router.addRoute({
			name: "directus",
			path: "/directus",
			component: () => import("./directusSync.vue"),
		})
	}
})
