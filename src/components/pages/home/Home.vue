<!-- @format -->

<!--@format
 by: wk 2018/12/18
 name: 
 备注:
-->
<template>
  <div class="home">
    <project-item></project-item>
    <profile-item></profile-item>
    <blog-item></blog-item>
  </div>
</template>

<script>
import ProfileItem from './item/ProfileItem';
import ProjectItem from './item/ProjectItem';
import BlogItem from './item/BlogItem';
export default {
  components: { ProfileItem, ProjectItem, BlogItem },

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
.home {
}
</style>
