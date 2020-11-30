import { reqCategoryList } from "@api/home";
export default {
  state: {
    CategoryList: [],
  },
  getters: {},
  actions: {
    async getCategoryList({ commit }) {
      const result = await reqCategoryList();
      commit("RESULT_CATEGORY_LIST", result);
    },
  },
  mutations: {
    RESULT_CATEGORY_LIST(state, result) {
      state.CategoryList = result.slice(0, 15);
    },
  },
};