import axios from 'axios';
import * as types from './types';
import {
  url,
  getError,
} from './../../../helpers/service-helpers';

const createPayloadFromResponse = data => ({
  token: data.token,
  refreshToken: data.refreshToken,
  time: new Date().getTime(),
  expiresIn: data.expiresIn,
  emailActivated: data.emailActivated,
});

export default {
  /**
   * Try to login using username and password
   * @param store
   * @param data
   * @param callback a callback to call when login successful
   */
  tryToSignIn(store, d) {
    store.commit(types.loginInProgress);
    axios.post(url('token'),
      {
        email: d.username || d.email,
        password: d.password,
        grantType: 'password',
      })
      .then((loginResult) => {
        store.commit(types.loginSucceeded, createPayloadFromResponse(loginResult.data));
        d.callback(loginResult.data.companies);
      })
      .catch((e) => {
        store.commit(types.loginFailed, getError(e));
      });
  },

  getAuthInfo(store, callback) {
    callback(store.state.authInfo);
  },

  async signUp(store, d) {
    try {
      const data = d;
      const {
        callback,
      } = data;
      delete data.callback;
      store.commit(types.signUpInProgress);
      await axios.post(url('users'), data);
      callback();
      store.commit(types.SignUpSuccessful);
    } catch (e) {
      store.commit(types.SignUpFailed, getError(e));
    }
  },

  async activateEmail(store, data) {
    try {
      store.commit(types.EmailActivationInProgress);
      await axios.post(url('users/current/emailactivated'), {
        emailActivationCode: data.code,
        emailAddress: data.email,
        EmailActivationToken: data.token,
      });
      store.commit(types.EmailActivationSuccessful);
      data.callback();
    } catch (e) {
      store.commit(types.EmailActivationFailed, getError(e, 'An error occurred'));
    }
  },
};

