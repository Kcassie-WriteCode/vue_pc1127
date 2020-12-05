<template>
  <div class="spec-preview">
    <!-- 中图 -->
    <img :src="imgUrl" />
    <!-- 视图区 -->
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <!-- 大图 -->
      <img :src="bigImgUrl" ref="bigImg" />
    </div>
    <!-- 蒙版区 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: {
    imgUrl: String,
    bigImgUrl: String,
  },
  methods: {
    move(e) {
      let left = 0;
      let top = 0;
      left = e.offsetX - 100;
      top = e.offsetY - 100;
      if (left < 0) {
        left = 0;
      } else if (left > 200) {
        left = 200;
      }
      if (top < 0) {
        top = 0;
      } else if (top > 200) {
        top = 200;
      }
      const mask = this.$refs.mask;
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      const bigImg = this.$refs.bigImg;
      bigImg.style.left = -2 * left + "px";
      bigImg.style.top = -2 * top + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>