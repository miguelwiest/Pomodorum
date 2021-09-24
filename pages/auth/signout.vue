<template>
	<div>
	<h1
		class="
		login-darkMode
		flex
		justify-center
		items-center"
	>
		You Already Logged Out,
		return to login
	</h1>
	<a
		href="/auth/signin"
		class="login-darkMode
		flex
		justify-center
		items-center"
	>
		RETURN
	</a>
	</div>
</template>

<script>
export default {
	asyncData() {
		$nuxt.$fire.auth.signOut()
	}
}
</script>
