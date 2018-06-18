import * as types from './types';
import storage from './../../../helpers/storage-helper';

export default {
  [types.loginInProgress](state) {
    state.login.loading = true;
  },
  [types.loginFailed](state, data) {
    state.login.loading = false;
    state.login.error = data;
  },
  [types.loginSucceeded](state, data) {
    state.authInfo.hasLoggedIn = true;
    state.authInfo.data = {
      token: data.token,
      loggedTime: new Date(data.time),
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn,
    };
    storage.set('authInfo', state.authInfo.data);
  },
  [types.signUpInProgress](state) {
    state.signUp.loading = true;
  },
  [types.SignUpFailed](state, data) {
    state.signUp.loading = false;
    state.signUp.error = data;
  },
  [types.SignUpSuccessful](state) {
    const {
      signUp,
    } = state;
    signUp.loading = false;
    signUp.error = null;
  },
  [types.EmailActivationInProgress](state) {
    const { activateEmail } = state;
    activateEmail.loading = true;
    activateEmail.error = null;
  },
  [types.EmailActivationSuccessful](state) {
    const { activateEmail } = state;
    activateEmail.loading = false;
    activateEmail.error = null;
  },
  [types.EmailActivationFailed](state, data) {
    const { activateEmail } = state;
    activateEmail.loading = false;
    activateEmail.error = data;
  },
};

