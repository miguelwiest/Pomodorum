<template>
	<div
		class="flex
		items-center"
	>
		<img
			:src="$nuxt.$fire.auth.currentUser.photoURL"
			alt="Perfil"
			class="mr-6
			w-20
			h-20
			rounded-full"
		>

		<div
			class="flex
			flex-col
			w-full"
		>
			<strong
				class="text-title
				text-2xl
				profile-dark"
				:style="{transition: 'background 0.7s ease, color 0.7s ease'}"
			>
				{{$nuxt.$fire.auth.currentUser.displayName}}
			</strong>

			<p
				class="flex
				items-center"
			>
				<img src="icons/level.svg" alt="level" class="mr-2">

				<span class="text-base">Level {{ level }}</span>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import axios from 'axios';

export default Vue.extend({
	data () {
		return {
			selectedFile: null
		}
	},
	computed: mapState('Challenges', ['level']),
});
</script>
