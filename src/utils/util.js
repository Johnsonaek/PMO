let util = {
};

/*表头字段映射*/
util.tableName={
  "projectId":"商机编号/项目编号",
  "projectAlias":"项目通称",
  "leadDepartMent":"牵头部门",
  "assistDepartment":"协助部门",
  "projectPeople":"项目干系人",
  "contractNo":"合同编号",
  "signContractTime":"合同签订时间",
  "purchaseType":"采购方式",
  "onlineTime":"上线时间",
  "projectName":"项目名称",
  "projectType":"项目类型",
  "startTime":"项目启动会时间",
  "projectPrice":"项目金额(元)",
  "customerName":"客户名称(客户)",
  "customerDepartmentName":"客户部门名称",
  "lever2Manager":"二级经理(客户)",
  "lever3Manager":"三级经理(客户)",
  "customerStaffName":"员工(客户)",
  "customerPrimaryContact":"主要联系人",
  "involvedRegion":"涉及区域",
  "saleManager":"销售经理",
  "regionalSolManager":"区域解决方案经理",
  "projectManagerId":"产品部项目经理",
  "implementManager":"实施经理",
  "developManager":"研发经理",
  "testManager":"测试经理",
  "serviceManager":"服务经理",
  "projectLevel":"项目级别",
  "projectClassify":"项目分类",
  "nodeCount":"总节点数",
  "pressure":"压力",
  "areaProjectManager":"区域大项目经理",
  "teams":"设计小组",
  "projectNameIn":"部门内部名称",
  "strategiSignificance":"战略意义",
  "productMatch":"产品匹配度",
  "process":"百分比",
  "risk":"当前风险度",
  "responseMeasures":"当前风险及应对措施",
  "currentProgress":"当前进展",
  "recentPlan":"近期计划",
  "commerceStatus":"商务状态",
  "implementBases":"实施依据",
  "developStatus":"研发状态",
  "onlineStatus":"上线状态",
  "operateStatus":"交维状态",
  "implementStatus":"实施状态",
  "productTypeCount":"产品种数",
  "mailstoneName":"下一里程碑",
  "planFinishedTime":"计划完成时间",
  "confirmedProgress":"已回款比例",
  "lastMonthWorkTime":"上月工时投入",
  "totalWorkTime":"总月工时投入",
  "isOverdue":"里程碑是否逾期",
  "moneyScore":"金额得分",
  "isBudget":"是否为预算"
}

