import axios from 'axios';
import * as types from './types';
import {
  url,
  config,
} from './../helpers/service-helpers';

function setFullScreenView(store, on) {
  store.commit(types.SET_FULL_SCREEN_VIEW, on);
}

function toggleDrawer(store) {
  store.commit(types.TOGGLE_DRAWER);
}

function setUserCompanies(store, companies) {
  store.commit(types.UserCompaniesFetched, companies);
}

async function getUserCompanies(store) {
  store.commit(types.UserCompaniesFetching);
  const data = await axios.get(url('companies'), config(null, store));
  if (data && data.data) {
    store.commit(types.UserCompaniesFetched, data.data);
  }
}

export default {
  setFullScreenView,
  toggleDrawer,
  setUserCompanies,
  getUserCompanies,
};

