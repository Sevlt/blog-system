import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
import axios from 'axios'

axios.defaults.baseURL = 'https://blog-system-bd04c.firebaseio.com'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

// 自定义指令
Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.color =
			'#' +
			Math.random()
				.toString(16)
				.slice(2, 8)
	},
})
Vue.directive('theme', {
	bind(el, binding, vnode) {
		if (binding.value == 'wide') {
			el.style.maxWidth = '1260px'
		} else if (binding.value == 'narrow') {
			el.style.maxWidth = '560px'
		}
		if (binding.arg == 'column') {
			el.style.background = '#6677cc'
			el.style.padding = '20px'
		}
	},
})

// 自定义过滤器
Vue.filter('touppercase', function(value) {
	return value.toUpperCase()
})
Vue.filter('snippet', function(value) {
	return value.slice(0, 100) + '...'
})

// 自定义路由(1)
const router = new VueRouter({
	mode: 'history',
	routes: Routes,
})

new Vue({
	router: router,
	render: (h) => h(App),
}).$mount('#app')
