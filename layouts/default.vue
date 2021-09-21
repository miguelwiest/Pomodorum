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
				<NuxtLink to="/auth/signin" class="mr-2">
					Login
				</NuxtLink>
				|
				<NuxtLink to="/auth/signout" class="ml-2">Logout</NuxtLink>
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
