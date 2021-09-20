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
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		['cookie-universal-nuxt', { alias: 'cookiz' }],
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
		'@nuxtjs/toast',
	],

	auth: {
		strategies: {
			facebook: {
				client_id: '',
				userinfo_endpoint: false,
				scope: ['public_profile', 'email'],
				redirect_uri: '/',
			},
			google: {
				client_id: '',
				user: false,
				redirect_uri: '/',

			},
			github: {
				client_id: 'e5d2de184719c249c9a3',
				client_secret: 'e78e6a51d440d6f5b1be5278dfa31c14b7a807df',
			},
		},
		redirect: {
			login: '/',
			logout: '/',
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
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
