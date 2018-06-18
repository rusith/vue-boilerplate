<template >
  <v-layout justify-center align-center>
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline mb-0">Sign Up</h3>
      </v-card-title>
      <v-form v-model="valid" ref="form" lazy-validation class="centered-form">
        <v-text-field
          label="First Name"
          v-model="firstName"
          :rules="firstNameRules"
          required
        ></v-text-field>

        <v-text-field
          label="Last Name"
          v-model="lastName"
          :rules="lastNameRules"
          required
        ></v-text-field>

        <v-text-field
          label="Email Address"
          v-model="email"
          :rules="emailRules"
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
          Sign Up
        </v-btn>
        <p>Click <a @click="goToSignIn">here</a> to sign in</p>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: 'SignUp',
  data: () => ({
    valid: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    firstNameRules: [
      v => !!v || 'First name is required',
    ],
    lastNameRules: [
      v => !!v || 'Last name is required',
    ],
    emailRules: [
      v => !!v || 'Email address is required',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
    ],
  }),
  computed: {
    signUp() {
      return this.$store.state.auth.signUp;
    },
    loading() {
      return this.signUp.loading;
    },
    error() {
      return this.signUp.error;
    },
  },
  methods: {
    submit() {
      const data = {
        email: this.email,
        firstname: this.firstName,
        lastName: this.lastName,
        password: this.password,
        callback: () => {
          this.goToSignIn();
        },
      };

      this.$store.dispatch('auth/signUp', data);
    },
    goToSignIn() {
      this.$router.push('auth/log-in');
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
