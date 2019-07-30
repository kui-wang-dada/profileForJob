<!-- @format -->

<!--@format
 by: wk 2018/12/18
 name: 
 备注:
-->
<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="10">
      <el-table :data="articleData">
        <el-table-column
          align="center"
          prop="label"
          label="文章标题"
          width="300"
        ></el-table-column>
        <el-table-column label="跳转链接" fixed="right" align="center">
          <template slot-scope="scope">
            <el-button type="primary" @click="goToBlog(scope.row.url)"
              >直达</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="12">
      <el-card>
        <div slot="header">技能自我评价</div>
        <div v-for="item in skillData" :key="item.label" class="skill-item">
          <span class="label">{{ item.label }}：</span>
          <el-progress
            :style="{ flex: '1' }"
            :stroke-width="18"
            :percentage="item.percent"
            :color="item.color"
          ></el-progress>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { blog } from './mockData';
export default {
  components: {},

  props: {},

  computed: {},

  data() {
    return {
      articleData: blog.article,
      skillData: blog.skill
    };
  },

  created() {},

  mounted() {},

  methods: {
    goToBlog(url) {
      window.open(url);
    }
  }
};
</script>
<style lang="less" scoped>
.el-row {
  margin-top: 20px;
}
.skill-item {
  margin: 17px 10px;
  display: flex;
  flex-direction: row;
  .label {
    width: 150px;
  }
}
</style>
