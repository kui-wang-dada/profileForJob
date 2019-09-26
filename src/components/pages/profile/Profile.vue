<!-- @format -->

<!--@format
 by: wk 2018/12/18
 name: 
 备注:
-->
<template>
  <div class="profile">
    <!-- <img src="@/assets/images/wk.png" alt class="img" /> -->
    <el-image
      style="width: 60%; height: auto"
      :src="require('@/assets/images/wk.png')"
      :preview-src-list="srcList"
    ></el-image>
  </div>
</template>

<script>
export default {
  components: {},

  props: {},

  computed: {},

  data() {
    return {
      srcList: [require('@/assets/images/wk.png')]
    };
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
.profile {
  margin-top: 20px;
}
</style>
