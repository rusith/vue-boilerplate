<template >
  <v-layout justify-center align-center>
     <v-alert v-if="error && !showForm" type="error" :value="true">
          {{error.message}}
      </v-alert>
    <v-card v-if="showForm">
      <v-card-title primary-title>
        <h3 class="headline mb-0">Activate Email</h3>
      </v-card-title>
      <v-form  v-model="valid" ref="form" lazy-validation class="centered-form">
        <v-text-field
          label="Code"
          v-model="code"
          :rules="codeRules"
          required
        ></v-text-field>
        <v-text-field
          type="text"
          label="Email"
          v-model="email"
          :rules="emailRules"
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
          @click="activate"
          flat color="primary">
          Activate
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: 'SignIn',
  data: () => ({
    valid: false,
    showForm: false,
    code: '',
    email: '',
    token: '',
    codeRules: [
      v => !!v || 'Code is required',
    ],
    emailRules: [
      v => !!v || 'Email is required',
    ],
  }),
  computed: {
    activateEmail() {
      return this.$store.state.auth.activateEmail;
    },
    loading() {
      return this.activateEmail.loading;
    },
    error() {
      return this.activateEmail.error;
    },
  },
  methods: {
    activate() {
      this.$store.dispatch('auth/activateEmail', {
        email: this.email,
        code: this.code,
        token: this.token,
        callback: () => {
          this.$router.push('/');
        },
      });
    },
  },
  mounted() {
    this.showForm = !this.$route.query.token;
    this.token = this.$route.query.token;
    if (!this.showForm) {
      this.activate();
    } else {
      this.showForm = true;
    }
  },
};
</script>

<style scoped>
  .centered-form {
    margin-left: 25px;
    margin-right: 25px;
  }
</style>
