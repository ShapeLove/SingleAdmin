<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-form :inline="true" :model="queryData" class="demo-form-inline">
                <el-form-item label="用户名">
                    <el-input v-model="queryData.name"></el-input>
                </el-form-item>
                <el-form-item label="权限">
                    <el-select v-model="queryData.level" clearable>
                        <el-option
                            v-for="item in levelList"
                            :key="item.value"
                            :label="item.desc"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="initData">查询</el-button>
                </el-form-item>
            </el-form>

            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    type="index"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    label="注册日期"
                    width="220">
                    <template slot-scope="scope">
                        <el-icon name="time"></el-icon>
                        <span style="margin-left: 10px">{{ scope.row.create }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="admin"
                    label="权限">
                    <template slot-scope="scope">
                        <el-tag type="primary"> {{getLevelName(scope.row.level)}}</el-tag>
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
    import {adminManage} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                count: 0,
                queryData: {
                    pageIndex: 1,
                    pageSize: 10,
                    name: null,
                    level: null
                },
                levelList: [
                    {value: 0, desc: "管理员"},
                    {value: 1, desc: "开发管理员"},
                    {value: 2, desc: "超级管理员"}
                ]
            }
        },
    	components: {
    		headTop,
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
            getLevelName(level) {
              return this.levelList.find(x => x.value === level).desc;
            },
            async initData(){
                try{
                    this.getAdmin();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getAdmin()
            },
            async getAdmin(){
                try{
                    const res = await adminManage.getAdminList(this.queryData);
                    if (res.success) {
                    	this.tableData = res.dataList;
                    	this.count= res.totalCount;
                    }else{
                    	throw new Error(res.message)
                    }
                }catch(err){
                    console.log('获取数据失败', err);
                }
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


