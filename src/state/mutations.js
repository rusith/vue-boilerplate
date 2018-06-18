import * as types from './types';

export default {
  [types.SET_FULL_SCREEN_VIEW]: (state, data) => {
    state.view.isFullScreen = data;
  },
  [types.TOGGLE_DRAWER]: (state) => {
    state.view.showDrawer = !state.view.showDrawer;
  },
  [types.UserCompaniesFetching]: (state) => {
    state.user.companies.loading = true;
  },
  [types.UserCompaniesFetched]: (state, data) => {
    state.user.companies.companies = data;
    state.user.companies.loading = false;
  },
};