const tableHeaderName=[
  {
    "label":"项目通称",//表头名称
    "prop":"projectAlias",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"商机编号/项目编号",//表头名称
    "prop":"projectId",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"合同编号",//表头名称
    "prop":"contractNo",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"合同签订时间",//表头名称
    "prop":"signContractTime",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"采购方式",//表头名称
    "prop":"purchaseType",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"工期要求",//表头名称
    "prop":"onlineTime",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"项目名称",//表头名称
    "prop":"projectName",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"项目类型",//表头名称
    "prop":"projectType",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"项目启动时间",//表头名称
    "prop":"startTime",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"项目金额",//表头名称
    "prop":"projectPrice",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"项目级别",//表头名称
    "prop":"projectLevel",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },
  {
    "label":"项目分类",//表头名称
    "prop":"projectClassify",//对于数据库字段
    "level":"basicInfo",//标志那一侧信息
  },{
    "label":"公司名称（客户）",//表头名称
    "prop":"customerName",//对于数据库字段
    "level":"clientInfo",//标志那一侧信息
  },
  {
    "label":"部门名称（客户）",//表头名称
    "prop":"customerDepartmentName",//对于数据库字段
    "level":"clientInfo",//标志那一侧信息
  },{
    "label":"二级经理（客户）",//表头名称
    "prop":"lever2Manager",//对于数据库字段
    "level":"clientInfo",//标志那一侧信息
  },
  {
    "label":"三级经理（客户）",//表头名称
    "prop":"lever3Manager",//对于数据库字段
    "level":"clientInfo",//标志那一侧信息
  },{
    "label":"员工(客户)",//表头名称
    "prop":"customerStaffName",//对于数据库字段
    "level":"clientInfo",//标志那一侧信息
  },{
    "label":"主要联系人",//表头名称
    "prop":"customerPrimaryContact",//对于数据库字段
    "level":"clientInfo",//标志那一侧信息
  },
  {
    "label":"涉及小组",//表头名称
    "prop":"teams",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },
  {
    "label":"涉及区域",//表头名称
    "prop":"involvedRegion",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },
  {
    "label":"销售经理",//表头名称
    "prop":"saleManager",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },
  {
    "label":"区域大项目经理",//表头名称
    "prop":"areaProjectManager",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },
  {
    "label":"区域解决方案经理",//表头名称
    "prop":"regionalSolManager",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },
  {
    "label":"产品部项目经理",//表头名称
    "prop":"projectManagerId",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },
  {
    "label":"实施经理",//表头名称
    "prop":"implementManager",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },
  {
    "label":"研发经理",//表头名称
    "prop":"developManager",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },
  {
    "label":"测试经理",//表头名称
    "prop":"testManager",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },
  {
    "label":"服务经理",//表头名称
    "prop":"serviceManager",//对于数据库字段
    "level":"suyanInfo",//标志那一侧信息
  },{
    "label":"商务状态",//表头名称
    "prop":"commerceStatus",//对于数据库字段
    "level":"projectStatus",//标志那一侧信息
  },
  {
    "label":"实施依据",//表头名称
    "prop":"implementBases",//对于数据库字段
    "level":"projectStatus",//标志那一侧信息
  },{
    "label":"实施状态",//表头名称
    "prop":"implementStatus",//对于数据库字段
    "level":"projectStatus",//标志那一侧信息
  },
  {
    "label":"研发状态",//表头名称
    "prop":"developStatus",//对于数据库字段
    "level":"projectStatus",//标志那一侧信息
  },
  {
    "label":"上线状态",//表头名称
    "prop":"onlineStatus",//对于数据库字段
    "level":"projectStatus",//标志那一侧信息
  },
  {
    "label":"交维状态",//表头名称
    "prop":"operateStatus",//对于数据库字段
    "level":"projectStatus",//标志那一侧信息
  },
  {
    "label":"当前进展",//表头名称
    "prop":"currentProgress",//对于数据库字段
    "level":"projectProgress",//标志那一侧信息
  },
  {
    "label":"近期计划",//表头名称
    "prop":"recentPlan",//对于数据库字段
    "level":"projectProgress",//标志那一侧信息
  },
  {
    "label":"进度(%) 0~100",//表头名称
    "prop":"process",//对于数据库字段
    "level":"projectProgress",//标志那一侧信息
  },
  {
    "label":"当前风险度",//表头名称
    "prop":"risk",//对于数据库字段
    "level":"projectProgress",//标志那一侧信息
  },
  {
    "label":"当前风险及应对措施",//表头名称
    "prop":"responseMeasures",//对于数据库字段
    "level":"projectProgress",//标志那一侧信息
  },
  {
    "label":"上月工时投入",//表头名称
    "prop":"lastMonthWorkTime",//对于数据库字段
    "level":"resourcesInvested",//标志那一侧信息
  },
  {
    "label":"总工时投入",//表头名称
    "prop":"totalWorkTime",//对于数据库字段
    "level":"resourcesInvested",//标志那一侧信息
  },
  {
    "label":"下一里程碑",//表头名称
    "prop":"mailstoneName",//对于数据库字段
    "level":"milestonePayback",//标志那一侧信息
  },
  {
    "label":"计划完成时间",//表头名称
    "prop":"planFinishedTime",//对于数据库字段
    "level":"milestonePayback",//标志那一侧信息
  },
  {
    "label":"里程碑是否逾期",//表头名称
    "prop":"isOverdue",//对于数据库字段
    "level":"milestonePayback",//标志那一侧信息
  },
  {
    "label":"已回款比例",//表头名称
    "prop":"confirmedProgress",//对于数据库字段
    "level":"milestonePayback",//标志那一侧信息
  },
  {
    "label":"金融得分",//表头名称
    "prop":"moneyScore",//对于数据库字段
    "level":"projectScore",//标志那一侧信息
  }
]

util.getUserDefinedList = function() {
  /*字段分类（8大类）*/
  const userDefinedList = [
    {
      id: 'basicInfo',
      label: '项目基本信息',
      children: []
    },
    {
      id: 'clientInfo',
      label: '客户侧信息',
      children: []
    },
    {
      id: 'suyanInfo',
      label: '苏研侧信息',
      children: []
    },
    {
      id: 'projectStatus',
      label: '项目状态',
      children: []
    },
    {
      id: 'projectProgress',
      label: '项目进展',
      children: []
    },
    {
      id: 'milestonePayback',
      label: '里程碑及回款',
      children: []
    },
    {
      id: 'resourcesInvested',
      label: '资源投入',
      children: []
    },
    {
      id: 'projectScore',
      label: '项目评分',
      children: []
    }
  ];
  for (let i=0; i<userDefinedList.length; i++){
    for (let j=0; j<tableHeaderName.length; j++){
      if(userDefinedList[i].id === tableHeaderName[j].level){
        userDefinedList[i].children.push({
          id: tableHeaderName[j].prop,
          label: tableHeaderName[j].label
        });
      }
    }
  }
  return userDefinedList;
}

export default util;


