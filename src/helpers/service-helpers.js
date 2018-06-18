/*
* Some helpers to send service calls
*
* */

export function url(path) {
  return `${process.env.API_URL}${path}`;
}

/**
 * This will configure the given axios configuration to have the authorization information
 * @param {object} configuration Existing configuration
 * @param {object} store Store
 */
export function config(configuration, { state }) {
  const exConfig = configuration || { };
  if (!exConfig.headers) {
    exConfig.headers = {};
  }
  exConfig.headers.Authorization = `Bearer ${state.auth.authInfo.data.token}`;
  return exConfig;
}

export function getError(error, defaultMessage = null) {
  let message = '';
  let body = null;
  if (error && error.response) {
    if (error.response.headers) {
      message = error.response.headers['error-message'] || '';
    }
    body = error.response.data;
  }
  return {
    message: message || defaultMessage,
    body,
    error,
  };
}
