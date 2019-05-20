<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="举报人">
                                <span>{{ props.row.open_id }}</span>
                            </el-form-item>
                            <el-form-item label="被举报人">
                                <span>{{ props.row.report_open_id  }}</span>
                            </el-form-item>
                            <el-form-item label="时间">
                                <span>{{ props.row.create  }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                    type="index"
                    width="100">
                </el-table-column>
                <el-table-column
                    property="open_id"
                    label="举报人"
                >
                </el-table-column>
                <el-table-column
                    property="report_open_id"
                    label="被举报人"
                >
                </el-table-column>
                <el-table-column
                    property="report_type"
                    label="举报类型"
                >
                </el-table-column>
                <el-table-column
                    property="create"
                    label="举报时间"
                >
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <el-button
                            size="small"
                            @click="handlePass(scope.row)" >通过</el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="refuseReport(scope.$index, scope.row)">驳回</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="20"
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
    import {} from '@/api/getData'
    export default {
        data(){
            return {
                centerDialogVisible: false,
                formInline:{
                    reason: '',
                },
                tableData: [{
                    create: '2016-05-02',
                    report_open_id: '张颖',
                    open_id: '自己',
                    report_type:'3'
                }, {
                    create: '2016-05-02',
                    report_open_id: '赵武',
                    open_id: '李四',
                    report_type:'2'
                }, {
                    create: '2016-05-02',
                    report_open_id: '杜德伟',
                    open_id: '赵雪',
                    report_type:'2'
                }, {
                    create: '2016-05-13',
                    report_open_id: '张三',
                    open_id: '梨子',
                    report_type:'1'
                }],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
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
            //驳回
            refuseReport(){
                this.centerDialogVisible = true;

            },
            //获取标签信息
            async initData(){
                try{
                    this.city = await cityGuess();
                    const countData = await getResturantsCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    }else{
                        throw new Error('获取数据失败');
                    }
                    this.getTag();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            //获取标签数据
            async getTag(){
                const {latitude, longitude} = this.city;
                const restaurants = await getTag({latitude, longitude, offset: this.offset, limit: this.limit});
                this.tableData = [];
                console.log(restaurants)
                restaurants.forEach(item => {
                    const tableData = {};
                    tableData.name = item.name;
                    tableData.address = item.address;
                    tableData.description = item.description;
                    tableData.id = item.id;
                    tableData.phone = item.phone;
                    tableData.rating = item.rating;
                    tableData.recent_order_num = item.recent_order_num;
                    tableData.category = item.category;
                    tableData.image_path = item.image_path;
                    this.tableData.push(tableData);
                });
                console.log(this.tableData)

            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handlePass(row){
                this.$message({
                    type: 'success',
                    message: '举报成功!'
                });
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getTag()
            },
            addTag(index, row){
                this.$router.push({ path: 'addTag', query: { restaurant_id: row.id }})
            },
            async querySearchAsync(queryString, cb) {
                if (queryString) {
                    try{
                        const cityList = await searchplace(this.city.id, queryString);
                        if (cityList instanceof Array) {
                            cityList.map(item => {
                                item.value = item.address;
                                return item;
                            });
                            cb(cityList)
                        }
                    }catch(err){
                        console.log(err)
                    }
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

