<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <div style="margin-left: 20px;">
                <el-form ref="form" :model="queryData" class="demo-form-inline" :inline="true">
                    <el-form-item label="昵称">
                        <el-input v-model="queryData.name"></el-input>
                    </el-form-item>
                    <el-form-item label="审核状态">
                        <el-select v-model="queryData.status" clearable>
                            <template v-for="item in statusList">
                                <el-option :label="item.desc" :value="item.value"></el-option>
                            </template>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="用户状态">
                        <el-select v-model="queryData.yn" clearable>
                            <template v-for="item in ynList">
                                <el-option :label="item.desc" :value="item.value"></el-option>
                            </template>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="initData">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table
                :data="tableData"
                :row-class-name="tableRowClassName"
                highlight-current-row
                style="width: 100%">
                <el-table-column
                  type="index"
                  align="center"
                  width="100">
                </el-table-column>
                <el-table-column
                  property="openId"
                  label="唯一标识"
                  align="center"
                  width="220">
                    <template slot-scope="scope">
                        <el-button style="white-space: inherit; line-height: 1.2" type="text" @click="openUserInfoPage(scope.row.openId)">{{scope.row.openId}}</el-button>
                    </template>
                </el-table-column>
                               <el-table-column
                  property="name"
                  label="用户昵称"
                  align="center"
                  width="220">
                </el-table-column>
                <el-table-column
                    label="审核状态"
                    align="center"
                    width="100">
                    <template slot-scope="scope">
                        <el-tag
                            :type="changeState(scope.row.status)"
                            close-transition>{{getStatusStr(scope.row.status)}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                  property="rejectReason"
                  align="center"
                  label="驳回原因">
                </el-table-column>
                <el-table-column
                    label="用户状态"
                    align="center"
                    width="100">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.yn === 0 ? 'success': 'error'"
                            close-transition>{{scope.row.yn === 0 ? "正常": "封禁"}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope" >
                        <el-button
                            size="small"
                            @click="handleAccess(scope.row)" v-if="scope.row.status===0" >通过</el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleRefuse(scope.row)"
                            v-if="scope.row.status===0">驳回</el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleForbid(scope.row)"
                            v-if="scope.row.status===1 && scope.row.yn === 0">封禁</el-button>
                        <el-button
                            size="small"
                            @click="handleUnForbid(scope.row)"
                            v-if="scope.row.yn===1">解封</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :current-page="queryData.pageIndex"
                  :page-size="queryData.pageSize"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {userManage} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                count: 0,
                queryData: {
                    name: "",
                    status: null,
                    yn:null,
                    pageIndex: 1,
                    pageSize: 10
                },
                statusList: [
                    { value: 0, desc: "待审核", type: "primary"},
                    { value: 1, desc: "审核通过", type: "success"},
                    { value: 2, desc: "驳回", type: "error"}
                ],
                ynList: [
                    { value: 0, desc: "正常"},
                    { value: 1, desc: "封禁"}
                ]
            }
        },
    	components: {
    		headTop,
    	},
        computed: {

        },
        created(){
            this.initData();
        },
        methods: {
            tableRowClassName(row, index) {
                if (index === 1) {
                    return 'info-row';
                } else if (index === 3) {
                    return 'positive-row';
                }
                return '';
            },
            getStatusStr(status) {
              return this.statusList.find(st => st.value === status).desc;
            },
            async handleUserStatus(data) {
                const res = await userManage.handleUserStatus(data);
                if (res.success) {
                    this.initData();
                    this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                }else {
                    this.$message({
                        type: 'error',
                        message: res.message ? res.message : "操作失败,请稍后重试!"
                    });
                }
            },
            async handleUserEffect(data) {
                const res = await userManage.handleUserEffect(data);
                if (res.success) {
                    this.initData();
                    this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                }else {
                    this.$message({
                        type: 'error',
                        message: res.message ? res.message : "操作失败,请稍后重试!"
                    });
                }
            },
            handleAccess(row){
                this.$confirm('此操作将通过审核, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.handleUserStatus({"openId": row.openId, "status": 1});
                }).catch(() => {
                });
            },
            handleForbid(row) {
                this.$confirm('此操作将用户封禁, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.handleUserEffect({"openId": row.openId, "yn": 1});
                }).catch(() => {
                });
            },
            handleUnForbid(row) {
                this.$confirm('此操作将用户解封, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.handleUserEffect({"openId": row.openId, "yn": 0});
                }).catch(() => {
                });
            },
            changeState(state){
                return this.statusList.find(st => st.value === state).type;
            },
            handleRefuse(row) {
                this.$prompt('请输入驳回原因', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    this.handleUserStatus({"openId": row.openId, "status": 2, "rejectReason": value})
                }).catch(() => {
                });
            },
            async initData(){
                try{
                   const res = await userManage.getUserList(this.queryData); //获取总数量
                    if (res.success) {
                        this.count = res.totalCount;
                        this.tableData = res.dataList;
                    }
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            handleCurrentChange(val) {
                this.queryData.pageIndex = val;
               this.initData();
            },
            openUserInfoPage(openId) {
                window.open("/userInfo?openId=" + openId, "_blank");
            }
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .table_container{
        padding: 20px;
    }
    .el-table .info-row {
        background: oldlace;
    }

    .el-table .positive-row {
        background: #f0f9eb;
    }
</style>
