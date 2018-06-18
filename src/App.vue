<template>
  <v-app>
    <navigation-drawer></navigation-drawer>
    <toolbar></toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import NavigationDrawer from './components/NavigationDrawer';
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  props: {
    source: String,
  },
  components: {
    NavigationDrawer,
    Toolbar,
  },
};
</script>
