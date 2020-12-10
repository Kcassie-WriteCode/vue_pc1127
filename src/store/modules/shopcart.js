import {
  reqCartList,
  reqAddToCart,
  reqCheckCart,
  reqDeleteCart,
} from "@api/shopcart";
export default {
  state: {
    cartList: [],
  },
  getters: {},
  actions: {
    //获取购物车商品列表
    async getCartList({ commit }) {
      const cartList = await reqCartList();
      commit("GET_CART_LIST", cartList);
    },
    //更新购物车商品的数量，增加或者减少
    async updateCartCount({ commit }, { skuId, skuNum }) {
      await reqAddToCart(skuId, skuNum);
      commit("UPDATE_CART_COUNT", { skuId, skuNum });
    },
    //更新商品选中状态
    async updateCheckCart({ commit }, { skuId, isChecked }) {
      await reqCheckCart(skuId, isChecked);
      console.log(commit);
    },
    //删除商品
    async deleteCart({ commit }, skuId) {
      const cart = await reqDeleteCart(skuId);
      commit("DELETE_CART", cart);
    },
    //全选和选中状态处理
    async updateAllChecked({ state, commit, dispatch }, newVal) {
      let promises = [];
      state.cartList.forEach((cart) => {
        if (cart.isChecked === newVal) return;
        const promise =dispatch("updateCheckCart", {
          skuId: cart.skuId,
          newVal,
        });
        promises.push(promise);
        console.log(promises)
      });
      console.log(commit);
      return Promise.all(promises);      
    },
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    UPDATE_CART_COUNT(state, { skuId, skuNum }) {
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },
    DELETE_CART(state, cart) {
      state.cartList = state.cartList.filter((item) => item != cart);
    },
  },
};
