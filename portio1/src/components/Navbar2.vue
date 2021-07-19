<template>
<div class="navbar2">
	<v-tabs class="navbar" background-color="transparent" left >
		<v-tab class="titre_nav2" router to='/'>Acceuil</v-tab>
		<v-tab class="titre_nav2" router to='/appropos'>A propos</v-tab>
		<v-tab class="titre_nav2" router to='/cv'>CV</v-tab>
		<v-tab class="titre_nav2" router to='/services'>Service</v-tab>
		<v-tab class="titre_nav2" router to='/work'>Worck</v-tab>
	</v-tabs>
</div>
</template>
<script>
export default {
	name: 'Navbar'
}
</script>

<style >
.navbar2{
	position: absolute;
	top:3vh;
	left: 0;
	right: 0;
	padding-left: 10%;
	
}
.titre_nav2{
	font-size: 1.1rem !important;
	color: black !important;
}
</style>