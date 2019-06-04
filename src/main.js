import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta) {
        document.title = to.meta[to.meta.length - 1];
    }
    next();
})

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
