// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'babel-polyfill';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './state/store';
import Global from './global';

/* Register Vuetify */
Vue.use(Vuetify);
Vue.use(Vuex);

Vue.config.productionTip = false;

Global.store = new Vuex.Store(store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: Global.store,
  components: { App },
  template: '<App/>',
});
