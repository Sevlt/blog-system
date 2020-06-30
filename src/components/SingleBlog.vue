<template>
	<div id="SingleBlog">
		<h1>{{ blog.title }}</h1>
		<br />
		<article>{{ blog.content }}</article>
		<br />
		<p>分类：</p>
		<ul>
			<li v-for="(type, index) in blog.types" :key="index">
				{{ type }}
			</li>
		</ul>
		<br />
		<p>作者：{{ blog.author }}</p>
		<button class="button" @click="deleteBlod">删除</button>
		<router-link class="button left" v-bind:to="'/edit/' + id">编辑</router-link>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'SingleBlog',
	data() {
		return {
			id: this.$route.params.id,
			blog: {},
		}
	},
	created() {
		axios.get('/posts/' + this.id + '/.json').then((res) => {
			this.blog = res.data
		})
	},
	methods: {
		deleteBlod() {
			axios.delete('/posts/' + this.id + '/.json').then((res) => {
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
#SingBlog ul li {
	margin-left: 65px;
}
.button {
	text-decoration: none;
	text-align: center;
	display: inline-block;
	margin: 20px 0;
	background: #007acc;
	color: #fff;
	border: 0;
	padding: 14px;
	border-radius: 4px;
	font-size: 18px;
	cursor: pointer;
	width: 100px;
}
.button.left {
	margin-left: 15px;
}
</style>
