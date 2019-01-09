<!-- @format -->

<!--@format
 by: wk 2018/12/18
 name: 
 备注:
-->
<template>
  <el-row>
    <el-col :span="6" v-for="(item, index) in inidicatorData" :key="index">
      <el-card>
        <div class="box-card">
          <div><img src="@/assets/images/logo.png" alt="" class="image" /></div>
          <div class="card-right">
            <p class="title">{{ item.title }}</p>
            <p class="des">{{ item.des }}</p>
            <div class="tags">
              <el-tag v-for="tag in item.tags" :key="tag">{{ tag }}</el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  components: {},

  props: {},

  computed: {},

  data() {
    return {
      inidicatorData: [
        {
          title: 'VUE——音乐播放器',
          des: '抓取QQ音乐数据的移动端音乐app',
          tags: ['vuex', 'node', '跨域']
        },
        {
          title: 'VUE——后台管理系统',
          des: '具备权限路由的后台管理系统',
          tags: ['权限', 'vuex', 'ele-ui']
        },
        {
          title: 'ReactNative——悠然一指',
          des: '悠然一指4.0部分功能开发',
          tags: ['react', 'RN', 'redux']
        },
        {
          title: 'node+koa',
          des: 'node+koa',
          tags: ['node', 'koa', 'mysql']
        }
      ]
    };
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
@import '../../../../assets/css/mixin.less';
.el-row {
  margin-left: -20px;
  margin-right: -20px;
  margin-top: 18px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 32px;
  .box-card {
    height: 108px;
    cursor: pointer;
    .display-flex(space-around);
    .image {
      width: 50px;
      height: 50px;
    }
    .card-right {
      width: 70%;
      .title {
        font-weight: bold;
        font-size: 14px;
      }
      .des {
        color: #666;
        margin-top: 10px;
        font-size: 12px;
      }
      .tags {
        margin-top: 10px;
        .el-tag {
          margin-left: 10px;
          margin-bottom: 10px;
          padding: 0 7px;
        }
      }
    }
  }
}
</style>
