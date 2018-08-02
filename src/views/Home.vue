<template>
  <div class="home">
         <!--<div id="search" style="margin-top: 15px; width:400px;">
           <el-input type="search" v-model="search" placeholder="项目编号/商机编号/项目名称/项目经理" >
             <el-button slot="append" icon="el-icon-search"></el-button>
             <el-button type="primary" icon="el-icon-search">搜索</el-button>
           </el-input>
           <el-button type="primary" icon="el-icon-plus" class="btn" @click="addPage"></el-button>
           </div>-->
      
   <Table></Table>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Content/table.vue'
import Footer from '@/components/footer.vue'


export default {
  name: 'home',
  components: {
    Table,
    Footer
  },
  methods: {
   // addPage: function () {
   //     this.$router.push({ path: '/addpage'});
	//	} 
  },
  computed: {
        // 实时监听表格
        /*    tables: function() {
                const search = this.search
                if (search) {
                    return this.tableData.filter(dataNews => {
                        return Object.keys(dataNews).some(key => {
                            return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                return this.tableData
            }*/
        }

       
 }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>