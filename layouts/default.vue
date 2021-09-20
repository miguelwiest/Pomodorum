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
			<div v-if="$auth.loggedIn">
				{{ $auth.user.email }}
				<button>Logout</button>
			</div>
			<div v-else class="flex">
				<NuxtLink to="/login" class="mr-2">
					Login
				</NuxtLink>
				<span>
					/
				</span>
				<NuxtLink to="/register" class="ml-2">
					Register
				</NuxtLink>
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
