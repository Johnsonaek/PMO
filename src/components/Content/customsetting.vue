<template>
  <div class="custom-setting">
    <el-dialog
      :visible.sync="dialogVisible"
      width="340px"
      :before-close="handleClose">
      <span slot="title" class="dialog-header">
        自定义显示
      </span>
      <div>
        <span class="title">请勾选需要在列表显示的数据</span>
        <el-tree
          :data="treeData"
          show-checkbox
          node-key="id"
          default-expand-all
          :default-checked-keys="defaultKeys"
          ref="tree"
          >
        </el-tree>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary">保存</el-button>
        <el-button @click="close">关闭</el-button>
      </span>
    </el-dialog> 
  
  </div>    
</template>

<script>
import util from '@/utils/util.js';


  export default {
    
    props: ['defaultKeys'],
    data() {
      return {
        dialogVisible: true,
      }
    },
    computed: {
      treeData() {
        return util.getUserDefinedList();
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？').then(_ => {
          done();
          this.changeUserStatus();
        }).catch(_ => {});
      },
      close() {
        this.changeUserStatus();
        this.dialogVisible = false;
      },
    // save() {
        /*获取被选中节点的key组成的数组（true表示叶子节点）*/
      /*  let keyArr = this.$refs.tree.getCheckedKeys(true);
        setUserDefined({userDefine: keyArr}).then(res => {
          console.log(res);
          this.changeUserStatus();
        });
        this.dialogVisible = false;
    },*/
      changeUserStatus() {
        this.$emit('changeUserStatus', false);
      }
    }
  }
</script>

<style lang="scss">
  .custom-setting {
    /* 固定宽度 */
  /*  .el-dialog {
      width: 340px !important;
    }*/
    .el-dialog__header {
      border-bottom: 1px solid #e5e5e5;
      font-size: 16px;
      .el-icon-close {
        &:before {
          font-size: 16px;
        }
      }
    }
    .el-dialog__body {
      padding: 10px 20px;
      text-align: center;
    }
    .el-dialog__footer {
      padding: 10px 20px;
      border-top: 1px solid #eee;
    }
    .el-tree {
      background: #eee;
      height: 334px;
      overflow-y: scroll;
      margin-top: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .el-button--primary {
      background-color: #107CD6;
      border-color: #107CD6;
    }
    .el-button {
      padding: 8px 15px;
    }
    .title {
      display: inline-block;
      font-size: 14px;
      height: 20px;
      width: 210px;
      color: #666;
    }
  }
</style>

