<!-- @format -->

<template>
  <div style="height: 600px;">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide v-for="(item, index) in swiper" :key="index">
        <img :src="item" alt />
      </swiper-slide>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
    </swiper>
    <swiper
      :options="swiperOptionThumbs"
      class="gallery-thumbs"
      ref="swiperThumbs"
    >
      <swiper-slide v-for="(item, index) in swiper" :key="index">
        <img :src="item" alt />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'carrousel',
  components: {
    swiper,
    swiperSlide
  },
  props: ['filePath', 'num', 'phone'],
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 9, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 9, //looped slides should be the same
        slideToClickedSlide: true
      }
    };
  },
  computed: {
    swiper() {
      let arr = [];
      for (let i = 1; i <= this.num; i++) {
        arr.push(require(`@/assets/images/${this.filePath}/${i}.png`));
      }
      return arr;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.swiperOptionTop.loopedSlides = this.num;
      this.swiperOptionThumbs.loopedSlides = this.num;
      console.log(2, this.filePath, this.num, this.phone);
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>
<style lang="less" scoped>
.swiper-container {
  background-color: #000;
}
.swiper-slide {
  img {
    width: 300px;
    height: 100%;
  }
}
.gallery-top {
  height: 80% !important;
  width: 100%;
}
.gallery-thumbs {
  height: 20% !important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
  img {
    width: 100px;
    height: 100%;
  }
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
