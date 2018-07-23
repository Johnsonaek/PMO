<template>
<div class="addpage">
   <div class="a-title" style="color: #000; line-height: 50px; font-size: 15px">添加新项目</div>
   <div class="a-info">
     <span class="rectangle"></span>
     <span class="info-header">项目基本信息</span>
   </div>
   <div class="form-wrapper">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
         <el-row type="flex">
            <el-col :span="10">
                <el-form-item label="项目编号/商品编号：" prop="proID">
                    <el-input v-model.number="ruleForm.proID"></el-input>
                </el-form-item>
                <el-form-item label="合同签订时间：">
                    <el-date-picker align="right" type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="工期要求：">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="项目通称(别名)：" prop="comname">
                    <el-input v-model="ruleForm.comname"></el-input>
                </el-form-item>
                <el-form-item label="项目启动会时间：">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date3" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="项目分类：" prop="classify">
                    <el-input v-model="ruleForm.classify"></el-input>
                </el-form-item>
                <el-form-item label="项目金额：" prop="money">
                    <el-input v-model="ruleForm.money"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="10">
                <el-form-item label="合同编号：" prop="conID">
                    <el-input v-model="ruleForm.conID"></el-input>
                </el-form-item>
                <el-form-item label="采购方式：" prop="purchase">
                    <el-select v-model="ruleForm.purchase" placeholder="未知">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="项目名称：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="项目类型：" prop="class">
                    <el-select v-model="ruleForm.class" placeholder="未知">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="项目级别：" prop="level">
                    <el-select v-model="ruleForm.level" placeholder="未知">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
         </el-row>
         <el-form-item>
           <div style="text-align: center">
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
           </div>
         </el-form-item>
      </el-form>
    </div>
</div>
</template>

<script>
  export default {
      name:'addpage',
    data() {
      var Id = (rule, value, callback) => {
        if(!value) {
          return callback(new Error('项目编号不能为空'));
        }
        setTimeout(() => {
           if(!Number.isInteger(value)) {
             callback(new Error('请输入数字值'));
           } else {
             callback();
           }
        }, 1000);
      };
      return {
        ruleForm: {
          proID: '',
          comname: '',
          classify: '',
          money: '',
          conID: '',
          purchase: '',
          name: '',
          class: '',
          level: '',
          date1: '',
          date2: '',
          date3: ''
        },
        rules: {
          proID: [
            { validator: Id, trigger: 'blur'}
          ],
          comname: [
            { required: true, message: '某某项目', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          classify: [
            { message: '未知', trigger: 'blur' }
          ],
          money: [
              { message: '', trigger: 'blur'}
          ],
          conID: [
            { message: '', trigger: 'blur'}
          ],
          name: [
            { message: '某某公司', trigger: 'blur'}
          ],
          commom: [
            { message: '未知', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      successMsg(msg) {
                this.$message({
                    showClose: true,
                    message: msg,
                    type: 'success',
                });
            },
            errorMsg(msg) {
                this.$message({
                    showClose: true,
                    message: msg,
                    type: 'error',
                });
            },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.ruleForm.formData = {'项目编号': this.ruleForm.proID,'合同编号': this.ruleForm.conID,'合同签订时间': this.ruleForm.date1,'采购方式': this.ruleForm.purchase,'工期要求': this.ruleForm.date2,'项目名称': this.ruleForm.name,'通称': this.ruleForm.comname,'项目类型': this.ruleForm.class,'项目启动会时间': this.ruleForm.date3,'项目级别': this.ruleForm.level,'项目分类': this.ruleForm.classify,'项目金额': this.ruleForm.money};
             console.log(this.ruleForm.formData);
             this.$router.push({path: './home'});
          } else {
            alert('error submit!!');
            return false;
          }
          
        });
      }
        /*this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://easy-mock.com/mock/59bb998de0dc663341abbf37/http:/easy-mock.com/new/example/1/post/axios',{
                         //传参
                        name:'nice'
                    })
                    .then((response)=>{
                         //console.log('简写形式')
                         console.log(response.data);
                    })
                    .catch((error)=>{
                        console.log(error)
                    });


                       /* api.register.registerPrivate('group', this.groupForm).then(resp => {
                            console.log(resp['status']);
                            if(resp['status'] === 200) {
                                this.successMsg('注册信息已提交审核，审核需4-5个工作日');
                                this.$router.push({ path: `/home` });
                            } else {
                                this.errorMsg('创建用户失败');
                            }
                        });
                    } else {
                        this.errorMsg('表单信息填写有误');
                        return false;
                    }
                });*/
      }
  }
      
  </script>

<style>
 .addpage {
   position: relative;
   
 }
 .a-title {
     padding-left: 40px;
   }
  .a-info {
     color: #66b1ff; 
     line-height: 50px; 
     margin-left: 20%;
  }
  
  .rectangle {
       border: 3px solid #66b1ff;
  }
  .info-header {
    font-size: 20px;
    padding-left: 10px;
  }

 .form-wrapper {
   width: 1000px;
   min-width: 1000px;
   margin: 0 auto 30px;

 }
 
 
 .el-row {
    margin-bottom: 10px;
  
  }
  .el-col {
    border-radius: 4px;
  }
  .el-col-10 {
    margin-left: 5%;
  }
  .el-form-item__label {
    width: 150px !important;
  }
  .el-form-item__content {
    margin-left: 150px !important;
  }
  .el-select {
    display: block !important;
  }
  .el-input__prefix {
    left: 235px  !important;
  }

</style>
