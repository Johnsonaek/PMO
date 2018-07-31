<template>
  <div class="home">
     <div class="info" style="height: 80px">
         <div class="title">生产调度-项目清单</div>
         <div id="search" style="margin-top: 15px; width:400px;">
           <!--<el-input type="search" v-model="search" placeholder="项目编号/商机编号/项目名称/项目经理" >
             <el-button slot="append" icon="el-icon-search"></el-button>
             <el-button type="primary" icon="el-icon-search">搜索</el-button>
           </el-input>-->
           <el-button type="primary" icon="el-icon-plus" class="btn" @click="addPage"></el-button>
         </div>
      </div>
   <Table></Table>
   <Pagination></Pagination>
    <router-view/>
 
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Htab from '@/components/Content/htab.vue'
//import Hlabel from '@/components/Content/hlabel.vue'
import Table from '@/components/Content/table.vue'
import Pagination from '@/components/Content/fpagination.vue'
import Footer from '@/components/footer.vue'
//import pTable from '@/components/Content/ptable.vue'

export default {
  name: 'home',
  components: {
    Htab,
  //  Hlabel,
   // pTable,
    Table,
    Pagination,
    Footer
  },
  methods: {
    addPage: function () {
        this.$router.push({ path: '/addpage'});
		} 
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
.title {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  margin-left: 60px;
  position: relative;

}

.info{
  position: relative;
  height: 100px;
}
.left .right{
  float: left;
}

#search{
   position: absolute;
   height:auto;
   right:82px;
   top:0;
}
/*.title{
            width: 173px;
            /* height: 23px; 
           / position: relative;
            top: 21px;
            left: 28px;
            font-size: 20px;
            font-family: "Microsoft YaHei";

}*/
 .search{
         position: relative;

 }
 .btn{
         position: absolute;
        top: -1px;
        left: 398px;
 }


.htab {
  margin-left: 60px;
  margin-bottom: 20px;
  margin-right: 60px;
}

.hlabel {
  margin-left: 30px;
  margin-bottom: 20px;
  margin-right: 30px;
}



.topNav{
  width: 100%;
  background: #ED4040;
  position: fixed;
  top:0rem;
  left: 0;
  z-index: 10;
}
.simpleNav{
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: '微软雅黑';
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar{height:0px}
.simpleNavBar{
  display: inline-block;
  width: 1.2rem;
  color:#fff;
  font-size:0.3rem;
}
.navActive{
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder{
  width:100%;
  height: 1rem;
}
</style>