<!-- @format -->

<!--@format
 by: wk 2018/12/18
 name: 
 备注:
-->
<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="ReactNative">
        <el-col :span="8" v-for="(item, index) in ReactNative" :key="index">
          <el-card>
            <div @click="goToProject(item)">
              <img
                :src="require('@/assets/images/' + item.image)"
                alt
                class="image"
              />
              <p class="title">{{ item.title }}</p>
              <p class="des">{{ item.des }}</p>
            </div>
          </el-card>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="Vue">
        <el-col :span="8" v-for="(item, index) in Vue" :key="index">
          <el-card>
            <div @click="goToProject(item)">
              <img
                :src="require('@/assets/images/' + item.image)"
                alt
                class="image"
              />
              <p class="title">{{ item.title }}</p>
              <p class="des">{{ item.des }}</p>
            </div>
          </el-card>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="Node">
        <el-col :span="8" v-for="(item, index) in Node" :key="index">
          <el-card>
            <div @click="goToProject(item)">
              <img
                :src="require('@/assets/images/' + item.image)"
                alt
                class="image"
              />
              <p class="title">{{ item.title }}</p>
              <p class="des">{{ item.des }}</p>
            </div>
          </el-card>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="Egret">
        <el-col :span="8" v-for="(item, index) in Egret" :key="index">
          <el-card>
            <div @click="goToProject(item)">
              <img
                :src="require('@/assets/images/' + item.image)"
                alt
                class="image"
              />
              <p class="title">{{ item.title }}</p>
              <p class="des">{{ item.des }}</p>
            </div>
          </el-card>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="NW">
        <el-col :span="8" v-for="(item, index) in Nw" :key="index">
          <el-card>
            <div @click="goToProject(item)">
              <img
                :src="require('@/assets/images/' + item.image)"
                alt
                class="image"
              />
              <p class="title">{{ item.title }}</p>
              <p class="des">{{ item.des }}</p>
            </div>
          </el-card>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="微信小程序">
        <el-col :span="8" v-for="(item, index) in Wechat" :key="index">
          <el-card>
            <div @click="goToProject(item)">
              <img
                :src="require('@/assets/images/' + item.image)"
                alt
                class="image"
              />
              <p class="title">{{ item.title }}</p>
              <p class="des">{{ item.des }}</p>
            </div>
          </el-card>
        </el-col>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { ReactNative, Vue, Node, Egret, Nw, Wechat } from './mockData';
export default {
  components: {},

  props: {},

  computed: {},

  data() {
    return {
      ReactNative,
      Vue,
      Node,
      Egret,
      Nw,
      Wechat
    };
  },

  created() {},

  mounted() {},

  methods: {
    goToProject(item) {
      if (item.image.includes('wechat')) {
        return;
      }
      if (item.local) {
        this.$router.push({
          path: `/project/${item.image}`
        });
        return;
      }
      let baseUrl = `http://www.dadafastrun.com/${item.image}/`;
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
  width: auto;
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
