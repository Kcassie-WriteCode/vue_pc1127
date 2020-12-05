import { reqProductDetail } from "@api/detail";
export default {
  state: {
    productInfo: {
      categoryView: {},
      skuInfo: {},
      spuSaleAttrList: [],
    },
  },
  getters: {
    categoryView(state) {
      return state.productInfo.categoryView;
    },
    skuInfo(state) {
      return state.productInfo.skuInfo;
    },
    spuSaleAttrList(state) {
      return state.productInfo.spuSaleAttrList;
    },
  },
  actions: {
    async getProductDetail({ commit }, id) {
      const productInfo = await reqProductDetail(id);
      commit("GET_PRODUCT_DETAIL", productInfo);
    },
  },
  mutations: {
    GET_PRODUCT_DETAIL(state, productInfo) {
      state.productInfo = productInfo;
    },
  },
};
