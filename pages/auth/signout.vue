<template>
	<h1 class="login-darkMode">
		You Already Logged Out
	</h1>
</template>

<script>
export default {
	asyncData() {
		$nuxt.$fire.auth.signOut()
	}
}
</script>
