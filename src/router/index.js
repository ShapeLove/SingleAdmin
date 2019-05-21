import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');
const tagList = r => require.ensure([], () => r(require('@/page/tagList')), 'tagList');
const test = r => require.ensure([], () => r(require('@/page/test')), 'test');
const reportCheck = r => require.ensure([], () => r(require('@/page/reportCheck')), 'reportCheck');
const warning = r => require.ensure([], () => r(require('@/page/warning')), 'warning');
const routes = [
	{
		path: '/',
		component: login
	},
    {
        path: '/test',
        component: test
    },
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/reportCheck',
			component: reportCheck,
			meta: ['审核', '举报审核'],
		},{
			path: '/userList',
			component: userList,
			meta: ['数据管理', '用户列表'],
		},{
            path: '/tagList',
            component: tagList,
            meta: ['数据管理', '标签列表'],
        },{
			path: '/adminList',
			component: adminList,
			meta: ['数据管理', '管理员列表'],
		},{
			path: '/visitor',
			component: visitor,
			meta: ['图表', '用户分布'],
		},{
			path: '/vueEdit',
			component: vueEdit,
			meta: ['编辑', '文本编辑'],
		},{
			path: '/adminSet',
			component: adminSet,
			meta: ['设置', '管理员设置'],
		},{
            path: '/warning',
            component: warning,
            meta: ['异常', '异常信息'],
        }]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
    mode: "history"
})
