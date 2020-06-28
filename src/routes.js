import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog.vue'

export default [
	{ path: '/', component: ShowBlogs },
	{ path: '/add', component: AddBlog },
	{ path: '/blog/:id', component: SingleBlog },
	{ path: '/edit/:id', component: EditBlog },
]
