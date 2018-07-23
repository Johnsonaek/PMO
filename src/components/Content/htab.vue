<template>
 
    <el-radio-group v-model="radio3">
      <el-radio-button label="全部"></el-radio-button>
      <el-radio-button label="未结项"></el-radio-button>
      <el-radio-button label="已结项"></el-radio-button>
      <el-radio-button label="我关注的"></el-radio-button>
    </el-radio-group>
 <!-- <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first"></el-tab-pane>
    <el-tab-pane label="未结项" name="second"></el-tab-pane>
    <el-tab-pane label="已结项" name="third"></el-tab-pane>
    <el-tab-pane label="我关注的" name="fourth"></el-tab-pane>
  </el-tabs>-->
 
</template>
<script>
  export default {
    data() {
      return {
        radio3: '全部'
      };
    },
    methods: {
      handleClick(row) {
                      console.log(row);
                        }
    }
  };
</script>