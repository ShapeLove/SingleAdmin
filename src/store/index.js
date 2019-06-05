import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '@/api/getData'

Vue.use(Vuex)

const state = {
	adminInfo: {
		avatar: 'default.jpg'
	},
}

const mutations = {
	saveAdminInfo(state, adminInfo){
		state.adminInfo = adminInfo;
	},
    deleteAdminInfo(state) {
	    state.adminInfo = null;
    }
}

const actions = {
	async getAdminData({commit}){
		try{
			const res = await getAdminInfo()
			if (res) {
				commit('saveAdminInfo', res);
			}else{
				throw new Error(res.type)
			}
		}catch(err){
			// console.log(err.message)
            commit('deleteAdminInfo');
		}
	},
    removeAdminData({commit}) {
	    commit('deleteAdminInfo');
    }
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})
