<template>
  <!--默认插槽-->
  <button @click="handleClick"><slot /></button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    handleClick(e) {
      if (this.isClick) return;
      this.isClick = true;
      //this.$listeners.click监听的返回的是promise
      this.$listeners.click(e).finally(() => {
        //请求回来的结果无论成功还是失败都要把开关设为false，以便下一次发送请求
        this.isClick = false;
      });
      console.log(111);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
