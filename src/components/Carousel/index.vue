<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- data-swiper-autoplay="1000" 可在swiper-slide写间隔时间-->
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Carouser",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    //轮播图必须有数据
    //轮播图数据渲染成dom元素
    carouselList() {
      // 确保：swiper不能new多次
      if (this.swiper) return;
      this.$nextTick(() => {
        this.swiper = new Swiper(".swiper-container", {
          loop: true,
          //分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          //左右导航
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
