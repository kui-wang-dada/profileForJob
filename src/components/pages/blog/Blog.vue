<!-- @format -->

<!--@format
 by: wk 2018/12/18
 name: 
 备注:
-->
<template>
  <div class="blog">
    <img src="@/assets/images/time.jpg" alt="" />
    <h3>时间太紧啦，先跳转到我的简书吧</h3>
    <a href="https://www.jianshu.com/u/3052cc751713" target="blank">简书跳转</a>
  </div>
</template>

<script>
export default {
  components: {},

  props: {},

  computed: {},

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
  }
  h3 {
    margin-top: 20px;

    font-size: 22px;
    font-weight: bold;
  }
  a {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
