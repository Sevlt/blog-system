# 个人博客系统

#### Vue / axios / Firebase

### 效果预览

![效果预览](https://i.loli.net/2020/07/01/V9xeynLSoCAWKPc.png)

### 随机彩色博客标题

```javascript
Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.color =
			'#' +
			Math.random()
				.toString(16)
				.slice(2, 8)
	},
})
```

### 博客内容点击之前预览方式

```javascript
Vue.filter('snippet', function(value) {
	return value.slice(0, 100) + '...'
})
```

### 根据博客标题搜索文章

```javascript
		filterBlog() {
			return this.blogs.filter((blog) => {
				return blog.title.match(this.search)
			})
		},
```

### 点击编辑按钮原始数据继续保留在表单

```javascript
	created() {
		this.fetchData()
    },
    methos()
    fetchData() {
	axios.get('/posts/' + this.id + '/.json'then((res) => {
		this.blog = res.data
		// 若旧博客未选择类型，点击编辑后把types置为空数组
		if (this.blog.types === undefined) {
			this.blog.types = []
		}
	})
		},
```
