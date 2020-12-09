import Vue from "vue";
import VueRouter from "vue-router";
/* import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Detail from "@views/Detail";
import AddCartSuccess from "@views/AddCartSuccess";
import ShopCart from "@views/ShopCart";
import Center from "@views/Center";
import PaySuccess from "@views/PaySuccess";
import Pay from "@views/Pay";
import Trade from "@views/Trade"; */
const Home =()=>import (/* webpackChunkName: "Home" */"../views/Home")
const Login = () => import(/* webpackChunkName: "Login" */"../views/Login");
const Register = () => import(/* webpackChunkName: "Register" */"../views/Register");
const Search = () => import(/* webpackChunkName: "Search" */"../views/Search");
const Detail = () => import(/* webpackChunkName: "Detail" */"../views/Detail");
const AddCartSuccess = () => import(/* webpackChunkName: "AddCartSuccess" */"../views/AddCartSuccess");
const ShopCart = () => import(/* webpackChunkName: "ShopCart" */"../views/ShopCart");
const Trade = () => import(/* webpackChunkName: "Trade" */"../views/Trade");
const Pay = () => import(/* webpackChunkName: "Pay" */"../views/Pay");
const PaySuccess = () => import(/* webpackChunkName: "PaySuccess" */"../views/PaySuccess");
const Center = () => import(/* webpackChunkName: "Center" */"../views/Center");
import store from "../store";
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this.location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return replace.call(this.location, onComplete, onAbort);
  }
  return replace.call(this, location, onComplete, () => {});
};
Vue.use(VueRouter);
const router = new VueRouter({
  // 路由模式
  //mode:'hash',//默认为hash模式
  mode: "history",
  // 路由配置
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isFooterShow: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterShow: true,
      },
    },
    {
      name: "search",
      path: "/search/:searchText?",
      component: Search,
    },
    {
      name: "detail",
      path: "/detail/:id",
      component: Detail,
    },
    {
      name: "addcartsuccess",
      path: "/addcartsuccess",
      component: AddCartSuccess,
    },
    {
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart,
    },
    {
      name: "trade",
      path: "/trade",
      component: Trade,
    },
    {
      name: "pay",
      path: "/pay",
      component: Pay,
    },
    {
      name: "paysuccess",
      path: "/paysuccess",
      component: PaySuccess,
    },
    {
      name: "center",
      path: "/center",
      component: Center,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
const permissionPaths = ["/trade", "pay", "center"];
router.beforeEach((to, from, next) => {
  if (permissionPaths.indexOf(to.path) > -1 && !store.state.user.token) {
    return next("/login");
  }
  next();
});
export default router;
