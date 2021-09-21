<template>
	<div
		class="min-h-screen
		max-w-5xl
		mx-auto
		flex
		flex-col
		px-5
		py-8
		md:py-10"
	>
		<header
			class="flex
			align-center
			space-between"
		>
			<ToggleTheme />
				<NuxtLink
					to="/auth/signout"
					class="login-darkMode"
				>
					Logout
				</NuxtLink>
		</header>
		<Nuxt />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ToggleTheme from '~/components/atoms/ToggleTheme.vue';

export default Vue.extend({
	name: 'Default',
	components: {
		ToggleTheme,
	},
});
</script>
