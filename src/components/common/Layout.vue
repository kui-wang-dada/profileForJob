<!-- @format -->

<!--@format
 by: wk 2018/12/18
 name: 
 备注:
-->
<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">勤读力耕，立己达人</div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">敢为人先，追求卓越</div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          :default-active="$route.name"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="profile">
            <i class="el-icon-edit"></i>
            <span slot="title">个人简历</span>
          </el-menu-item>
          <el-menu-item index="project">
            <i class="el-icon-view"></i>
            <span slot="title">项目实例</span>
          </el-menu-item>
          <el-menu-item @click="goToBlog">
            <i class="el-icon-document"></i>
            <span slot="title">个人博文</span>
          </el-menu-item>
          <el-menu-item index @click="goToBook">
            <i class="el-icon-document"></i>
            <span slot="title">简书</span>
          </el-menu-item>
          <el-menu-item index @click="goToGithub">
            <i class="el-icon-document"></i>
            <span slot="title">Github</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- <el-breadcrumb separator="/">
          <el-breadcrumb-item
            :to="{ path: item.path }"
            v-for="item in bread"
            :key="item.path"
            >{{ item.title }}</el-breadcrumb-item
          >
        </el-breadcrumb> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {},

  props: {},

  computed: {
    bread() {
      return this.$route.matched.map(item => {
        return Object.assign({}, item.meta, { path: item.path });
      });
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {
    console.log(this.$route);
  },

  methods: {
    goToBlog() {
      window.open('http://www.dadafastrun.com/blog/');
    },
    goToBook() {
      window.open('https://www.jianshu.com/u/3052cc751713');
    },
    goToGithub() {
      window.open('https://github.com/wangkui1991');
    },
    handleOpen() {},
    handleClose() {}
  }
};
</script>
<style lang="less" scoped>
.el-header {
  padding: 0;
}
.el-row {
  margin-bottom: 20px;
  height: 100%;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  height: 100%;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 100%;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
