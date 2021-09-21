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
			<div class="flex">
				<NuxtLink to="/" class="mr-6">
					Home
				</NuxtLink>
				<NuxtLink to="/auth/signin" class="mr-2">
					Login
				</NuxtLink>
				<span>
					/
				</span>
				<NuxtLink to="/auth/register" class="ml-2">
					Register
				</NuxtLink>
			</div>
			<div>
				<NuxtLink to="/auth/signout" class="ml-6">Logout</NuxtLink>
			</div>
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
