<template>
	<div class="buttonani">
		<div class="contact mt-2">
			<button class="btn1" href="#">Contacte moi</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ButtonAni',
	data: () => ({
		//
	}),
};
</script>
<style>
	@import url("https://fonts.googleapis.com/css?family=Lato:400,700");
 * {
	box-sizing: border-box;
}
 .contact {
	width: auto;
	margin: auto;
}
 @keyframes topAnimation {
	from {
		transform: translate(0rem, 0);
	}
	to {
		transform: translate(0rem, 3.5rem);
	}
}
 @keyframes bottomAnimation {
	from {
		transform: translate(-11.5rem, 0);
	}
	to {
		transform: translate(0rem, 0);
	}
}
button.btn1 {
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 700;
	border: 0;
	position: relative;
	letter-spacing: 0.15em;
	margin: 0 auto;
	padding: 1rem 2.5rem;
	background: transparent;
	outline: none;
	font-size: 28px;
	color: white ;
	transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;
}
 button.btn1::after, button.btn1::before {
	border: 0;
	content: "";
	position: absolute;
	height: 40%;
	width: 10%;
	transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	z-index: -2;
	border-radius: 50%;
}
 button.btn1::before {
	border: 0;
	background-color: #6495ED;
	top: -0.75rem;
	left: 0.5rem;
	-webkit-animation: topAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s infinite alternate;
          animation: topAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s infinite alternate;
}
 button.btn1::after {
	background-color: #B0E0E6;
	top: 3rem;
	left: 13rem;
	-webkit-animation: bottomAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s infinite alternate;
          animation: bottomAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s infinite alternate;
}
 button.btn1:hover {
	color: black;
}
 button.btn1:hover::before, button.btn1:hover::after {
	top: 0;
	height: 100%;
	width: 100%;
	border-radius: 0;
	-webkit-animation: none;
          animation: none;
}
 button.btn1:hover::after {
	left: 0rem;
}
button.btn1:hover::before {
	top: 0.5rem;
	left: 0.35rem;
}
@media only screen and (max-width: 599px) and (min-width: 401px){

}
@media only screen and (max-width: 600px){
	button.btn1 {
		font-size: 11px;
	}
}
@media only screen and (max-width: 710px) and (min-width: 601px){
	button.btn1 {
		font-size: 20px;
	}
}
@media only screen and (max-width: 960px) and (min-width: 711px){
	button.btn1 {
		font-size: 20px;
	}
}
</style>