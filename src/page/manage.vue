<template>
    <div class="manage_page fillcontain">
        <el-row style="height: 100%;">
            <el-col :span="4" style="min-height: 100%; background-color: #324057;">
                <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                        <el-menu-item index="userList">用户列表</el-menu-item>
                        <el-menu-item index="tagList">标签列表</el-menu-item>
                        <el-menu-item index="adminList" v-if="checkPermission([2])">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-upload2"></i>审核</template>
                        <el-menu-item index="reportCheck">举报审核</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4" v-if="checkPermission([2, 1])">
                        <template slot="title"><i class="el-icon-warning"></i>异常信息</template>
                        <el-menu-item index="warning">异常信息处理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                        <el-menu-item index="visitor">用户分布</el-menu-item>
                    </el-submenu>
                    <!--<el-submenu index="5">-->
                    <!--<template slot="title"><i class="el-icon-edit"></i>编辑</template>-->
                    <!--<el-menu-item index="vueEdit">文本编辑</el-menu-item>-->
                    <!--</el-submenu>-->
                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-setting"></i>设置</template>
                        <el-menu-item index="adminSet">管理员设置</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="height: 100%;overflow: auto;">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                defaultActive: null
            }
        },
        computed: {
            ...mapState(['adminInfo'])
        },
        mounted() {
            this.$nextTick(() => {
                setTimeout(() => {
                    this.defaultActive = this.$route.path.replace('/', '');
                }, 50);
            })
        },
        methods: {
            checkPermission(levelList) {
                if (levelList.find(x => x === this.adminInfo.level)) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>


<style lang="less" scoped>
    @import '../style/mixin';

    .manage_page {

    }
</style>
