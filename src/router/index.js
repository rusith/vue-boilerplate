import Vue from 'vue';
import Router from 'vue-router';
import modules from './../modules';
import routeGuard from './router-guard';
import Global from './../global';
import Home from './../components/Home';

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { open: false },
  },
];

const concat = (rts, root) => {
  routes = routes.concat(rts.map((rt) => {
    const r = rt;
    r.path = `/${root}${r.path}`;
    return r;
  }));
};

Object.keys(modules)
  .forEach((key) => {
    const mod = modules[key];
    concat(mod.routes, key);
  });

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  const { meta } = to;
  if (meta && meta.open) {
    Global.store.dispatch('setFullScreenView', true);
    next();
  } else {
    routeGuard.canNavigate(to, (canNavigate) => {
      if (canNavigate) {
        Global.store.dispatch('setFullScreenView', false);
        next();
      } else {
        next(false);
        router.push('/auth/sign-in');
      }
    });
  }
});

Vue.use(Router);

export default router;
