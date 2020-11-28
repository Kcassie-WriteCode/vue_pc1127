<template>
  <div class="home">
    <div class="home-top-bottom">
      <div class="home-top">
        <h2>全部商品分类</h2>
        <nav>
          <a>服装城</a>
          <a>美妆馆</a>
          <a>尚品汇超市</a>
          <a>全球购</a>
          <a>闪购</a>
          <a>团购</a>
          <a>有趣秒杀</a>
        </nav>
      </div>
    </div>
    <div>
      <h1>css</h1>
    </div>
    <div class="home-footer">
      <div class="home-footer-list">
        <div class="home-footer-item">
          <h4>购物指南</h4>
          <ul class="home-footer-item-con">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="home-footer-item">
          <h4>配送方式</h4>
          <ul class="home-footer-item-con">
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="home-footer-item">
          <h4>支付方式</h4>
          <ul class="home-footer-item-con">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="home-footer-item">
          <h4>售后服务</h4>
          <ul class="home-footer-item-con">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="home-footer-item">
          <h4>特色服务</h4>
          <ul class="home-footer-item-con">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>尚品汇E卡</li>
            <li>尚品汇通信</li>
          </ul>
        </div>
        <div class="home-footer-item">
          <h4>帮助中心</h4>
          <img src="./images/wx_cz.jpg"> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang='less' scoped>
.home {
  width: 100%;
  overflow: hidden;
}
.home-top-bottom {
  width: 100%;
  border-bottom: 2px solid #e1251b;
}
.home-top {
  width: 1200px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.home-top h2 {
  width: 210px;
  line-height: 45px;
  text-align: center;
  background: #e1251b;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}
.home-top nav a {
  height: 45px;
  line-height: 45px;
  margin: 0 22px;
  font-size: 16px;
  color: #333;
}
.home-footer {
  width: 100%;
  background: #ccc;
}
.home-footer-list {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.home-footer-item img{
  width: 100px;
  height:100px;
}
</style>