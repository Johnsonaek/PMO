<template>
    <div class="pmo-header">
        <el-menu
                :default-active="activeIndex"
                class="iap-el-menu"
                :router=true
                mode="horizontal"
                background-color="#66b1ff"
                text-color="#fff"
                active-text-color="#000">
            <el-menu-item index="/">
                <span class="iap-submenu-title">PMO管理系统</span>
            </el-menu-item>
            <el-submenu index="1" id="menu">
                <template slot="title">机器管理</template>
                        <el-menu-item index="1-1">设备管理</el-menu-item>
                        <el-menu-item index="1-2">程序管理</el-menu-item> 
            </el-submenu>                     
            <el-submenu index="2">
                <template slot="title">工作日志</template>
                        <el-menu-item index="2-1">工作内容</el-menu-item>
                        <el-menu-item index="2-2">工作问题</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">生产调度</template>
                        <el-menu-item index="3-1">项目清单</el-menu-item>
                        <el-menu-item index="3-2">项目变更</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">审计</template>
                        <el-menu-item index="4-1">审计1</el-menu-item>
                        <el-menu-item index="4-2">审计2</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .pmo-header {
       .iap-submenu-title {
            padding-right: 50px;
            font-size: 20px;
        }
    }

    .iap-submenu-header {
        display: block;
        width: 175px;
        margin: 0px 20px 0px 20px;
        padding: 10px 0;
        color: #fff;
    }
    .el-menu--popup {
        padding: 0 !important;
    }

    .el-menu--popup-bottom-start {
        .el-menu-item {
           // width: 175px;
            padding-left: 20px !important;
            color: #000 !important;
            background-color:#fff !important;
        }
    }

    #app .el-menu--horizontal, body > .el-menu--horizontal {
        border: none !important;
    }

    .el-menu--horizontal {
        border: none !important;
    }

    #app .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
        background-color: #66b1ff !important;
        color: #fff !important;
    }

    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
        color: #66b1ff !important;
    }

    .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
        background-color: #66b1ff !important;
    }
</style>

