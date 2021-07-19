<template>
  <v-app id="app">
	<div class="chargement" v-if='maman'>
		<span class="letter">L</span>
		<span class="letter">O</span>
		<span class="letter">A</span>
		<span class="letter">D</span>
		<span class="letter">I</span>
		<span class="letter">N</span>
		<span class="letter">G</span>
		<span class="letter">.</span>
		<span class="letter">.</span>
		<span class="letter">.</span>
	</div>
    <v-main class="main_home" v-if='papa'>
       <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
	name: 'App',
	components: {
	},
	data(){
		return{
			papa : false,
			maman : false
		}
	},
	mounted(){
		document.onreadystatechange = () => { 
			if (document.readyState == "complete") { 
				console.log('nous somme charger')
				document.querySelector('.chargement').classList.add('fondu-out')
				setTimeout(() => {(
					console.log('bonjour'),
					this.papa = true
					
					)}, 1000)
				
			}else{
				this.maman = true
			}
		}
	}
	
};
</script>
<style>
#app{
	width: 100%;
}
.main_home{
	width: 100%;
}
.chargement{
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	background: black;
	justify-content: center;
	align-items: center;
}

.letter{
	color: #484848;
	font-size: 80px;
	font-weight: 600;
	letter-spacing: 15px;
	margin-bottom: 150px;
	animation: flash 0.9s linear infinite;
	animation-fill-mode: both;
}

.letter:nth-child(1){
	animation-delay: 0.1s;
}
.letter:nth-child(2){
	animation-delay: 0.2s;
}
.letter:nth-child(3){
	animation-delay: 0.3s;
}
.letter:nth-child(4){
	animation-delay: 0.4s;
}
.letter:nth-child(5){
	animation-delay: 0.5s;
}
.letter:nth-child(6){
	animation-delay: 0.6s;
}
.letter:nth-child(7){
	animation-delay: 0.7s;
}
.letter:nth-child(9){
	animation-delay: 0.9s;
}
.letter:nth-child(10){
	animation-delay: 10s;
}
@keyframes flash {
	from {
		transform: scale3d(1, 1, 1);
	}

	30% {
		transform: scale3d(1.25, 0.75, 1);
	}

	40% {
		transform: scale3d(0.75, 1.25, 1);
	}

	50% {
		transform: scale3d(1.15, 0.85, 1);
	}

	65% {
		transform: scale3d(.95, 1.05, 1);
	}

	75% {
		transform: scale3d(1.05, .95, 1);
	}

	to {
		transform: scale3d(1, 1, 1);
	}
}

.fondu-out{
	opacity: 0;
	transition: opacity 4.4s ease-in-out;
}

</style>