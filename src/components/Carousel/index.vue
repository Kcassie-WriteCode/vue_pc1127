<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <!-- data-swiper-autoplay="1000" 可在swiper-slide写间隔时间-->
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img v-lazy="carousel.imgUrl" />
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

Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  //banners一上来没有数据---watch方法检测数据发生变化并且渲染成dom
  //判断如果之前没有new swiper就直接new swiper
  watch: {
    //轮播图必须有数据
    //轮播图数据渲染成dom元素
    carouselList() {
      // 确保：swiper不能new多次
      if (this.swiper) return;
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
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
    },
  },
  mounted() {
    //一上来就有数据，证明也已经渲染好了dom元素---mounted
    //判断如果有数据就直接new swiper
    if (!this.carouselList.length) return;
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
</style>
