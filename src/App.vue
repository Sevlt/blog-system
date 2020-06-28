<template>
	<div id="app">
		<!-- <AddBlog></AddBlog> -->
		<!-- <ShowBlogs></ShowBlogs> -->
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

<style></style>
