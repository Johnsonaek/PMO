<template>
  <div class="hlabel">
    <el-tag
     :key="tag"
     v-for="tag in dynamicTags"
     closable
     :disable-transitions="false"
     @close="handleClose(tag)">
        {{tag}}
    </el-tag>
  </div>
</template>

<style scoped lang="scss">
  .hlabel {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    .el-tag {
     // margin: 0 10px;
      flex: 10%;
     // padding: 0 10px;
    }
    .tag-wrapper {
      flex: 12.5%;
      padding: 0 40px;
     // margin: 0 20px;

    }
  }

  /*.el-tag {
   // display: inline !important;
    margin-left: 10px;
    height: 40px;

line-height: 40px;

-webkit-box-flex: 1.0;

-moz-box-flex:1.0;

 //box-flex:1.0;
  }*/
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三', '标签四','标签五', '标签六', '标签七', '标签八'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>