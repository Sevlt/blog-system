<template>
	<div id="addBlog">
		<h2>写博客</h2>
		<form v-if="!submited">
			<label>标题 <input type="text" v-model="blog.title" required/></label>
			<label>内容 <textarea v-model="blog.content"></textarea></label>
			<div class="checkBoxes">
				<label><input type="checkbox" value="Vue" v-model="blog.types" />Vue</label>
				<label><input type="checkbox" value="React" v-model="blog.types" />React</label>
				<label>
					<input type="checkbox" value="Angular" v-model="blog.types" />Angular
				</label>
			</div>
			<label
				>作者
				<select v-model="blog.author">
					<option v-for="author in authors" :key="author">
						{{ author }}
					</option>
				</select>
			</label>
			<button @click.prevent="post">发布博客</button>
		</form>
		<h3 v-if="submited">博客发布成功！</h3>
		<hr />
		<div class="preview">
			<h3>博客总览</h3>
			<p>标题：{{ blog.title }}</p>
			<p>内容：{{ blog.content }}</p>
			<p>博客分类：</p>
			<ul>
				<li v-for="type in blog.types" :key="type">
					{{ type }}
				</li>
			</ul>
			<p>作者：</p>
			{{ blog.author }}
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'addBlog',
	data() {
		return {
			blog: {
				title: '',
				content: '',
				types: [],
				author: '',
			},
			authors: ['SEVLT', 'Jack', 'Mike'],
			submited: false,
		}
	},
	methods: {
		post() {
			axios.post('/posts.json', this.blog).then((res) => {
				this.submited = true
			})
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addBlog * {
	box-sizing: border-box;
}
#addBlog {
	margin: 20px auto;
	max-width: 600px;
	pad: 20px;
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
	background: crimson;
	color: #fff;
	border: 0;
	padding: 14px;
	border-radius: 4px;
	font-size: 18px;
	cursor: pointer;
}
.preview {
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
.preview h3 {
	margin-top: 10px;
}
</style>
