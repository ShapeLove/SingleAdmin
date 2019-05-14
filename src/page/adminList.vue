<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="adminName"
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
    import {adminList, adminCount} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
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
                this.offset = (val - 1)*this.limit;
                this.getAdmin()
            },
            async getAdmin(){
                try{
                    const res = await adminList({pageIndex: this.currentPage, pageSize:20});
                    if (res.success) {
                    	this.tableData = [];
                    	res.dataList.forEach(item => {
                    		const tableItem = {
                                create: item.create,
						        adminName: item.name,
						        admin: item.level
                    		};
                    		this.tableData.push(tableItem)
                    	})
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


