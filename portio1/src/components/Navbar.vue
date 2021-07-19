<template>
<div class="navbar1">
	<v-tabs class="navbar" background-color="transparent" left >
		<v-tab class="titre_nav" router to='/'>Acceuil</v-tab>
		<v-tab class="titre_nav" router to='/appropos'>A propos</v-tab>
		<v-tab class="titre_nav" router to='/cv'>CV</v-tab>
		<v-tab class="titre_nav" router to='/services'>Service</v-tab>
		<v-tab class="titre_nav" router to='/work'>Worck</v-tab>
	</v-tabs>
</div>
</template>
<script>
export default {
	name: 'Navbar'
}
</script>

<style >
.navbar{
	position: absolute;
	top:3vh;
	left: 0;
	right: 0;
	padding-left: 10%;
	
}
.titre_nav{
	font-size: 1.1rem !important;
	color: white !important;
}
</style>