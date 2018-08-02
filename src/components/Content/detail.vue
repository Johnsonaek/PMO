<template>
  <div class="detail-wrap" :data="newOrderDetail">
    <ul>
      <li><span>项目通称：</span>{{newOrderDetail.projectalias}}</li>
      <li><span>项目编号：</span>{{newOrderDetail.projectid}}</li>
      <li><span>合同编号：</span>{{newOrderDetail.contractno}}</li>
      <li><span>合同签订时间：</span>{{newOrderDetail.starttime}}</li>
      <li><span>采购方式：</span>{{newOrderDetail.purchasetype}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      newOrderDetail: {
        type: Object,
       // default: null
      }
    },
    data() {
      return {
        loading: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .detail-wrap ul {
    max-height: 500px;
    font-size: 10px;
    text-align: left;
    //overflow: auto;
    padding-left: 150px;
    li {
     // position: relative;
      padding: 8px;
      font-size: 1rem;

      span {
       // position: absolute;
        width: 20px;
      }

      & > div {
        margin-left: 50px;
      }
    }
  }

  .el-dialog__body {
    padding: 0px 20px 30px 20px !important;
  }
  .el-dialog__header {
    padding: 10px 0 10px 0 !important;
  }
</style>
<style>
.el-dialog__body {
    padding: 0px 20px 30px 20px !important;
  }
  .el-dialog__header {
    padding: 10px 0 10px 0 !important;
  }
</style>