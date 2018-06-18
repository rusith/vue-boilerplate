<template>
  <div>
    <h1>Home</h1>
    <div v-if="!userCompanies.length">
      You have no comapnie yet!
      <button class="v-button">Create One</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    userCompanies() {
      return this.$store.state.user.companies.companies;
    },
    userComapniesLoaing() {
      return this.$store.state.user.companies.loading;
    },
  },
  methods: {
    async getUserCompanies() {
      return new Promise((resolve) => {
        this.$store.dispatch('getUserCompanies', { callback: resolve });
      });
    },
  },
  async beforeMount() {
    if (!this.userCompanies) {
      await this.getUserCompanies();
    }
  },
  mounted() {
  },
};
</script>
