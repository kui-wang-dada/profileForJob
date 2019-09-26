<!-- @format -->

<!--@format
 by: wk 2018/12/18
 name: 
 备注:
-->
<template>
  <el-tabs type="border-card">
    <el-tab-pane label="基本信息">
      <el-row type="flex">
        <el-col :span="5" :style="{ alignSelf: 'center' }">
          <img src="@/assets/images/avatar.jpg" class="avatar" />
          <div style="padding: 14px;">
            <el-col
              class="avatar-body"
              :span="24"
              v-for="item in avatarData"
              :key="item.label"
              :style="item.style"
            >
              <span>{{ item.label }}</span
              >: <span>{{ item.result }}</span>
            </el-col>
          </div>
        </el-col>
        <el-col :span="6">
          <el-card class="base">
            <div slot="header" style="font-weight:bold">基本信息</div>
            <el-col
              class="base-body"
              :span="24"
              v-for="item in baseData"
              :key="item.label"
              :style="item.style"
            >
              <span>{{ item.label }}</span
              >: <span>{{ item.result }}</span>
            </el-col>
          </el-card>
        </el-col>
        <el-col :span="13">
          <el-card class="edu">
            <div slot="header" style="font-weight:bold">技术栈</div>
            <el-col
              class="edu-body"
              :span="24"
              v-for="item in eduData"
              :key="item.label"
              :style="item.style"
            >
              <span>{{ item }}</span>
            </el-col>
          </el-card>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="工作经验">
      <el-col :span="24">
        <el-card class="work-card">
          <div slot="header">
            <p>云里服务有限公司</p>
            <p>2016/5——2017/2</p>
          </div>
          <div v-for="item in workData.yunli" :key="item.title">
            <p class="title">{{ item.title }}</p>
            <div class="body-wrap">
              <p class="body" v-for="bodyItem in item.body" :key="bodyItem">
                {{ bodyItem }}
              </p>
            </div>
            <div class="tag-wrap">
              <el-tag v-for="tag in item.skill" :key="tag">{{ tag }}</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="work-card">
          <div slot="header">
            <p>悠然一指有限公司</p>
            <p>2017/3——2018/3</p>
          </div>
          <div v-for="item in workData.youran" :key="item.title">
            <p class="title">{{ item.title }}</p>
            <div class="body-wrap">
              <p class="body" v-for="bodyItem in item.body" :key="bodyItem">
                {{ bodyItem }}
              </p>
            </div>
            <div class="tag-wrap">
              <el-tag v-for="tag in item.skill" :key="tag">{{ tag }}</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="work-keda-card">
          <div slot="header">
            <p>科大讯飞有限公司</p>
            <p>2018/4——至今</p>
          </div>
          <div class="keda-top">
            <div>
              <p class="title">{{ workData.keda[0].title }}</p>
              <div class="body-wrap">
                <p
                  class="body"
                  v-for="bodyItem in workData.keda[0].body"
                  :key="bodyItem"
                >
                  {{ bodyItem }}
                </p>
              </div>
              <div class="tag-wrap">
                <el-tag v-for="tag in workData.keda[0].skill" :key="tag">{{
                  tag
                }}</el-tag>
              </div>
            </div>
            <div>
              <p class="title">{{ workData.keda[1].title }}</p>
              <div class="body-wrap">
                <p
                  class="body"
                  v-for="bodyItem in workData.keda[1].body"
                  :key="bodyItem"
                >
                  {{ bodyItem }}
                </p>
              </div>
              <div class="tag-wrap">
                <el-tag v-for="tag in workData.keda[1].skill" :key="tag">{{
                  tag
                }}</el-tag>
              </div>
            </div>
          </div>
          <div class="keda-bottom">
            <p class="title">{{ workData.keda[2].title }}</p>
            <div class="body-wrap">
              <p
                class="body"
                v-for="bodyItem in workData.keda[2].body"
                :key="bodyItem"
              >
                {{ bodyItem }}
              </p>
            </div>
            <div class="tag-wrap">
              <el-tag v-for="tag in workData.keda[2].skill" :key="tag">{{
                tag
              }}</el-tag>
            </div>
          </div>
          <div class="keda-bottom">
            <p class="title">{{ workData.keda[3].title }}</p>
            <div class="body-wrap">
              <p
                class="body"
                v-for="bodyItem in workData.keda[3].body"
                :key="bodyItem"
              >
                {{ bodyItem }}
              </p>
            </div>
            <div class="tag-wrap">
              <el-tag v-for="tag in workData.keda[3].skill" :key="tag">{{
                tag
              }}</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-tab-pane>
    <el-tab-pane label="个人项目">
      <el-col
        :span="11"
        v-for="item in projectData"
        :key="item.title"
        class="project-wrap"
      >
        <el-card>
          <p class="title">{{ item.title }}</p>
          <div class="body-wrap">
            <p class="body" v-for="bodyItem in item.body" :key="bodyItem">
              {{ bodyItem }}
            </p>
          </div>
          <div class="tag-wrap">
            <el-tag v-for="tag in item.skill" :key="tag">{{ tag }}</el-tag>
          </div>
        </el-card>
      </el-col>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { profile } from './mockData';
export default {
  components: {},

  props: {},

  computed: {},

  data() {
    return {
      avatarData: profile.avatarData,
      baseData: profile.baseData,
      eduData: profile.eduData,
      workData: profile.workData,
      projectData: profile.projectData
    };
  },

  created() {
    console.log('profile', profile);
  },

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
@import '../../../../assets/css/mixin.less';
.avatar {
  width: 150px;
  height: 200px;
}
.avatar-body {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
  span {
    display: inline-block;
    margin: 10px;
  }
}
.el-col {
  padding: 0 15px;
}
.base {
  // .display-flex(center, flex-start, column);
  .base-body {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    span {
      display: inline-block;
      margin: 10px;
    }
  }
}
.edu {
  .edu-body {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    // margin-bottom: 10px;
    span {
      display: inline-block;
      margin: 10px;
    }
  }
}
.work-card {
  display: flex;
  flex-direction: row;
  /deep/.el-card__header {
    align-self: center;
    font-size: 18px;
    font-weight: bold;
  }
  /deep/.el-card__body {
    flex: 1;
    .display-flex(space-around);
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left;
  }
  .body-wrap {
    font-size: 14px;
    text-align: left;
    margin-bottom: 10px;
    .body {
      margin-bottom: 5px;
    }
  }
  .tag-wrap {
    .el-tag {
      margin-left: 10px;
    }
  }
}
.work-keda-card {
  display: flex;
  flex-direction: row;
  /deep/.el-card__header {
    align-self: center;
    font-size: 18px;
    font-weight: bold;
  }
  /deep/.el-card__body {
    flex: 1;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left;
  }
  .body-wrap {
    font-size: 14px;
    text-align: left;
    margin-bottom: 10px;
    .body {
      margin-bottom: 5px;
    }
  }
  .tag-wrap {
    .el-tag {
      margin-left: 10px;
    }
  }
  .keda-top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .keda-bottom {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.project-wrap {
  margin-bottom: 20px;
  .el-card {
    min-height: 200px;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left;
  }
  .body-wrap {
    font-size: 14px;
    text-align: left;
    margin-bottom: 10px;
    .body {
      margin-bottom: 5px;
    }
  }
  .tag-wrap {
    .el-tag {
      margin-left: 10px;
    }
  }
}
</style>
