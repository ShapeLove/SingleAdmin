<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                :row-class-name="tableRowClassName"
                style="width: 100%">
                <el-table-column
                    type="index"
                    width="100">
                </el-table-column>
                <el-table-column
                    property="invocationName"
                    label="异常方法"
                >
                </el-table-column>
                <el-table-column
                    label="异常信息"
                >
                    <template slot-scope="scope">
                        <p style="max-height: 100px; overflow-y: scroll;">
                            {{scope.row.lastExceptMessage}}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column
                    property="exceptNum"
                    label="异常次数"
                    width="40"
                ></el-table-column>
                <el-table-column
                    property="createTime"
                    label="异常开始时间"
                >
                </el-table-column>
                <el-table-column
                    property="modifiedTime"
                    label="最后一次异常时间"
                >
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleExcept(scope.row.id)">处理</el-button>
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
    import {exceptManage} from '@/api/getData'
    export default {
        components: {
            headTop,
        },
        data() {
            return {
                tableData: [],
                queryData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                count: 0
            }
        },
        created() {
           this.getExceptList();
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
            async handleExcept(id) {
                const res = await exceptManage.deleteExcept({"id": id});
                if (res.success) {
                    this.$message({
                        type: 'success',
                        message: '处理成功!'
                    });
                    this.getExceptList()
                }else {
                    this.$message({
                        type: 'error',
                        message: res.message
                    });
                }
            },
            async getExceptList() {
                const res = await exceptManage.getExceptList(this.queryData);
                if (res.success) {
                    this.tableData = res.dataList;
                    this.count = res.totalCount;
                }
            },
            handleCurrentChange(val) {
                this.queryData.pageIndex = val;
                this.getExceptList();
            }
        }
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
