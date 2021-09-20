<template>
	<div>
		<button
			class="login-darkMode"
			@click="toggleModal = !toggleModal"
		>
			Login
		</button>
		<div
			v-if="toggleModal"
			class="
			fixed
			overflow-x-auto
			overflow-y-auto
			flex
			justify-center
			items-center
			inset-0
			flex z-50"
		>
			<div
				class="
				bg-white
				w-full
				p-8
				rounded-2xl
				lg:w-1/2"
			>
				<button
					class="
					flex
					justify-end
					text-red
					w-1
					h-1"
					@click="toggleModal = !toggleModal"
				>
					x
				</button>
				<h2
					class="
					text-xl
					text-gray-600
					text-center"
				>
					Login
				</h2>
				<div
					class="
					flex
					flex-col
					justify-center
					items-center"
				>
					<button
						class="
						flex
						items-center
						justify-center
						mt-4
						text-white
						rounded-lg
						shadow-md
						hover:bg-gray-100
						px-4
						py-3
						w-5/6
						text-center
						text-gray-600
						font-bold"
						@click="google"
					>
						<div
							class="
							px-4
							py-3"
						>
							<img
								src="~/static/icons/Google__G__Logo.svg"
								class="
								h-6
								w-6"
								alt="google-Logo"
							>
						</div>
						Sign in with Google
					</button>
					<button
						class="
						flex
						items-center
						justify-center
						mt-4
						text-white
						rounded-lg
						shadow-md
						hover:bg-gray-100
						px-4
						py-3
						w-5/6
						text-center
						text-gray-600
						font-bold"
						@click="facebook"
					>
						<div
							class="
							px-4
							py-3"
						>
							<img
								src="~/static/icons/icons8-facebook.svg"
								class="
								h-6
								w-6"
								alt="google-Logo"
							>
						</div>
						Sign in with Facebook
					</button>
					<button
						class="
						flex
						items-center
						justify-center
						mt-4
						text-white
						rounded-lg
						shadow-md
						hover:bg-gray-100
						px-4
						py-3
						w-5/6
						text-center
						text-gray-600
						font-bold"
						@click="github"
					>
						<div
							class="px-4
							py-3"
						>
							<img
								src="~/static/icons/icons8-github.svg"
								class="
								h-6
								w-6"
								alt="google-Logo"
							>
						</div>
						Sign in with Github
					</button>
				</div>
				<div
					class="
					mt-4
					flex
					items-center
					justify-between"
				>
					<span
						class="
						border-b
						w-1/5
						md:w-1/4"
					/>
					<button
						class="
						text-xs
						text-gray-500
						uppercase"
					>
						or sign up
					</button>
					<span
						class="
						border-b
						w-1/5
						md:w-1/4"
					/>
				</div>
			</div>
		</div>
		<div
			v-if="toggleModal"
			class="
			absolute
			inset-0
			z-40
			opacity-25
			bg-black"
		/>
	</div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
	data () {
		return {
			toggleModal: false,
		};
	},
	methods: {
		async facebook () {
			await this.$auth.loginWith('facebook').catch((e) => {
				this.$toast.show('Error', { icon: 'fingerprint' });
			});
		},
		async google () {
			await this.$auth.loginWith('google').catch((e) => {
				this.$toast.show('Error', { icon: 'fingerprint' });
			});
		},
		async github () {
			await this.$auth.loginWith('github').catch((e) => {
				this.$toast.show('Error', { icon: 'fingerprint' });
			});
		},
		logout () {
			this.$toast.show('Logging out...', { icon: 'fingerprint' });
			this.$auth.logout();
		},
	},
});

</script>
