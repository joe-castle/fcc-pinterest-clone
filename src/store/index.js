import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pics: [],
    authedUser: false,
  },
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
});

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./mutations', './actions'], () => {
    // require the updated modules
    /* eslint-disable global-require */
    // have to add .default here due to babel 6 module output
    const newMutations = require('./mutations').default;
    const newActions = require('./actions').default;
    /* eslint-disable global-require */
    // swap in the new actions and mutations
    store.hotUpdate({
      mutations: newMutations,
      actions: newActions,
    });
  });
}

export default store;
