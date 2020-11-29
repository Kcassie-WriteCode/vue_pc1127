<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isFooterShow" />
  </div>
</template>

<script>
import Header from "@comps/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang='less' scoped>
</style>