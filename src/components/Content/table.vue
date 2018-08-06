/* eslint-disabled */
<template>
 <div class="pmo-content">
   <div class="pmo-content-header">
     <div class="pmo-content-header-left">生产调度-项目清单</div>
     <div class="pmo-content-header-right">
        <el-input class="h-input" type="search" v-model="search" placeholder="搜索关键字">
             <el-button slot="append" icon="el-icon-search" @click="searchdata"></el-button>
            <!-- <el-button type="primary" icon="el-icon-search" @click="searchdata">搜索</el-button>-->
        </el-input>
    </div>
   </div>
   <div class="pmo-tab">
      <div class="pmo-content-header-left">
         <Tab @changeRadio="getRadioValue"></Tab>
      </div>
      
      <div class="pmo-content-header-right">
             <span class="h-font" @click="customize">
               <i class="iconfont el-icon-setting"></i>自定义显示
             </span>      
      </div>
     </div>
       <div class="pmo-tags">
         <filterBox :tagArr="tags" @deleteTag="deleteTagFilter"></filterBox>
       </div>
      
      <div class="table">
       <el-table
                border
                stripe
                ref="mytable"
                fit
                @filter-change="handleFilterChange"
                :data="tempData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                style="width: 100%"
                max-height=450
                class="self-table"
                @sort-change="handleSortchange"
                >
          <el-table-column
            header-align="center"
            v-for="(column, index) in columnAll" 
            :key="index"
            :prop="column.prop"
            :label="column.label"
            :width="column.width"
            :render-header="column.render"
            :fixed="column.fixed"
            :sortable="column.sortable"
            :column-key="column.columnKey"
            :filters="column.filters"
            :filter-method="filterHandler"
          >
          <template slot-scope="scope">
           <span>
            {{scope.row[column.prop]}}
           </span>
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
                 <el-table-column 
                 label="操作" 
                 header-align="center"  
                 fixed="right" 
                 width="150"
                 prop="state"
                 >
                    <template slot-scope="scope">
                        <el-button
                              type="text"
                              size="small"
                              @click="showDetail(scope.$index, scope.row)"
                              >
                              详情
                            </el-button>
                             <el-button
                              type="text"
                              size="small"
                              @click="handleScore(scope.$index, scope.row)">
                              评分
                            </el-button>
                             <el-button
                              type="text"
                              size="small"
                              @click="handleQuit(scope.$index, scope.row)">
                              {{scope.row.state ? '关注': '取消'}}
                            </el-button>
                    </template>
                </el-table-column>     
           </el-table>
         
           <Pagination
              ref="myPagination"
              @handleSizeChange="getPageSize"
              @handleCurrentChange="getCurrentPage" 
              :current-page="currentPage"
              :page-size="pagesize"
              :total='total'
            >
            </Pagination>
         </div>
            <el-dialog 
            :visible.sync="detailVisible" :modal="true" width="800px">
              <h2 slot="title">详情</h2>
              <detail ref="newOrderDetail" :newOrderDetail="newOrderDetail"></detail>
            </el-dialog> 

        <customSetting 
          v-if="customVisible" 
          @changeUserStatus="changeStatus" 
          :defaultKeys="['projectAlias','contractNo','signContractTime','purchaseType']">
        </customSetting >

        <Score 
        v-if="scoreVisible" 
        @closeScore="closeScore" 
        :moneyScore="moneyScore" 
        :id="id">
        </Score>        
          </div>
</template>
<script>

