module.exports = {
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				background: '#f2f3f5',
				'gray-line': '#dcdde8',
				text: '#666666',
				'text-highlight': '#b3b9ff',
				title: '#2e384d',
				red: '#e83f5b',
				'red-dark': '#d13952',
				green: '#4cd62b',
				'green-dark': '#43c026',
				blue: '#5965e0',
				'blue-dark': '#4953b8',
				'blue-twitter': '#2aa9e0',
				'toggle-color': '#332940',
				darkSelector: '.dark-mode',
			},
		},
	},
	variants: {
		extend: {
			opacity: ['disabled'],
			cursor: ['disabled'],
		},
		plugins: [
			require('@tailwindcss/forms'),
		],
		backgroundColor: [
			'dark',
			'dark-hover',
			'dark-group-hover',
			'dark-even',
			'dark-odd',
			'hover',
			'responsive',
		],
		borderColor: [
			'dark',
			'dark-focus',
			'dark-focus-within',
			'hover',
			'responsive',
		],
		textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive'],
	},
	plugins: [
		require('tailwindcss-dark-mode')(),
	],
	experimental: {
		darkModeVariant: true,
	},
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
			// TypeScript
			'plugins/**/*.ts',
			'nuxt.config.ts',
		],
	},
};
