export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Pomodorum',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/global.css',
		'~/assets/css/components.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/color-mode',
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		['cookie-universal-nuxt', { alias: 'cookiz' }],
		'@nuxtjs/axios',
		[
			'@nuxtjs/firebase',
			{
				config: {
					apiKey: "AIzaSyC6rltyuT2skCBUvpNe7CeogNSc2j_03uc",
					authDomain: "pomodorum-f33f2.firebaseapp.com",
					projectId: "pomodorum-f33f2",
					storageBucket: "pomodorum-f33f2.appspot.com",
					messagingSenderId: "313893709408",
					appId: "1:313893709408:web:a47a9c530b499a360b4505",
					measurementId: "G-ZQQNN3JEHM"
				},
				services: {
					auth: {
						persistence: 'local', // default
						initialize: {
							onAuthStateChangedAction: 'onAuthStateChangedAction',
							subscribeManually: false,
						},
						ssr: false,
					},
					firestore: true,
					functions: true,
					storage: true,
					database: true,
					messaging: true,
					performance: true,
					analytics: true,
					remoteConfig: true
				},
			},
		],
	],

	database: {
		emulatorPort: 9000,
		emulatorHost: 'localhost',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	router: {
		middleware: ['auth']
	},

	tailwindcss: {
		viewer: false,
	},

	colorMode: {
		preference: 'dark', // default value of $colorMode.preference
		fallback: 'light', // fallback value if not system preference found
		classSuffix: '',
	},
};
