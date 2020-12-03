import { reqLogin } from "@api/user";
export default {
  state: { userInfo: {} },
  getters: {},
  actions: {
    async getUserInfo({ commit }, phone, password) {
      const userInfo = await reqLogin(phone, password);
      commit('GET_USER_INFO', userInfo);
    },
  },
  mutations: {
    GET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
};
