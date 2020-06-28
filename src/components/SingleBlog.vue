<template>
	<div id="SingBlog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.content }}</article>
		<p>作者：{{ blog.author }}</p>
		<p>分类：</p>
		<ul>
			<li v-for="(type, index) in blog.types" :key="index">
				{{ type }}
			</li>
		</ul>
		<button @click="deleteBlod">删除</button>
		<router-link v-bind:to="'/edit/' + id">编辑</router-link>
	</div>
</template>

<script>
export default {
	name: 'SingleBlog',
	data() {
		return {
			id: this.$route.params.id,
			blog: {},
		}
	},
	created() {
		this.$http
			.get('https://blog-system-bd04c.firebaseio.com/posts/' + this.id + '/.json')
			.then((res) => {
				this.blog = res.body
			})
	},
	methods: {
		deleteBlod() {
			this.$http
				.delete('https://blog-system-bd04c.firebaseio.com/posts/' + this.id + '/.json')
				.then((res) => {
					this.$router.push({ path: '/' })
				})
		},
	},
}
</script>

<style scoped>
#SingBlog {
	max-width: 960px;
	margin: 0 auto;
	padding: 20px;
	background: #eee;
	border: 1px dotted #aaa;
}
</style>
