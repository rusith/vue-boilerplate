import actions from './actions';
import mutations from './mutations';
import modules from './../modules';


const modulesObject = { };

Object.keys(modules)
  .forEach((key) => {
    modulesObject[key] = modules[key].module;
  });

/* This is the root store of the application */
export default {
  state: {
    view: {
      isFullScreen: false,
      showDrawer: false,
    },
    user: {
      companies: {
        companies: null,
        loading: false,
      },
    },
  },
  actions,
  mutations,
  modules: modulesObject,
};
