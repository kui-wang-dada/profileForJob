<!-- @format -->

<!--@format
 by: wk 2018/12/18
 name: 
 备注:
-->
<template>
  <div>
    <el-col :span="8" v-for="(item, index) in projectData" :key="index">
      <el-card>
        <div @click="goToProject(item.image)">
          <img
            :src="require('@/assets/images/' + item.image)"
            alt=""
            class="image"
          />
          <p class="title">{{ item.title }}</p>
          <p class="des">{{ item.des }}</p>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import { project } from 'home/item/mockData';
export default {
  components: {},

  props: {},

  computed: {},

  data() {
    return {
      projectData: project
    };
  },

  created() {},

  mounted() {},

  methods: {
    goToProject(type) {
      let baseUrl = `http://www.dadafastrun.com/${type}/`;
      window.open(baseUrl);
    }
  }
};
</script>
<style lang="less" scoped>
.el-col {
  padding: 20px;
}
.el-card {
  cursor: pointer;
}
.image {
  width: 100%;
  height: 300px;
}
.title {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.des {
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #666;
}
</style>
