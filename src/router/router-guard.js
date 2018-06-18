import Global from './../global';

const canNavigate = (to, func) => {
  const store = Global.store;
  store.dispatch('auth/getAuthInfo', ({ hasLoggedIn }) => {
    func(hasLoggedIn);
  });
};

export default {
  canNavigate,
};
