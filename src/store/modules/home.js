import { reqCategoryList, reqBanners, reqFloors } from "@api/home";
export default {
  state: {
    categoryList: [], // 首页三级分类列表数据
    banners: [], // 首页轮播图数据
    floors: [], // 首页楼层数据
  },
  getters: {},
  actions: {
    async getCategoryList({ commit }) {
      const result = await reqCategoryList();
      commit("RESULT_CATEGORY_LIST", result);
    },
    async getBanners({ commit }) {
      const result = await reqBanners();
      commit("RESULT_BANNERS", result);
    },
    async getFloors({ commit }) {
      const result = await reqFloors();
      commit("RESULT_FLOORS", result);
    },
  },
  mutations: {
    RESULT_CATEGORY_LIST(state, result) {
      state.categoryList = result.slice(0, 15);
    },
    RESULT_BANNERS(state, result) {
      state.banners = result;
    },
    RESULT_FLOORS(state, result) {
      state.floors = result;
    },
  },
};
