<template>
  <div>
  <!--   <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
    <el-dialog title="评分" :visible.sync="dialogFormVisible" :before-close="close" class='scoring'>
      <el-form :model='form'  ref="form">
           <el-form-item label="金额得分:" :label-width="formLabelWidth" class="money">
    		     <span>{{form.moneyScore}}</span>
           </el-form-item>
           <el-form-item label="战略意义:" :label-width="formLabelWidth">
                <el-select v-model="form.importance" style="width:60%">
                        <el-option v-for='option in options1' :key='option.value' :label='option.label' :value='option.value'></el-option>
                </el-select>
           </el-form-item>
           <el-form-item label="产品匹配度:" :label-width="formLabelWidth">
                <el-select v-model="form.suitability" placeholder="请选择" style="width:60%">
                        <el-option v-for='option in options2' :key='option.value' :label='option.label' :value='option.value'></el-option>
                </el-select>
           </el-form-item>
      </el-form>
    	<div slot="footer" class="dialog-footer">
            <span class='total'>
                 <i>总分</i> 
                 <i class="score">{{calculate.totalScore}}</i>
            </span>
            <el-button type="primary" @click="submitForm">确定</el-button>
    		    <el-button @click="close">关闭</el-button>   		   
    	</div>
  
    </el-dialog>
  </div>
</template>
<script>
     export default {
      props:["moneyScore","id"],
	    data() {
	      return {
	        dialogFormVisible: true,
          form:{
             id:this.id,
             moneyScore: this.moneyScore,
             importance: '',
             suitability:'',
          },
          formData:{},
          options1:[{value:20,label:20},{value:30,label:30},{value:40,label:40}],
          options2:[{value:20,label:20},{value:30,label:30},{value:40,label:40}],
          formLabelWidth: '120px'
	      }
	    },
      methods:{
           submitForm(){

                        if ((this.form.moneyScore)&&(this.form.suitability)) {
                            if(this.calculate.totalScore<=100){
                               this.dialogFormVisible=false;
                               this.formData={'金额得分':this.form.moneyScore,'战略意义':this.form.importance,'产品匹配度':this.form.suitability,'总分':this.calculate.totalScore};
                               console.log(this.formData);
                               this.form.importance='';
                               this.form.suitability='';
                        }else{
                          this.dialogFormVisible=true;
                          return false;
                        }
                     } else {
                        this.dialogFormVisible=true;
                        return false;
                     }                   
                
         },
         close(){
             this.dialogFormVisible=false;
             this.$emit('closeScore');
         }
      },
      computed:{
        calculate(){
              let totalScore=this.form.moneyScore;
              let option=[this.form.importance,this.form.suitability];
              option.forEach(ele=>{
                if(ele){
                    totalScore+=ele;
                }
              });
             
              if(totalScore>100){
                       alert('评分总和不能超过100!');
              }
              return {
                  totalScore
              }
          }
      }
  };
</script>
<style scoped>
   .total{
       position:absolute;
       left:30px;
       line-height:30px;
  }
  .total .score {
       color:red;
  }
  .money .el-form-item__content span{
        display:block;
        margin-left:17px;

    }
</style>
<style>
   .scoring .el-dialog{
        margin-top: 20vh !important;
        width:40%;
    }

   .scoring .el-dialog__header {
        text-align:left;
        box-sizing:border-box;
        padding: 15px 8px;
        width: 100%;
        border-bottom: 1px solid #909399;
    }
    .scoring .el-dialog__title {
        font-size: 16px;
    }

    .scoring .el-input__icon{
        line-height: 30px;
    }

    .scoring .el-form-item__label,.scoring .el-button,.scoring .el-form-item__content,
    .scoring .el-input,.scoring .el-input__inner {
        height: 30px;
        line-height: 30px;
    }
   .scoring .el-button{
        width: 65px;
        padding: 0px 10px;
   }
   .scoring .el-dialog__footer {
        position: relative;
        width: 100%;
        padding:15px;
        border-top: 1px solid #909399;
        background: #F5F5F5;
    }
 
</style>
