
<template>
	<div class="about">
		<div class="shart">
			<div class="button" @click="afficher">Me Decouvrire</div>
			<v-btn class="social twitter ma-8" x-large dark color="#00aced">CV</v-btn>
			<v-btn class=" social facebook mma-8" x-large dark color="#3b5998" >Servives</v-btn>
			<v-btn class="social google ma-8" x-large dark color="#dd4b39">Appropos</v-btn>
			<v-btn class="social google ma-8" x-large dark color="#b00">Worck</v-btn>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
		<defs>
			<filter id="goo">
			<feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
			<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
			<feBlend in="SourceGraphic" in2="goo" />
			</filter>
		</defs>
		</svg>
	</div>
</template>
<script>
import $ from 'jquery'	
export default {
	name: 'App',
	data: () => ({
		//
	}),
	methods:{
		afficher(){
			$(".social.twitter").toggleClass("clicked");
			$(".social.facebook").toggleClass("clicked");
			$(".social.google").toggleClass("clicked");
			$(".social.youtube").toggleClass("clicked");
		}
	}
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600');

 .shart {
	display: flex;
	justify-content: center;
	align-items: center;
	filter: url('#goo');
	width: 90%;
	margin: 0 auto;
	

}
 .button {
	z-index: 99;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40%;
	height: 40px;
	background: linear-gradient(85deg, #b388eb, #8093f1);
	border-radius: 20px;
	color: #fff;
	font-size: 30px;
	letter-spacing: 2px;
	font-weight: 400;
}
 .social {
	opacity: 0;
	position: relative;
	margin: 50px !important;
    width: 90px;
	height: 90px;
	border-radius: 100%;
	display: inline-block;
	color: #fff;
	font-size: 20px;
	text-align: center;
}
 .social i {
	margin-top: 90px;
}
.social a {
	color: #fff;
}
.clicked {
	opacity: 1;
	transition: 2s ease-in-out;
	transform: translateY(200%);
}


</style>