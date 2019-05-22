<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column
                    type="index"
                    width="50">
                </el-table-column>
                <el-table-column
                    property="openId"
                    label="举报人"
                >
                </el-table-column>
                <el-table-column
                    property="reportOpenId"
                    label="被举报人"
                >
                </el-table-column>
                <el-table-column
                    property="reportType"
                    label="举报类型"
                >
                </el-table-column>
                <el-table-column
                    property="create"
                    label="举报时间"
                ></el-table-column>
                <el-table-column
                    property="status"
                    label="审核状态"
                >
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button
                            size="small"
                            @click="handlePass(scope.row)" >通过</el-button>
                        <el-button
                            size="small"
                            @click="refuseReport(scope.row)">驳回</el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="deleteReport(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryData.pageIndex"
                    :page-size="queryData.pageSize"
                    layout="total, prev, pager, next"
                    :total="count">
                </el-pagination>
            </div>
            <el-dialog
                title="输入驳回原因"
                :visible.sync="centerDialogVisible"
                width="20%"
                center>

                <el-form :model="formInline">
                    <el-form-item label="驳回原因">
                        <el-input v-model="formInline.reason" placeholder="请输入驳回原因..."></el-input>
                    </el-form-item>
                </el-form>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="closeReason">确 定</el-button>
                 </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {baseUrl, baseImgPath} from '@/config/env'
    import {reportManage} from '@/api/getData'
    export default {
        data(){
            return {
                centerDialogVisible: false,
                formInline:{
                    reason: '',
                },
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
                queryData: {
                    pageIndex: 0,
                    pageSize: 10
                },
            }
        },
        created(){
            this.initData();
        },
        components: {
            headTop,
        },
        methods: {
            open(){

            },
            closeReason(){
                this.centerDialogVisible = false;
                console.log("驳回" + this.formInline.reason)
            },
            async deleteReport(rowId) {
                const res = await reportManage.deleteReport({"id": rowId});
                if (res.success) {
                    this.$message({
                        type: 'success',
                        message: '处理成功!'
                    });
                    this.getReport()
                }else {
                    this.$message({
                        type: 'error',
                        message: res.message
                    });
                }
            },
            //驳回
            async refuseReport(row){
                const res = await reportManage.handleReport({"id": row.id, "status": 2});
                if (res.success) {
                    this.$message({
                        type: 'success',
                        message: '处理成功!'
                    });
                    this.getReport()
                }else {
                    this.$message({
                        type: 'error',
                        message: res.message
                    });
                }
            },
            //获取举报信息
            async initData(){
                try{
                    this.getReport();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            //获取举报数据
            async getReport(){
                const res = await reportManage.getReportList(this.queryData);
                if (res.success) {
                    this.tableData = res.dataList;
                    this.count = res.totalCount;
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            async handlePass(row){
                const res = await reportManage.handleReport({"id": row.id, "status": 1});
                if (res.success) {
                    this.$message({
                        type: 'success',
                        message: '处理成功!'
                    });
                    this.getReport()
                }else {
                    this.$message({
                        type: 'error',
                        message: res.message
                    });
                }
            },
            handleCurrentChange(val) {
                this.queryData.pageIndex = val;
                this.getTag()
            },
            addTag(index, row){
                this.$router.push({ path: 'addTag', query: { restaurant_id: row.id }})
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .table_container{
        padding: 20px;
    }
    .Pagination{
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>

