<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                :row-class-name="tableRowClassName"

                highlight-current-row
                style="width: 100%">
                <el-table-column
                  type="index"
                  width="100">
                </el-table-column>
                <el-table-column
                  property="registe_time"
                  label="注册日期"
                  width="220">
                </el-table-column>
                <el-table-column
                  property="username"
                  label="用户姓名"
                  width="220">
                </el-table-column>
                <el-table-column
                  property="city"
                  label="注册地址">

                </el-table-column>
                <el-table-column
                    property="state"
                    label="审核状态"
                    width="100">
                    <template slot-scope="scope">
                        <el-tag
                            :type="changeState(scope.row.state)"
                            close-transition>{{scope.row.state}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope" >
                        <el-button
                            size="small"
                            @click="handleAccess(scope.row)" v-if="scope.row.state==='待审核' ? true : false" >通过</el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleRefuse(scope.$index, scope.row)"
                            v-if="scope.row.state==='待审核' ? true : false">驳回</el-button>
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
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {getUserList, getUserCount} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [{
                  registe_time: '2016-05-02',
                  username: '王小虎',
                  city: '上海市普陀区金沙江路 1518 弄',
                    state:'待审核'
                }, {
                  registe_time: '2016-05-04',
                  username: '王小虎',
                  city: '上海市普陀区金沙江路 1517 弄', state:'已驳回'
                }, {
                  registe_time: '2016-05-01',
                  username: '王小虎',
                  city: '上海市普陀区金沙江路 1519 弄', state:'已通过'
                }, {
                  registe_time: '2016-05-03',
                  username: '王小虎',
                  city: '上海市普陀区金沙江路 1516 弄', state:'待审核'
                }],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
            }
        },
    	components: {
    		headTop,
    	},
        created(){
            console.log(JSON.stringify(this.tableData));
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
            handleAccess(row){
                this.$confirm('此操作将永久通过审核, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '通过成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消通过'
                    });
                });
            },
            changeState(state){
                if(state ==='待审核'){
                    return 'primary';
                } else if(state ==='已通过'){
                    return  'success';
                } else {
                    return  'error';
                }
            },
            /*async */handleRefuse(index, row) {
                console.log( index);
                this.tableData[index].state = "已驳回";
                console.log(this.tableData[index].state)
                /*     try{
                         const res = await deleteResturant(row.id);
                         if (res.status == 1) {
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
                     }*/
            },
            async initData(){
                try{
                   const countData = await getUserCount(); //获取总数量
                    console.log(JSON.stringify(countData));
                    if (countData.status == 1) {
                        this.count = countData.count;
                    }else{
                        throw new Error('获取数据失败');
                    }
                   // this.getUsers();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
               // this.getUsers()
            },

            async getUsers(){
                const Users = await getUserList({offset: this.offset, limit: this.limit}); //
                console.log(Users);
                this.tableData = [];
                Users.forEach(item => {
                    const tableData = {};
                    tableData.username = item.username;
                    tableData.registe_time = item.registe_time;
                    tableData.city = item.city;
                    tableData.city = item.city;
                    this.tableData.push(tableData);
                })
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
