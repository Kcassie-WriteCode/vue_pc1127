import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);
const state = {
  testCount: 0,
};
const getters = {};
const actions = {};
const mutations = {};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
});
