import { reqRegister, reqLogin } from "@api/user";
export default {
  state: {
    token: localStorage.getItem("token") || "",
    nickName: localStorage.getItem("nickName") || "",
  },
  getters: {},
  actions: {
    async register({ commit }, { phone, password, code }) {
      await reqRegister({ phone, password, code });
      console.log(commit);
    },
    //actions中只能是两个参数
    async login({ commit }, { phone, password }) {
      const user = await reqLogin(phone, password);
      commit("LOGIN", user);
    },
  },
  mutations: {
    LOGIN(state, user) {
      state.token = user.token;
      state.nickName = user.nickName;
    },
  },
};
