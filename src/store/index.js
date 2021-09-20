import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './modules/auth';
import { distribuidores } from './modules/distribuidores';
import { ui } from './modules/ui';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    ui,
    distribuidores,
  },
});
