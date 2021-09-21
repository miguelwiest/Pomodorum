<template>
	<v-row align="center" justify="center">
		<v-col cols="12" sm="8" md="4" align="center">
			<v-card width="500" class="elevation-4 text-left" shaped color="yellow">
				<v-card-title>Login</v-card-title>
				<v-card-subtitle>Login to your dashboard</v-card-subtitle>
				<v-card-text>
					<v-btn
						class="login-button my-2 pa-2"
						width="100%"
						@click="googleLogin"
						depressed
						large
					>
						<v-icon color="red" large>
							mdi-google
						</v-icon>Login with Github
					</v-btn>
					<v-btn
						class="login-button my-2 pa-2"
						width="100%"
						@click="githubLogin"
						depressed
						large
					>
						<v-icon color="black" large>
							mdi-github
						</v-icon>Login with Github
					</v-btn>
					<v-btn
						class="login-button my-2 pa-2"
						width="100%"
						@click="facebookLogin"
						depressed
						large
					>
						<v-icon color="ble" large>
							mdi-facebook
						</v-icon>Login with Github
					</v-btn>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	methods: {
		googleLogin() {
			let that = this
			const provider = new $nuxt.$fireModule.auth.GoogleAuthProvider()
			this.$fire.auth.signInWithPopup(provider)
				.catch(function (error){
					that.snackbarText = error.message
					that.snackbar = true
				}).then((user) => {
				//we are signed in
				$nuxt.$router.push('/')
			})
		},
		githubLogin() {
			let that = this
			const provider = new $nuxt.$fireModule.auth.GithubAuthProvider()
			this.$fire.auth.signInWithPopup(provider)
				.catch(function (error){
					that.snackbarText = error.message
					that.snackbar = true
				}).then((user) => {
				//we are signed in
				$nuxt.$router.push('/')
			})
		},
		facebookLogin() {
			let that = this
			const provider = new $nuxt.$fireModule.auth.FacebookAuthProvider()
			this.$fire.auth.signInWithPopup(provider)
				.catch(function (error){
					that.snackbarText = error.message
					that.snackbar = true
				}).then((user) => {
				//we are signed in
				$nuxt.$router.push('/')
			})
		}
	}
}
</script>

<style>

</style>