import axios from 'axios';
import mock from '../../mock/mock.js';
import Pagination from '@/components/Content/fpagination.vue';
import expand from '@/components/Content/expand.vue';
import Tab from '@/components/Content/htab.vue';
import detail from '@/components/Content/detail.vue';
import filterBox from '@/components/Content/filteredbox.vue';
import customSetting from '@/components/Content/customsetting.vue';
import Score from '@/components/Content/scoring.vue';
import moment from 'moment'
export default {
        data() {
            return {
                tableData: [],  //存放原始数据
                tempData: [],   //存放经过删选的数据
                listData: [],   //存放tab切换的数据
                total: 0,       //记录数量统计，分页total
                pagesize: 10,   
                currentPage: 1,
               // pageCount: 0,
                radio: 'all',   //tab值
               // radioTable: '',
                columnAll: [    //column属性值
                   {
                      fixed: 'left',
                      prop: 'projectName',
                      label: '项目名称',
                      width: 260  
                    },
                    {
                      prop: 'projectId',
                      label: '商机编号/项目编号',
                      width: 160  
                    },{
                      prop: 'projectAlias',
                      label: '项目通称',
                      width: 200,
                    },
                    {
                      prop: 'contractNo',
                      label: '合同编号',
                      width: 260  
                    },{
                    //  sortable: 'true',
                      prop: 'signContractTime',
                      label: '合同签订时间',
                      width: 160 ,
                      render: (h, {column, $index }) => {
                          return (
                             <div class="sort-table-header-wrapper">
                                <span style="float: left">{column.label}</span>
                                <span class="caret-wrapper">
                                  <i class="sort-caret ascending" on-click={() => this.handleSortchange({column:column, prop:column.property, order:'ascending'})}></i>
                                  <i class="sort-caret descending" on-click={() => this.handleSortchange({column:column, prop:column.property, order:'descending'})}></i>
                                </span>
                                <span class="el-table_column-filter-trigger" on-click={() => this.timefilter(column)}>
                                 <el-date-picker
                                 unlink-panels={true}
                                 type="daterange"
                                 picker-options={this.pickerOptions2}
                                style="width: 1px; border: none">
                                </el-date-picker>
                               </span>
                            </div>
                          ) 
                      }

                    },{
                      prop: 'purchaseType',
                      label: '采购方式',
                      width: 120,
                      columnKey: 'purchaseType',
                      filters: [
                        {
                          text: '单一来源', 
                          value: '单一来源'
                        }, {
                          text: '公开招标', 
                          value: '公开招标'
                        }, {
                          text: '比选', 
                          value: '比选'
                        }, {
                          text: '框架协议', 
                          value: '框架协议'
                        }]  
                    },{
                      prop: 'onlineTime',
                      label: '工期要求',
                      width: 160,
                      render: (h, {column, $index }) => {
                          return (
                             <div class="sort-table-header-wrapper">
                             <span style="float: left">{column.label}</span>
                                <span class="el-table_column-filter-trigger" on-click={() => this.timefilter(column)}>
                                 <el-date-picker
                                 unlink-panels={true}
                                 type="daterange"
                                 picker-options={this.pickerOptions2}
                                style="width: 1px; border: none">
                                </el-date-picker>
                               </span>
                            </div>
                          ) 
                      }  
                    },{
                      prop: 'projectType',
                      label: '项目类型',
                      width: 120,
                      columnKey: 'projectType',
                      filters: [
                        {
                           text:'集团产品研发类',
                           value:'集团产品研发类'
                        },{
                           text:'集团委托应用研发类',
                           value:'集团委托应用研发类'
                        },{
                           text:'市场类（内部）',
                           value:'市场类（内部）'
                        },{
                            text:'市场类（外部）',
                            value:'市场类（外部）'
                        }] 
                    },{
                      prop: 'startTime',
                      label: '项目启动时间',
                      width: 160  
                    },{
                      prop: 'projectPrice',
                      label: '项目金额',
                      width: 120  
                    },{
                      prop: 'projectLevel',
                      label: '项目级别',
                      width: 120,
                      columnKey: 'projectLevel',
                      filters: [
                        {
                          text: '重大',
                          value: '重大'
                        }, {
                          text: '重点', 
                          value: '重点'
                        }, {
                          text: '一般', 
                          value: '一般'
                        }] ,
                        columnKey: 'projectPrice'
                    },{
                      prop: 'projectClassify',
                      label: '项目分类',
                      width: 120,
                      columnKey: 'projectClassify',
                      filters: [
                        {
                          text:'产品销售',
                          value:'产品销售'
                        },{
                          text:'软件开发服务',
                          value:'软件开发服务'
                        },{
                          text:'资源服务',
                          value:'资源服务'
                        },{
                          text:'咨询服务',
                          value:'咨询服务'
                        },{
                          text:'集成服务',
                          value:'集成服务'
                        },{
                          text:'支撑服务',
                          value:'支撑服务'
                        }]  
                    },{
                      prop: 'customerName',
                      label: '公司名称(客户)',
                      width: 120  
                    },{
                      prop: 'customerDepartmentName',
                      label: '部门名称(客户)',
                      width: 120  
                    },{
                      prop: ' lever2Manager',
                      label: '二级经理(客户)',
                      width: 120  
                    }, {
                      prop: ' lever3Manager',
                      label: '三级经理(客户)',
                      width: 120  
                    }, {
                      prop: 'customerStaffName',
                      label: '员工(客户)',
                      width: 120  
                    }, {
                      prop: ' customerPrimaryContact',
                      label: '项目负责人',
                      width: 120  
                    },  
                    {
                      prop: 'teams',
                      label: '涉及小组',
                      width: 120  
                    },{
                      prop: 'involvedRegion',
                      label: '涉及区域',
                      width: 120,
                      columnKey: 'involvedRegion',
                      filters: [
                        {
                          text:'北支',
                          value:'北支'
                        },{
                          text:'上支',
                          value:'上支'
                        },{
                          text:'成支',
                          value:'成支'
                        },{
                          text:'广支',
                          value:'广支'
                        }]  
                    },{
                      prop: 'saleManager',
                      label: '销售经理',
                      width: 120  
                    },{
                      prop: 'areaProjectManager',
                      label: '区域大项目经理',
                      width: 120  
                    },{
                      prop: 'regionalSolManager',
                      label: '区域解决方案经理',
                      width: 120  
                    },{
                      prop: 'projectManagerId',
                      label: '产品部项目经理',
                      width: 120  
                    },{
                      prop: 'implementManager',
                      label: '实施经理',
                      width: 120  
                    },{
                      prop: 'developManager',
                      label: '研发经理',
                      width: 120  
                    },{
                      prop: 'testManager',
                      label: '测试经理',
                      width: 120  
                    },{
                      prop: 'serviceManager',
                      label: '服务经理',
                      width: 120  
                    },{
                      prop: 'commerceStatus',
                      label: '商务状态',
                      width: 120,
                      columnKey: 'commerceStatus',
                      filters: [
                        {
                          text:'商机中',
                          value:'商机中'
                        },{
                          text:'已立项',
                          value:'已立项'
                        },{
                          text:'已谈判',
                          value:'已谈判'
                        },{
                          text:'已签约',
                          value:'已签约'
                        },{
                          text:'已结项',
                          value:'已结项'
                        }]  
                    },{
                      prop: 'implementBases',
                      label: '实施依据',
                      width: 120,
                      columnKey: 'implementBases',
                      filters: [
                        {
                          text:'无',
                          value:'无'
                        },{
                          text:'POC',
                          value:'POC'
                        },{
                          text:'合同',
                          value:'合同'
                        },{
                          text:'POC+合同',
                          value:'POC+合同'
                        }]  
                    },{
                      prop: 'implementStatus',
                      label: '实施状态',
                      width: 120,
                      columnKey: 'implementStatus',
                      filters: [
                        {
                          text:'未实施',
                          value:'未实施'
                        },{
                          text:'实施中',
                          value:'实施中'
                        },{
                          text:'已完成',
                          value:'已完成'
                        }]  
                    },{
                      prop: 'developStatus',
                      label: '研发状态',
                      width: 120,
                      columnKey: 'developStatus',
                      filters: [
                        {
                          text:'未开发',
                          value:'未开发'
                        },{
                          text:'开发中',
                          value:'开发中'
                        },{
                          text:'已完成',
                          value:'已完成'
                        }]  
                    },{
                      prop: 'onlineStatus',
                      label: '上线状态',
                      width: 120,
                      columnKey: 'onlineStatus',
                      filters: [
                        {
                          text:'未上线',
                          value:'未上线'
                        },{
                          text:'预上线',
                          value:'预上线'
                        },{
                          text:'正式上线',
                          value:'正式上线'
                        }]  
                    },{
                      prop: 'operateStatus',
                      label: '交维状态',
                      width: 120,
                      columnKey: 'operateStatus',
                      filters: [
                        {
                          text:'未交维',
                          value:'未交维'
                        },{
                          text:'自运维',
                          value:'自运维'
                        },{
                          text:'已交维'
                          ,value:'已交维'
                        }]  
                    },{
                      prop: 'progress',
                      label: '进度(%)',
                      width: 120  
                    },{
                      prop: 'pressure',
                      label: '当前风险度',
                      width: 120,
                      columnKey: 'pressure',
                      filters: [
                        {
                          text:'高',
                          value:'高'
                        },{
                          text:'中',
                          value:'中'
                        },{
                          text:'低',
                          value:'低'
                        }]  
                    },{
                      prop: 'currentProgress',
                      label: '当前进展',
                      width: 120  
                    },{
                      prop: 'recentPlan',
                      label: '近期计划',
                      width: 120  
                    },{
                      prop: 'countermeasures',
                      label: '当前风险及应对措施',
                      width: 120  
                    },{
                      prop: 'projectPrice',
                      label: '下一里程碑',
                      width: 120  
                    },{
                      prop: 'planFinishedTime',
                      label: '计划完成时间',
                      width: 160  
                    },{
                      prop: 'isOverdue',
                      label: '里程碑是否逾期',
                      width: 120  
                    },{
                      prop: 'confirmedProgress',
                      label: '已回款比例',
                      width: 120  
                    },{
                      prop: 'totalWorkTime',
                      label: '总工时投入',
                      width: 120  
                    },{
                      prop: 'lastMonthWorkTime',
                      label: '上月工时投入',
                      width: 120  
                    },{
                      prop: 'moneyScore',
                      label: '金融得分',
                      width: 120  
                    },{
                      prop: 'projectPrice',
                      label: '战略意义得分',
                      width: 120  
                    },{
                      prop: 'projectPrice',
                      label: '产品匹配度得分',
                      width: 120  
                    },{
                      prop: 'totalScore',
                      label: '项目评分',
                      width: 120  
                    },{
                      status: 'true'
                    }
                ],
                detailVisible: false,   //详情弹窗
                newOrderDetail: {},      //详情信息展示
               
              //  filter: '',        
                tags: [],     //存放筛选信息并展示
                column: '',    //标识列
                customVisible: false,  //自定义设置弹窗
                search: '',    
                pickerOptions2:{
                    onPick:({ maxDate, minDate })=>{
                     let _maxDate=moment(maxDate).format('YYYY-MM-DD');
                     let _minDate=moment(minDate).format('YYYY-MM-DD');
                    // console.log(_maxDate)
                    // console.log(_minDate)
                     var result=[];
                     if(maxDate && minDate){
                       this.tempData.forEach(col =>{
                         if(col[this.column["property"]]>=moment(minDate).format('YYYY-MM-DD') && col[this.column["property"]]<=moment(maxDate).format('YYYY-MM-DD')){
                           result.push(col);
                         } 
                       });
                    //   console.log(result)
                       this.$refs.mytable.columns.forEach(column=>{
                         if(column["property"]==this.column["property"]){
                           column.filteredValue=["10001",_minDate,_maxDate];
                           // console.log(column.filteredValue)
                         }
                       });
                        this.handleFilterChange();
                     }
                    }
                },
                isAttention: [],   //存放改变后state的值
                isOldAttention: [], //存放原始state的值
                scoreVisible:false, //评分弹窗 
                moneyScore:'', //评分
                id:"", //标志id,
               
          }
        },
        components: {
            Pagination,
            expand,
            detail,
            Tab,
            filterBox,
            customSetting,
            Score
        },
        created: function() {   
             axios.get('/table/list').then((res)=> {
              this.tableData = res.data.articles;
              this.total = res.data.articles.length;
              this.tempData = res.data.articles;
              this.listData = res.data.articles;
              for(let item of this.tableData)
                this.isOldAttention.push(item.state)
              
              this.isAttention = [].concat(this.isOldAttention)
        
         })
        },
       
        methods: {
          handleScore(index,row){
             this.scoreVisible=true;
             this.moneyScore=row.moneyScore;
             this.id=row.id;
          },
          searchdata() {
                const search = this.search
                if (search) {
                    this.tempData = this.listData.filter(dataNews => {
                        return Object.keys(dataNews).some(key => {
                            return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                this.total = this.tempData.length;
                this.pageBegin()
                return this.tempData
            },
            addPage: function () {
                  this.$router.push({ path: '/addpage'});
						},
            handleClick(row) {
                  console.log(row);
            },
            customize() {
              this.customVisible = true
            },
            changeStatus() {
               this.customVisible = false;
            },

            //关闭评分
            closeScore(){
              this.scoreVisible = false;
            },
            filterHandler(value, row, column) {
                // const property = column['property'];
                // return row[property] === value;
                 return true
            },

            AutofilterHandler(){     
              console.log(this.$refs.mytable)
              this.$refs.mytable.columns.forEach(column=>{
               column.filteredValue=[];
               this.tags.forEach(tag=>{
                  if(column.property==tag.prop){
                     if(tag.value=="10001"){
                          column.filteredValue.push("10001");
                          column.filteredValue.push(tag.minDate);
                          column.filteredValue.push(tag.maxDate);
                      }
                      else
                      {
                        column.filteredValue.push(tag.value);
                      }
                  }
                });
              }); 
              this.filterSelect();
            },
        //获取筛选的结果组合
          handleFilterChange(){
            this.tags=[];
            this.$refs.mytable.columns.forEach(column=>{
              if(column.filteredValue && column.filteredValue.length){
                  if(column.filteredValue[0]=="10001"){
                     this.tags.push({
                      "name":column.label+"："+column.filteredValue[1]+"至"+column.filteredValue[2],
                      "prop":column.property,
                      "value":"10001",
                      "minDate":column.filteredValue[1],
                      "maxDate":column.filteredValue[2]
                    });
                  }
                  else
                  {
                   column.filteredValue.forEach(ret=>{
                      this.tags.push({
                          "name":column.label+"："+ret,
                          "prop":column.property,
                          "value":ret
                        });
                   });
                   console.log(this.tags)
                  }
              }
            });
             this.filterSelect();
         
      
          },
          //自定义筛选方法
          filterSelect(){
       
             let data=[].concat(JSON.parse(JSON.stringify(this.listData)));
             let result=[];
             if(this.tags.length>0){
              let key = this.tags[0]["prop"];
               for (var i = 0; i < this.tags.length; i++) {
                if(this.tags[i]["prop"]!=key){
                  key=this.tags[i]["prop"];
                  data=[].concat(JSON.parse(JSON.stringify(result)));
                  result=[];
                 }
                if(this.tags[i]["value"]=="10001"){
                  data.forEach(row => {
                   if(row[this.tags[i]["prop"]]>=this.tags[i]["minDate"] && row[this.tags[i]["prop"]]<=this.tags[i]["maxDate"]){
                     result.push(row);
                   }
                  });
                }
                else
                {
                 data.forEach(row => {
                  if(row[this.tags[i]["prop"]]==this.tags[i]["value"]){
                    result.push(row);
                   }
                 });
                }
               }   
               this.tempData=[].concat(JSON.parse(JSON.stringify(result)));
       //  console.log(this.tempData)
              }else{
                this.tempData=[].concat(JSON.parse(JSON.stringify(this.listData)));
       //   console.log(this.tempData)
              }
              this.total = this.tempData.length;
               this.pageBegin();
            
              this.$refs.mytable.store.states.columns.forEach(col => {
              col.order="";
          });
      },

      //排序改变时触发事件handleSortchange({})
      handleSortchange( {column, prop, order} ){
      // console.log(order);
       //    console.log(column)
       //   console.log(prop)
        //   console.log(this.$refs.mytable.store.states.columns);
          // this.listLoading=true;
          // setTimeout(() => {
          this.$refs.mytable.store.states.columns.forEach(col => {
              col.order="";
              if(col.property==prop){
                  col.order=order;
                 
              }
          });
          let result=[].concat(JSON.parse(JSON.stringify(this.tempData)));
          if(order=="ascending"){
              let tmp="";
              for (var i = 0; i < result.length-1; i++) {
                for (var j = result.length-1; j >i; j--) {
                    if(result[j][prop]<result[j-1][prop]){
                        tmp=result[j]
                        result[j]=result[j-1];
                        result[j-1]=tmp;
                    }
                }
              }
             // console.log("ascending")
              this.tempData=[].concat(JSON.parse(JSON.stringify(result)));
              this.pageBegin();
          }else if(order=="descending"){
               let tmp="";
              for (var i = 0; i < result.length-1; i++) {
                for (var j = result.length-1; j >i; j--) {
                    if(result[j][prop]>result[j-1][prop]){
                        tmp=result[j]
                        result[j]=result[j-1];
                        result[j-1]=tmp;
                    }
                }
              }
           //   console.log("descending")
              this.tempData=[].concat(JSON.parse(JSON.stringify(result)));
              this.pageBegin();
          }
          //  this.listLoading=false;
          // }, 1000);
      },



      getPageSize(val) {
          this.pagesize = val;
      },
      getCurrentPage(val) {
          this.currentPage = val;
      }, 
      getRadioValue(val) {
             // console.log(val)
         this.radio = val;
      },
      showDetail(index,row){
        this.newOrderDetail = {
              projectalias: row.projectAlias, 
              projectid: row.projectId, 
              contractno: row.contractNo, 
              starttime: row.startTime, 
              purchasetype: row.purchaseType, 
              };
        this.detailVisible= !this.detailVisible;
      },   
      handleQuit: function(index, row) {
          for(var i = 0; i < this.isAttention.length; i++){
                if(i == index){
                   var a = this.isAttention[row["id"]]
                   this.isAttention[row["id"]] = !a
                  //console.log(!row.state)
                }
          }
              //console.log(this.isAttention)
          row.state = !row.state;
      },

      deleteTagFilter(newTagsArr) {
            console.log(newTagsArr);
            this.AutofilterHandler();
      },
      //标记那一列
      timefilter(column) {
          this.column = column;
          console.log(column)
      },
      pageBegin() {
          this.pagesize = 10;
          this.currentPage = 1;
          this.$refs.myPagination.currentpage = 1
      }


                   
        },
        computed: {
          /* searchdata: function() {
              //this.tempData = this.tableData;
               const search = this.search;
               if (search) {
                 return this.tempData.filter(dataNews => {
                   return Object.keys(dataNews).some(key => {
                    return (String(dataNews[key]).toLowerCase().indexOf(search) > -1);
                  });
                });
               }
             return this.tempData;
           }*/
       },

         watch: {
            radio: function(){
          
         // let arr = [], arr1=[]
          if(this.radio == "unfinished"){
          //  console.log(this.radio)
            let result = [];
            this.tableData.forEach(row => {
                if(row["commerceStatus"]!="已结项") {
                    result.push(row);
                }
            });
            this.tempData = [].concat(JSON.parse(JSON.stringify(result)))
             this.listData = [].concat(JSON.parse(JSON.stringify(result)))
             this.$refs.mytable.columns.forEach(column=>{
                column.filteredValue=[];
               // column.order="";
              });
              this.isAttention = [].concat(this.isOldAttention);
              //console.log(this.isAttention)
           this.total =this.tempData.length;
          this.pageBegin()
         // console.log(this.currentPage)
         //  this.$refs.mytable.clearFilter()
          

        }else if(this.radio == "finished") {
          console.log(this.radio)
            let result=[];
            this.tableData.forEach(row => {
               if(row["commerceStatus"]=="已结项"){
                  result.push(row);
               }
            });

            this.tempData=[].concat(JSON.parse(JSON.stringify(result)));
            this.listData=[].concat(JSON.parse(JSON.stringify(result)));
            console.log(this.$refs.mytable)
            this.$refs.mytable.columns.forEach(column=>{
                column.filteredValue=[];
              //  column.order="";
              });
                this.isAttention = [].concat(this.isOldAttention);
                // console.log(this.isAttention)
                 //   console.log(this.isOldAttention)
          //  this.$refs.mytable.clearFilter()
             this.total =this.tempData.length;
             this.pageBegin()
           //   console.log("2"+this.tempData)
        
        }
       
        else if(this.radio == "attention") {
    
              let i = 0
              let result=[];
              this.tableData.forEach(row => {
                row["state"] = this.isAttention[i]
                if(row["state"] == false){
                   result.push(row);

                }
                i++
              });
           this.tempData=[].concat(JSON.parse(JSON.stringify(result)));
           this.listData=[].concat(JSON.parse(JSON.stringify(result)));
           this.$refs.mytable.columns.forEach(column=>{
                column.filteredValue=[];
             //   column.order="";
              });
           this.total =this.tempData.length;
           this.pageBegin()
        }
        
        else {
           
            this.tempData=[].concat(JSON.parse(JSON.stringify(this.tableData)));
            this.listData=[].concat(JSON.parse(JSON.stringify(this.tableData)));
            this.$refs.mytable.columns.forEach(column=>{
                column.filteredValue=[];
              //  column.order="";
              });
               this.isAttention = [].concat(this.isOldAttention);
               // console.log(this.isAttention)
               // console.log(this.isOldAttention)
            this.total =this.tempData.length;
            this.pageBegin()
          
            }

          
           // this.total =this.tempData.length;
             // console.log(this.tempData.length)
            //  return this.tempData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize);
           
           },

        },

     }


</script>
<style scoped lang="scss">
.pmo-content {
   padding: 0px 50px;
   width: 1366px;
   height: 768px;
   min-width: 1366px;
   min-height: 768px;
   margin: 0 auto;
   text-align: center;
   .pmo-content-header{
      padding-top: 10px;
      width: 100%;
      height: 60px; 
    }
    .pmo-tab {
      // padding-top: 20px;
       height: 60px;
       border-bottom: 1px solid #EEE;
    }
    .pmo-tags{
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .table {
     //  margin-top: 10px;
       margin-bottom: 10px;
       width: 100%;
       min-height: 100px;
    }

  }
    .pmo-content-header-left{
         float: left;
         height: 60px;
         font-size:16px;
         font-family:PingFangSC-Medium;
         color:rgba(51,51,51,1);
         line-height: 60px;
      }
      .pmo-content-header-right{
         height:60px;
         line-height: 60px;
         font-size: 16px;
         float: right;
      }
.h-font{
      color: #999;
  }
.h-font:hover{
    color: #409EFF;
    cursor:pointer;
  }
 .h-input{
    width: 300px;
 }

 el-tab td {
     padding: 5px 0 !important;
 }
 
</style>

<style>
.cell > .caret-wrapper{
    display: none !important;
}

.el-table th {
  overflow: visible !important;
}
</style>  



