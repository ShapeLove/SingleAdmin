<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-button type="primary" plain @click="open" style="margin-bottom: 10px;">添加标签</el-button>
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
                    property="create"
                    label="创建日期"
                    >
                </el-table-column>
                <el-table-column
                    property="tagType"
                    label="标签类型"
                ></el-table-column>
                <el-table-column
                    property="tagName"
                    label="标签名称"
                    >
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.$index %2 > 0 ? 'primary' : 'success'"
                            close-transition>{{scope.row.tagName}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
                title="添加标签名"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>

                <el-form :model="formInline">
                    <el-form-item label="标签名">
                        <el-input v-model="formInline.tagName" placeholder="请输入标签名..."></el-input>
                    </el-form-item>
                    <el-form-item label="标签类型">
                        <el-select v-model="formInline.tagType" placeholder="请选择标签类型">
                            <el-option
                                v-for="item in tagOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addTag">确 定</el-button>
                 </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {baseUrl, baseImgPath} from '@/config/env'
    import {tagManage} from '@/api/getData'
    export default {
        data(){
            return {
                centerDialogVisible: false,
                formInline:{
                    tagName: '',
                    tagType: null
                },
                tableData: [],
                count: 0,
                queryData: {
                    pageIndex: 0,
                    pageSize: 10
                },
                tagOptions: [
                    {value: 1, label: "正在做..."},
                    {value: 2, label: "打算做..."},
                    {value: 3, label: "我的活动...."}
                ]
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
                this.centerDialogVisible = true;
            },
            tableRowClassName(row, index) {
                if (index === 1) {
                    return 'info-row';
                } else if (index === 3) {
                    return 'positive-row';
                }
                return '';
            },
            async addTag(){
                try {
                    const res = await tagManage.addTag(this.formInline);
                    if (res.success) {
                        this.$message({
                            type: 'success',
                            message: '添加标签成功'
                        });
                        this.initData();
                    }else {
                        throw new Error(res.message);
                    }
                }catch (err) {
                    this.$message({
                        type: 'error',
                        message: err.message
                    });
                }
                this.centerDialogVisible = false;
            },
            //获取标签信息
            async initData(){
                try{
                    this.getTag();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            //获取标签数据
            async getTag(){
                const result = await tagManage.getTagList(this.queryData);
                console.log(result)
                if (result.success) {
                    this.tableData = result.dataList;
                    this.count = result.totalCount;
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },

            handleCurrentChange(val) {
                this.queryData.pageIndex = val;
                this.getTag()
            },
            async handleDelete(index, row) {
                console.log( index);
                try{
                    const res = await tagManage.deleteTag({"id":row.id, "tagType": row.tagType});
                    if (res.success) {
                        this.$message({
                            type: 'success',
                            message: '删除标签成功'
                        });
                        this.tableData.splice(index, 1);
                    }else{
                        throw new Error(res.message)
                    }
                }catch(err){
                    this.$message({
                        type: 'error',
                        message: err.message
                    });
                    console.log('删除标签失败')
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
    .el-table .info-row {
        background: oldlace;
    }

    .el-table .positive-row {
        background: #f0f9eb;
    }
</style>

