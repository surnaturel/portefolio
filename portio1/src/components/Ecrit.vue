<template>
  <div class="ecrire">
	<h2 class="ecriture">
		<span class="je_suis">JE SUIS</span> 
		<span class="typed-text">{{typeValue}}</span>
		<span class="cursor" :class=" {'typing' : typeStatus} ">&nbsp;</span>
	</h2>
  </div>
</template>

<script>
export default {
	name : 'Acceuil',
	data(){
		return{
			typeValue : '',
			typeStatus: false,
			typeArray: ['Devellopeur web Front tend', 'Passioner des technologies JS'],
			typingSpeed : 200,
			erasingSpeed: 100,
			newTextDelay: 2000,
			typeArrayIndex: 0,
			charIndex: 0
		}
	},
	methods:{
		typeText(){
			if(this.charIndex < this.typeArray[this.typeArrayIndex].length ){
				if(!this.typeStatus){
					this.typeStatus = true
				}
				this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
				this.charIndex += 1

				setTimeout(this.typeText, this.typingSpeed)
			}else{
				this.typeStatus = false 
				setTimeout(this.eraseText, this.newTextDelay)
			}
		},
		eraseText(){
			if(this.charIndex >0){
				if(!this.typeStatus){
					this.typeStatus = true
				}
				this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex -1)
				this.charIndex -= 1
				setTimeout(this.eraseText, this.erasingSpeed)
			}else{
				this.typeStatus = false
				this.typeArrayIndex += 1
				if(this.typeArrayIndex >= this.typeArray.length){
					this.typeArrayIndex = 0
				}
				setTimeout(this.typeText, this.typingSpeed + 1000)
			}
		}
	},
	created(){
		setTimeout(this.typeText, this.newTextDelay +200)
	}
		
}
</script>

<style>

.ecriture{
}
span.typed-text{
	color: rgb(101, 103, 200) !important;
	font-size: 1.9rem;
	margin-left: 10px;
}
span.cursor{
	display: inline-block;
	margin-left: 3px;
	width: 4px;
	height: 40px;
	background-color: rgb(0, 60, 255);
	animation: blink1 .4s infinite;
}
span.cursor.typing{
	animation:none ;
}

@keyframes blink1 {
  49% { background-color: rgb(0, 60, 255); }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
}
@media only screen and (max-width: 600px){
	.ecriture{
	}
	.je_suis{
		display: none;
	}
	span.typed-text{
		color: rgb(101, 103, 200) !important;
		font-size: 1.2rem;
	}
	span.cursor{
		height: 30px;
	}
}
@media only screen and (max-width: 710px) and (min-width: 601px){
	.ecriture{
	}
	.je_suis{
		font-size: 3vw;
	}
	span.typed-text{
		font-size: 1.4rem;
	}
}
@media only screen and (max-width: 1264px) and (min-width: 961px){
	.je_suis{
		font-size: 1.5vw;
	}
	span.typed-text{
		font-size: 1.4rem;
	}
		span.cursor{
		height: 22px;
	}
}
</style>