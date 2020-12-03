import { reqProductList } from "@api/search";
export default {
  state: {
    productList: {
      trademarkList: [],
      attrsList: [],
      goodsList: [],
      total: 0,
    },
  },
  getters: {
    trademarkList(state) {
      return state.productList.trademarkList;
    },
    attrsList(state) {
      return state.productList.attrsList;
    },
    goodsList(state) {
      return state.productList.goodsList;
    },
    total(state) {
      return state.productList.total;
    },
  },
  actions: {
    async getProductList({ commit }, data = {}) {
      //reqProductList返回的是一个promise对象，取成功时的数据
      const productList = await reqProductList(data);
      commit("GET_PRODUCT_LIST", productList);
    },
  },
  mutations: {
    GET_PRODUCT_LIST(state, productList) {
      state.productList = productList;
    },
  },
};
