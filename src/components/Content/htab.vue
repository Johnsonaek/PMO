<template>
 <div class="htab">
    <el-radio-group v-model="radio3" @change="changeRadio">
      <el-radio-button label="all">全部</el-radio-button>
      <el-radio-button label="unfinished">未结项</el-radio-button>
      <el-radio-button label="finished">已结项</el-radio-button>
      <el-radio-button label="attention">我关注的</el-radio-button>
    </el-radio-group>
 </div>
</template>
<script>
  export default {
    props: [
      'radio'
    ],
    data() {
      return {
        radio3: 'all'
      };
    },
    methods: {
      handleClick(row) {
          console.log(row);
      },
      changeRadio(val) {
        this.radio3 = val;
        console.log(val);
        this.$emit('changeRadio', val)
      }
    }
  };
</script>