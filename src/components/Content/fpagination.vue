<template>
<div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentpage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      >
    </el-pagination>
  </div>
</template>
<script>
  export default {
    props: [
      'total',
      'pagesize',
      'currentPage'

    ],
    methods: {
      handleSizeChange(val) {
        this.$emit('handleSizeChange', val);
        this.pageSize = val;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.$emit('handleCurrentChange', val);
        this.currentpage = val;
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return{
        currentpage: this.currentPage,
        pageSize: this.pagesize,
       // total: this.total
      };
      }
    
  }
</script>