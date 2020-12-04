import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/styles/reset.css";
import './styles/iconfont.css'
import "./plugins/element.js";
// 引入mockServer，为了加载里面代码
// 里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import "./mock/mockServer";
import store from "@store";

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
