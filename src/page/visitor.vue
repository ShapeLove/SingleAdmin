<template>
    <div>
        <head-top></head-top>
        <visitor-pie :pieData="pieData"></visitor-pie>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    import visitorPie from '@/components/visitorPie'
	import {analysisManage} from '@/api/getData'
    export default {
    	data(){
    		return {
    			pieData: {
    			    beijing: 5699,
                    hangzhou: 1407,
                    qita: 13758,
                    shanghai: 2373,
                    shenzhen: 2619
                },
    		}
    	},
    	components: {
    		headTop,
            visitorPie,
    	},
    	mounted(){
    		this.initData();
    	},
    	methods: {
    		async initData(){
    			try{
    				const res = await analysisManage.analysisUserCountByCity();
    				if (res) {
    					this.pieData = {result : res};
    					//返回值 返回状态1 以及 城市分布对象
                        //{beijing: 5450，hangzhou: 1391}
    					console.log(this.pieData)
    				}else{
    					throw new Error(res)
    				}
    			}catch(err){
    				console.log('获取用户分布信息失败',err);
    			}
    		},
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
</style>
