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
    max-height: 400px;
  //  overflow: auto;

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
</style>