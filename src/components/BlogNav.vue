<template>
	<nav>
		<ul>
			<li>
				<router-link to="/" exact>博客</router-link>&nbsp;
				<router-link to="/add" exact>写博客</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'BlogNav',
}
</script>

<style scoped>
nav {
	background: #007acc;
	width: 100%;
	padding: 30px 0;
	margin-bottom: 35px;
}
ul {
	list-style-type: none;
	text-align: center;
	margin: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #fff;
	text-decoration: none;
	padding: 12px;
	border-radius: 5px;
}
.router-link-active {
	background: rgba(255, 255, 255, 0.8);
	color: #444;
}
</style>
