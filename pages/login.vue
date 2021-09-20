<template>
	<div class="py-6 flex justify-center items-center">
		<div class="w-full p-8 lg:w-1/2 bg-white rounded-2xl">
			<p class="text-xl text-gray-600 text-center">
				Welcome back!
			</p>
			<div class="mt-4">
				<label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
				<input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
			</div>
			<div class="mt-4">
				<div class="flex justify-between">
					<label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
					<a href="#" class="text-xs text-gray-500">Forget Password?</a>
				</div>
				<input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
			</div>
			<div class="mt-8">
				<button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
					Login
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
	methods: {
	},
});

</script>
