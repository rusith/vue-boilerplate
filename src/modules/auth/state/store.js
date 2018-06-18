import mutations from './mutations';
import actions from './actions';
import storage from './../../../helpers/storage-helper';

const authInfoKey = 'authInfo';
const authInfo = storage.get(authInfoKey);

let loggedIn = false;
if (authInfo && authInfo.loggedTime && authInfo.expiresIn) {
  authInfo.loggedTime = new Date(authInfo.loggedTime);

  const expireTime = authInfo.loggedTime.getTime() + authInfo.expiresIn;
  const now = new Date().getTime();
  if (expireTime > now && (expireTime - now) > 5000) {
    loggedIn = true;
  }
}

if (!loggedIn) {
  storage.remove(authInfoKey);
}

export default {
  state: {
    authInfo: {
      hasLoggedIn: loggedIn,
      data: loggedIn ? authInfo : {
        token: null,
        refreshToken: null,
        loggedTime: null,
        expiresIn: 0,
      },
    },
    login: {
      loading: false,
      error: null,
    },
    signUp: {
      loading: false,
      error: null,
    },
    activateEmail: {
      loading: false,
      error: null,
    },
  },
  namespaced: true,
  mutations,
  actions,
};
