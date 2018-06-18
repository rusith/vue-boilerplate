<template >
  <v-layout justify-center align-center>
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline mb-0">Sign In</h3>
      </v-card-title>
      <v-form v-model="valid" ref="form" lazy-validation class="centered-form">
        <v-text-field
          label="Username"
          v-model="username"
          :rules="usernameRules"
          required
        ></v-text-field>
        <v-text-field
          type="password"
          label="Password"
          v-model="password"
          :rules="passwordRules"
          required
        ></v-text-field>
        <v-alert v-if="error" type="error" :value="true">
          {{error.message}}
        </v-alert>
      </v-form>
      <v-card-actions >
        <v-btn
          :loading="loading"
          :disabled="!valid"
          @click="submit"
          flat color="primary">
          Login
        </v-btn>
        <p>Click <a @click="goToSignUp">here</a> to sign up</p>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: 'SignIn',
  data: () => ({
    valid: false,
    username: '',
    usernameRules: [
      v => !!v || 'Username is required',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
  }),
  computed: {
    login() {
      return this.$store.state.auth.login;
    },
    loading() {
      return this.login.loading;
    },
    error() {
      return this.login.error;
    },
  },
  methods: {
    submit() {
      this.$store.dispatch('auth/tryToSignIn', {
        username: this.username,
        password: this.password,
        callback: (companies) => {
          // this.$store.dispatch('setUserCompanies', companies);
          this.$router.push('/');
        },
      });
    },
    goToSignUp() {
      this.$router.push('/auth/sign-up');
    },
  },

};
</script>

<style scoped>
  .centered-form {
    margin-left: 25px;
    margin-right: 25px;
  }
</style>
