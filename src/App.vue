<template>
	<div id="app">
		<BlogNav></BlogNav>
		<router-view></router-view>
	</div>
</template>

<script>
import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import BlogNav from './components/BlogNav.vue'

export default {
	name: 'app',
	components: {
		ShowBlogs,
		AddBlog,
		BlogNav,
	},
}
</script>

<style>
/* 未激活滚动条时滚动条显示灰色不可用（保留位置） */
html {
	overflow-y: scroll;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
