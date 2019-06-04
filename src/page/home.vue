<template>
    <div>
        <head-top></head-top>
		<section class="data_section">
			<header class="section_title">数据统计</header>
			<el-row :gutter="20" style="margin-bottom: 15px;margin-left: 50px;">
                <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{addUser}}</span> 新增用户</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{addAdmin}}</span> 新增管理员</div></el-col>
			</el-row>
            <el-row :gutter="20" style="margin-left: 50px;">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allUserCount}}</span> 注册用户</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allAdminCount}}</span> 管理员</div></el-col>
            </el-row>
		</section>
		<tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
	import tendency from '../components/tendency'
	import dtime from 'time-formater'
	import {analysisManage} from '@/api/getData'

    export default {
    	data(){
    		return {
                addAdmin: 10,
                addUser: 20,
                allUserCount: 178,
                allAdminCount: 41,
    			sevenDay:  [  //下标七天
                    "2019-05-08",
                    "2019-05-09",
                    "2019-05-10",
                    "2019-05-11",
                    "2019-05-12",
                    "2019-05-13",
                    "2019-05-14"
                ],
    			sevenDate: [  //三份数据  一组七天
                    [60,83,50,48,121,162,96],
                    [18,24,17,31,13,29,8],
                ],
    		}
    	},
        created(){
        },
    	components: {
    		headTop,
    		tendency,
    	},
    	mounted(){
    		this.initData();
    	/*	for (let i = 6; i > -1; i--) {
    			const date = dtime(new Date().getTime() - 86400000*i).format('YYYY-MM-DD')
    			this.sevenDay.push(date)
    		}
    		this.getSevenData();*/
    	},
        computed: {

        },
    	methods: {
    		async initData(){
    		    // const userCountResult = await analysisManage.analysisUserCountByDate();
    		    // if (userCountResult) {
    		    //     this.allUserCount = userCountResult.totalCount;
    		    //     if (userCountResult.dateKeyList) {
                //         this.sevenDay = userCountResult.dateKeyList.reverse();
                //         this.sevenDate[0] = userCountResult.dataList.reverse();
                //         this.addUser = userCountResult.dataList[0];
                //     }
                //
                // }
                // const adminUserCountResult = await analysisManage.analysisAdminUserCountByDate();
    		    // if (adminUserCountResult) {
    		    //     this.allAdminCount = adminUserCountResult.totalCount;
    		    //     if (adminUserCountResult.dataList) {
                //         this.sevenDay = adminUserCountResult.dateKeyList.reverse();
    		    //         this.sevenDate[1] = adminUserCountResult.dataList.reverse();
    		    //         this.addAdmin = adminUserCountResult.dataList[0]
                //     }
    		    // }
    			// const today = dtime().format('YYYY-MM-DD')
    		/*	Promise.all([userCount(today), orderCount(today), adminDayCount(today), getUserCount(), getOrderCount(), adminCount()])
    			.then(res => {
    				this.userCount = res[0].count;
    				this.orderCount = res[1].count;
                    this.adminCount = res[2].count;
                    this.allUserCount = res[3].count;
                    this.allOrderCount = res[4].count;
                    this.allAdminCount = res[5].count;
    			}).catch(err => {
    				console.log(err)
    			})*/
    		}
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom:  25px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;

            }
            .head{
                border-radius: 6px;
                font-size: 15px;
                padding: 7px 0;
                color: #fff;
                display: inline-block;
                font-weight: 100;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
	}
    .wan{
        .sc(16px, #333)
    }
</style>
