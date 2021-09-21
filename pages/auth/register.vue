<template>
	<v-row align="center" justify="center">
		<v-col cols="12" sm="8" md="4" align="center">
			<v-card width="500" class="elevation-4 text-left" shaped color="yellow">
				<v-card-title>Register</v-card-title>
				<v-card-subtitle>Register to your dashboard</v-card-subtitle>
				<v-card-text>
					<v-form>
						<v-text-field
							label="Register"
							name="register"
							prepend-icon="mdi-account"
							type="text"
							v-model="auth.email"
						></v-text-field>

						<v-text-field
							label="Password"
							name="password"
							prepend-icon="mdi-lock"
							type="password"
							v-model="auth.password"
						></v-text-field>
					</v-form>
				</v-card-text>
				<v-card-actions class="text-center">
					<v-btn
						class="login-button"
						@click="register"
						depressed
						large
					>
						Register
					</v-btn>
				</v-card-actions>
			</v-card>
			<v-snackbar
				:timeout="4000"
				v-model="snackbar"
				absolute
				bottom
				center
			>
				{{ snackbarText }}
			</v-snackbar>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			snackbar: false,
			snackbarText: 'No error message',
			auth: {
				userName: '',
				email: '',
				password: ''
			}
		}
	},
	methods: {
		register() {
			this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
				.catch(function (error){
					this.snackbarText = error.message
					this.snackbar = true
				}).then((user) => {
				//we are signed in
				$nuxt.$router.push('/auth/signin')
			})
		},
	}
};
</script>

<style scoped>

</style>
