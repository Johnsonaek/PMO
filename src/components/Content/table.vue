/* eslint-disabled */
<template>
  <div class="table">
        <el-table 
                border
                stripe
                :data="tableData1"
                style="width: 100%"
                max-height=700
                :default-sort="{prop: 'startTime', order: 'descending'}"
                >
            <!-- 地址 -->
                <el-table-column label="项目通称"   header-align="center"  fixed  width="200">
                   
                    <template slot-scope="scope" >    
                        <span class="col-cont" v-html="showDate(scope.row.projectAlias)" ></span>
                    </template>
                </el-table-column>
                <!-- 用户名 -->
                <el-table-column label="商机编号/项目编号" header-align="center" width="150" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectId)" ></span>
                    </template>
                </el-table-column>
                <!-- 地址 -->
                <el-table-column label="合同编号" header-align="center" width="300">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.contractNo)" ></span>
                    </template>
                </el-table-column>
                 <el-table-column 
                  prop="startTime" 
                label="合同签订时间" 
                sortable 
                header-align="center" 
                width="160"
                 >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.startTime)" ></span>
                    </template>
                </el-table-column>

                <el-table-column 
                prop="purchaseType" 
                  label="采购方式" 
                  header-align="center"
                   width="120" 
                   :filters="[{text: '单一来源', value: '单一来源'}, {text: '公开招标', value: '公开招标'}, {text: '比选', value: '比选'}, {text: '框架协议', value: '框架协议'}]" 
                   :filter-method="filterHandler"
                >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.purchaseType)" ></span>
                    </template>
                </el-table-column>   
                <el-table-column label="工期要求" header-align="center"  width="200">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.onlineTime)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column label="项目名称" header-align="center"  width="300">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectName)" ></span>
                    </template>
                </el-table-column>  
                <el-table-column label="项目类型" header-align="center"  width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectType)" ></span>
                    </template>
                </el-table-column>  

                 <el-table-column label="项目启动时间" header-align="center" width="200" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.startTime)" ></span>
                    </template>
                </el-table-column>  
                <el-table-column label="项目金额" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectPrice)" ></span>
                    </template>
                </el-table-column>  

                 <el-table-column 
                  prop="projectLevel"
                label="项目级别" 
                header-align="center" 
                width="120" 
                :filters="[{text: '重大', value: '重大'}, {text: '重点', value: '重点'}, {text: '一般', value: '一般'}]" 
                :filter-method="filterHandler">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectLevel)" ></span>
                    </template>
                </el-table-column> 
                
                <el-table-column 
                prop="projectClassify"
                label="项目分类" 
                header-align="center" 
                width="120" 
                :filters="[{text: '平台类', value: '平台类'}, {text: '应用类', value: '应用类'}, {text: '运营类', value: '运营类'}, {text: '咨询类', value: '咨询类'}, {text: '分析类', value: '分析类'}]" 
                :filter-method="filterHandler">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectClassify)" ></span>
                    </template>
                </el-table-column>  

                 <el-table-column label="公司名称（客户）" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.customerName)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="部门名称（客户）" header-align="center" width="160" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.customerDepartmentName)" ></span>
                    </template>
                </el-table-column>  

                 <el-table-column label="二级经理（客户）" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.lever2Manager)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column label="三级经理（客户）" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.lever3Manager)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column label="员工（客户）" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.customerStaffName)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column label="主要联系人" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.customerPrimaryContact)" ></span>
                    </template>
                </el-table-column>  

                <el-table-column 
                 prop="teams" 
                label="涉及小组" 
                header-align="center" 
                width="120" 
                :filters="[{text: 'I3', value: 'I3'},{text: '方案1组', value: '方案1组'},{text: 'SE', value: 'SE'}, {text: '移动应用组', value: '移动应用组'}, {text: 'DA', value: 'DA'}, {text: 'CD', value: 'CD'}, {text: '平台组', value: '平台组'}]"
                :filter-method="filterHandler">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.teams)" ></span>
                    </template>
                </el-table-column> 

                <el-table-column 
                prop="involvedRegion"
                label="涉及区域" 
                header-align="center" 
                width="120" 
                :filters="[{text: '北支', value: '北支'}, {text: '上支', value: '上支'}, {text: '成支', value: '成支'}, {text: '广支', value: '广支'}]" 
                :filter-method="filterHandler">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.involvedRegion)" ></span>
                    </template>
                </el-table-column> 
                
                <el-table-column label="销售经理" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.saleManager)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="区域大项目经理" header-align="center" width="160" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.areaProjectManager)" ></span>
                    </template>
                </el-table-column> 
                <el-table-column label="区域解决方案经理" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.regionalSolManager)" ></span>
                    </template>
                </el-table-column> 
                <el-table-column label="产品部项目经理" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectManagerId)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="实施经理" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.implementManager)" ></span>
                    </template>
                </el-table-column> 

                <el-table-column label="研发经理" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.developManager)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="测试经理" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.testManager)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="服务经理" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.serviceManager)" ></span>
                    </template>
                </el-table-column> 

                <el-table-column label="商务状态" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.commerceStatus)" ></span>
                    </template>
                </el-table-column> 

                 <el-table-column label="实施依据" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.implementBases)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="实施状态" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.implementStatus)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="研发状态" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.developStatus)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="上线状态" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.onlineStatus)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="交维状态" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.operateStatus)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="当前进展" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.currentProgress)" ></span>
                    </template>
                </el-table-column>
                <el-table-column label="近期计划" header-align="center"  width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.recentPlan)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="进度(%) 0~100" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.progress)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="当前风险度" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.pressure)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="当前风险及应对措施" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.countermeasures)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="上月工时投入" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.lastMonthWorkTime)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="总工时投入" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.totalWorkTime)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="下一里程碑" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectPrice)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="计划完成时间" header-align="center" width="120" >
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.planFinishedTime)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="里程碑是否逾期" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.isOverdue)" ></span>
                    </template>
                </el-table-column>

                 <el-table-column label="已回款比例" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.confirmedProgress)" ></span>
                    </template>
                </el-table-column>
                 <el-table-column label="金融得分" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.moneyScore)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="战略意义得分" header-align="center" width="160">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectPrice)" ></span>
                    </template>
                </el-table-column>
                
                <el-table-column label="产品匹配度得分" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.projectPrice)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="总分" header-align="center" width="120">
                    <template slot-scope="scope">
                        <span class="col-cont" v-html="showDate(scope.row.totalScore)" ></span>
                    </template>
                </el-table-column>

                <el-table-column label="产品节点" header-align="center" width="150">
                    <template slot-scope="scope">
                        <el-button
                              type="text"
                              size="small">
                              查看详情
                            </el-button>
                    </template>
                </el-table-column>     
                 <el-table-column label="操作" header-align="center"  fixed="right" width="150">
                    <template slot-scope="scope">
                        <el-button
                              type="text"
                              size="small">
                              详情
                            </el-button>
                             <el-button
                              type="text"
                              size="small">
                              评分
                            </el-button>
                             <el-button
                              type="text"
                              size="small">
                              关注
                            </el-button>
                    </template>
                </el-table-column>     
            </el-table>
