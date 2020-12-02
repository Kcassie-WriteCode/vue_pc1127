<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-container">
        <div class="header-top-container-left">
          <p>尚品汇欢迎您!</p>
          <div>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">免费注册</router-link>
          </div>
        </div>
        <div class="header-top-container-right">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <div class="header-button">
      <router-link to="/home"><img src="./images/logo.png" /></router-link>
      <form @submit.prevent="search">
        <input type="text" v-model="searchText" />
        <button>搜索</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      //搜索的内容
      searchText: "",
    };
  },
  methods: {
    search() {
      /**
       搜索功能
       * */
      const { searchText } = this;
      const location = {
        name: "search",
      };
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      const { categoryName } = this.$route.query;
      if (categoryName) {
        location.query = this.$route.query;
      }
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    this.$bus.$on("clearKeyword", () => {
      this.searchText = "";
    });
  },
};
</script>

<style lang='less' scoped>
.header {
  width: 100%;
  min-width: 1200px;
}
.header-top {
  background: #ccc;
}
.header-top-container {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-top-container a:hover {
  text-decoration: none;
  color: #ea4a36;
}
.header-top-container-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-top-container-left p {
  margin-right: 10px;
}
.header-top-container-left div {
  a:nth-of-type(1) {
    padding-right: 5px;
    border-right: 1px solid black;
  }
  a:nth-of-type(2) {
    padding-left: 5px;
  }
}
.header-top-container-right a {
  padding: 0 10px;
}
.header-top-container-right a + a {
  border-left: 1px solid black;
}
.header-button {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-button form {
  display: flex;
  align-items: center;
}
.header-button input {
  width: 490px;
  height: 32px;
  padding: 0px 4px;
  border: 2px solid #ea4a36;
  box-sizing: border-box;
}
.header-button button {
  width: 68px;
  height: 32px;
  background: #ea4a36;
  border: none;
  color: #fff;
}
</style>