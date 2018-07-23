<template>
    <div class="footer">
        <p class="footer-href">友情链接</p>
        <p class="footer-href-bottom"></p>
        <div class="footer-top-wrapper">
            <div class="footer-div">
                <p>dop能力开发平台</p>
                <p>BI套件</p>
                <p>大数据AI开放平台</p>
            </div>
            <div class="footer-div" style="font-size: 12px">
                <p style="padding-bottom: 10px"><i class="el-icon-location"></i>
                    公司地址：苏州高新区科技城昆仑山路58号
                </p>
                <p style="padding-bottom: 10px"><i class="el-icon-message"></i>
                    电子邮件：cmss@cmss.chinamobile.com
                </p>
                <p><i class="el-icon-phone"></i>
                    电话：4001-10086-5
                </p>
            </div>
            <div class="footer-div" style="border-right:none;">
                <ul>
                    <li><p>关于我们</p></li>
                    <li><p>专利认证</p></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom-wrapper">
            <p>Copyright ©2016 中移（苏州）软件技术有限公司</p>
            <p>
                <img src="../assets/guohui.png" />
                苏ICP备15037412号
            </p>
        </div>
    </div>
</template>

<script>
    export default {
      //  name: 'Footer',
      //  props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer {
        background-color: #66b1ff;
        padding: 15px 30px 0 30px;
        color: #fff;
        p:hover{
            color: #000f;
        }
        .footer-href {
            text-align: left;
            margin: 0 0 0px 60px;
        }
        .footer-href-bottom {
            margin: 0 0 0 60px;
            height: 1px;
            width: 15px;
            border-bottom: 2px solid #000;
        }
        .footer-top-wrapper {
            display: flex;
            margin-left: 20px;
            border-bottom: 1px solid #fff;
            padding-bottom: 15px; 
            .footer-div {
                flex: 35%;
                padding: 0 40px;
                border-right: 1px solid #fff;
                p {
                    text-align: left;
                }
                li {
                    padding-left: 10px;
                }
                i {
                    margin-right: 10px;
                }
            }
        }
        .footer-bottom-wrapper {
            padding: 5px 0;
            font-size: 10px;
            p {
                margin: 0;
                text-align: center;
                
            }
        }
    }
</style>
