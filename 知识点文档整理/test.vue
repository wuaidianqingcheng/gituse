
<template>
	<div></div>
</template>

<script>
	import './api.js'
	mounted(){
		indexData().then( res => {
			console.log(res)
		})
	}
</script>

<style>
</style>
