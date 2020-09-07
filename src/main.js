import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
import axios from 'axios'

axios.defaults.baseURL = 'https://blog-system-bd04c.firebaseio.com'

Vue.use(VueRouter)

Vue.config.productionTip = false

// 自定义指令
// el：元素  binding：表示对象
Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.color =
			'#' +
			Math.random()
				.toString(16)
				.slice(2, 8)// 第2～7个数，不包含第 8 个
	},
})
Vue.directive('theme', {
	bind(el, binding, vnode) {
		// v-theme="'wide'"
		if (binding.value == 'wide') {
			el.style.maxWidth = '760px'
		} else if (binding.value == 'narrow') {
			el.style.maxWidth = '560px'
		}
		// binding.arg：binging 的参数
		if (binding.arg === 'column') {
			el.style.background = '#c8c8c9' // 灰色
			el.style.padding = '20px'
		}
	},
})

// 自定义过滤器
Vue.filter('snippet', function(value) {
	return value.slice(0, 100) + '...'
})

// 自定义路由
const router = new VueRouter({
	mode: 'history',
	routes: Routes,
})

new Vue({
	router: router,
	render: (h) => h(App),
}).$mount('#app')
