<template>			
	<div class="footer">
		<template>
			<v-footer dark padless>
				<v-card class="flex" flat tile >
					<v-card-title class="teal">
						<strong class="subheading">Connectez-vous avec nous sur les réseaux sociaux !</strong>
						<v-spacer></v-spacer>
						<v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
							<v-icon size="24px">
								{{ icon }}
							</v-icon>
						</v-btn>
					</v-card-title>
					<v-card-text class="py-2 white--text text-center">
						{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
					</v-card-text>
				</v-card>
		</v-footer>
	</template>		
</div>
</template>

<script>
export default {
	data(){
		return{
			icons: [
				'mdi-facebook',
				'mdi-twitter',
				'mdi-linkedin',
				'mdi-instagram',
			],
		}
	}
}
</script>
<style scoped>
.footer{
	position: absolute;
	bottom: O;
	right: 0;
	left: 0;
}
@media only screen and (max-width: 600px){
	.subheading{
		display: none;
	}
}
</style>