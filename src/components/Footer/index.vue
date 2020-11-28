<template>
  <div class="footer">
    <div class="footer-container">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div>地址：北京市昌平区宏福科技园综合楼6层</div>
      <div>京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang='less' scoped>
.footer {
  width: 100%;
  background: #ccc;
}
.footer-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer ul {
  display: flex;
  align-items: center;
}
.footer ul li {
  padding: 0 20px;
  display: block;
  border-right: 1px solid #ccc;
  margin: 15px 0;
}
.footer div {
  margin: 10px 0 0;
}
</style>