<Pagination
@handleSizeChange="getSize"
@handleCurrentChange="getCurrent" 
:current-page="currentPage"
:page-size="pagesize"
:total='total'
>
</Pagination>         
  </div>
</template>
<script>

import axios from 'axios';
import mock from '../../mock/mock.js';
import Pagination from '@/components/Content/fpagination.vue';


export default {
        //name: 'Body',
       // props: ['total', 'pagesize', 'currentPage'],
        data() {
            return {
                tableData: [],
                total: 0,
                pagesize: 10,
                currentPage: 1,
                pageCount: 0,
                radio3: '全部'
            }
        },
        components: {
           Pagination
        },
        computed: {
        // 实时监听表格
            /*tables: function() {
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
             tableData1: function() {
            //  this.tableData = this.tableData.slice((currentPage-1)*pagesize, currentPage*pagesize);
              console.log("enter");
              console.log(this);
              return this.tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize);
            }



        },
		
        created: function() {
             console.log(this.total);
           //  let that = this;
             console.log("2");
             axios.get('/table/list').then((res)=> {
                 console.log("1")
             //  that.tableData = res.data.articles
              this.tableData = res.data.articles;
              this.total = res.data.articles.length;
              // that.total = res.data.articles.length
               //console.log(this.total);
         })
        },
       
        methods: {
            // 筛选变色
            showDate(val) {
                val = val + '';
                if (val.indexOf(this.search) !== -1 && this.search !== '') {
                    return val.replace(this.search, '<font color="#409EFF">' + this.search + '</font>')
                } else {
                    return val
                }
            },
            addPage: function () {
                        this.$router.push({ path: '/addpage'});
						},
                          
                        handleClick(row) {
                      console.log(row);
                        },
                        filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
       getSize(val) {
                this.pagesize = val;

            },
            getCurrent(val) {
                this.currentPage = val;
            },
                   
       
       tablePagination(data=[]){
      /**
       * 表格数据分页的方法
       */
     let array = [], startNum=0, endNum = 0;
      this.total = data.length;
      startNum = (this.currentPage-1)*this.pageSize;
      if(this.currentPage*this.pageSize<this.total){
          endNum = this.currentPage*this.pageSize;
      } else {
          endNum = this.total;
      }
      array = data.slice(startNum, endNum);
      return array;
        }
                   
        }

     }


</script>
<style scoped lang="scss">
.table {
   width: 1366px;
   height: 768px;
   min-width: 1366px;
   min-height: 768px;
   margin: 0 auto;
   text-align: center;
}
.info{
  position: relative;
  height: 100px;
}
#search{
   position: absolute;
   height:auto;
   right:82px;
   top:0;
}
.title{
            width: 173px;
            /* height: 23px; */
            position: relative;
            top: 21px;
            left: 28px;
            font-size: 20px;
            font-family: "Microsoft YaHei";

}
 .search{
         position: relative;

 }
 .btn{
         position: absolute;
        top: -1px;
        left: 398px;
 }
 el-tab td {
     padding: 5px 0 !important;
 }
 
</style>



