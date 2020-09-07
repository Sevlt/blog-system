<template>
	<div v-theme:column="'wide'" id="EditBlog">
		<h2>编辑博客</h2>
		<form v-if="!submited">
			<label>标题 </label><input type="text" v-model="blog.title" required />
			<label>内容 </label><textarea v-model="blog.content"></textarea>
			<div class="checkBoxes">
				<label><input type="checkbox" value="Vue" v-model="blog.types" /> Vue</label>
				<label><input type="checkbox" value="React" v-model="blog.types" /> React</label>
				<label>
					<input type="checkbox" value="Angular" v-model="blog.types" /> Angular
				</label>
			</div>
			<label>作者</label>
			<select v-model="blog.author">
				<option v-for="author in authors" :key="author">
					{{ author }}
				</option>
			</select>
			<button @click.prevent="post">发布博客</button>
		</form>
		<br />
		<h3 v-if="submited">博客发布成功！</h3>
		<br />
		<hr />
		<div class="preview">
			<h3>博客总览</h3>
			<br />
			<p>标题：{{ blog.title }}</p>
			<br />
			<p>内容：{{ blog.content }}</p>
			<br />
			<p>分类：</p>
			<ul>
				<li v-for="type in blog.types" :key="type">
					{{ type }}
				</li>
			</ul>
			<br />
			<p>作者：</p>
			{{ blog.author }}
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'EditBlog',
	data() {
		return {
			id: this.$route.params.id,
			blog: {},
			authors: ['SEVLT', 'Jack', 'Mike'],
			submited: false,
		}
	},
	methods: {
		fetchData() {
			axios.get('/posts/' + this.id + '/.json').then((res) => {
				this.blog = res.data
				// 若旧博客未选择类型，点击编辑后把 types 置为空数组
				if (this.blog.types === undefined) {
					this.blog.types = []
				}
			})
		},
		post() {
			axios.put('/posts/' + this.id + '/.json', this.blog).then((res) => {
				this.submited = true
			})
		},
	},
	created() {
		this.fetchData()
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#EditBlog * {
	box-sizing: border-box;
}
#EditBlog {
	min-width: 500px;
	margin: 0 auto;
	border-radius: 10px;
	margin-bottom: 30px;
}
label {
	display: block;
	margin: 20px 0 10px;
}
input[type='text'],
textarea,
select {
	display: block;
	width: 100%;
	padding: 8px;
	border-radius: 5px;
	outline: none;
}
textarea {
	height: 200px;
}
.checkBoxes label {
	display: inline-block;
	margin-top: 0;
}
.checkBoxes input {
	display: inline-block;
	margin-left: 10px;
}
button {
	display: block;
	margin: 20px 0;
	background: #007acc;
	color: #fff;
	border: 0;
	padding: 14px;
	border-radius: 4px;
	font-size: 18px;
	cursor: pointer;
	outline: none;
}
.preview {
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
.preview ul li {
	margin-left: 65px;
}
.preview h3 {
	margin-top: 10px;
}
</style>
