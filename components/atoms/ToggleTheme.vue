<template>
	<div class="w-full">
		<button
			v-if="$colorMode.preference !== 'dark'"
			class=""
			@click="changeTheme('dark')"
		>
			<img src="~/static/icons/dark_mode_black_24dp.svg" alt="Dark Mode">
		</button>
		<button
			v-else
			@click="changeTheme('light')"
		>
			<img src="~/static/icons/light_mode_white_24dp.svg" alt="Light Mode">
		</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'ToggleTheme',
	methods: {
		changeTheme (theme:any) {
			this.$colorMode.preference = theme;
		},
	},
});
</script>
<style>

</style>
