import Vue from "vue";
import VueLazyload from "vue-lazyload";
import loading from "@assets/images/loading1.gif";
Vue.use(VueLazyload, {
  loading: loading,
});
