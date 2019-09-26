<!-- @format -->

<template>
  <div class>
    <Swiper :filePath="filePath" :num="num" :phone="phone"></Swiper>
  </div>
</template>

<script>
import Swiper from 'common/Swiper.vue';
export default {
  components: { Swiper },
  props: {},
  data() {
    return {
      filePath: '',
      num: 0,
      phone: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.filePath = this.$route.params.id;
    let strategy = {
      houren: {
        num: 21,
        phone: true
      },
      yryz: {
        num: 15,
        phone: true
      },
      quanhu: {
        num: 9,
        phone: true
      },
      nw: {
        num: 8,
        phone: false
      },
      admin: {
        num: 10,
        phone: false
      }
    };
    this.num = strategy[this.filePath].num;
    this.phone = strategy[this.filePath].phone;
    console.log(1, this.filePath, this.num, this.phone);
  },
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
