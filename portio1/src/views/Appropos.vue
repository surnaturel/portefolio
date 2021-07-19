<template>
<div class="appropos">
	<v-card class="mx-auto papa">
		
		<v-img class='photo_appropos' align="center" justify="center" src="@/assets/equipe.jpeg"  height='600' aspect-ratio="2">
		<MenuScrole class="menu_apropos"/>
		<Navbar class="navbar_apropos"/>
		</v-img>
		<v-card-title class="pa-0 black--text"> En savoir plus sur moi</v-card-title>
		<v-card-actions class="action pa-0" >
			<v-btn class="pa-0 black--text" icon @click="show = !show">
				<v-icon class="pa-0 icon_approps">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
			</v-btn>
		</v-card-actions>
		<v-expand-transition>
			<div v-show="show">
				<v-divider></v-divider>
				<div class="titre_centre">
					<v-row class="" >
						<v-col class=" canter1 pa-6" cols="12">
							<v-card-title class="titre_profil pa-4" align="center" justify="center">
								<v-list-item three-line>
									<v-list-item-content>
										<v-list-item-title class="text-h4 mb-1 titre_appropos">Qui suis-je</v-list-item-title>
										<v-list-item-subtitle class='sous_titre_appropos'>
											Ravie de faire ta connaissance ! Je m'appelle Edou,je suis developpeur web front tend, autodicdate depuis 2019.Titulaire d'un BAC E, d'un BTS en (MAINTENANCES DES SYSTEMES DE PRODUCTIONS) ET LICENCE PRO en (GENIE ELECTRIQUE ET INFORMATIQUE).
											J'ai eu a faire plusieurs stages dans le domaines ELECTRO-TECHNIQUE . Mais etant passionné d'informatique depuis tout jeune, J'ai toujours eu cette envie de faire de ca mon metié. Cependant je
											ne regrette pas mon parcours professionnel qui m'a apporté maturité, conscience professionnel et autonomie,et qui ma permis de travailler 1 ans a  <a href="https://neerone.com/" target="_blank">NEERONE SOCIAL LEARNING</a> comme devellopeur web front end
										</v-list-item-subtitle>
										<v-list-item-title class="text-h4 mb-1 titre_appropos">Je suis motivé</v-list-item-title>
										<v-list-item-subtitle class='sous_titre_appropos'>
											Aujourrd'huit apres pret de 2 ans de formation ,je suis actuellement à la recherche d'un emploie dans une entreprise de devellopeur web.Sociable et à l’écoute, je sais m’adapter à une situation en place et pourrais ainsi m’intégrer sans le moindre problème à votre équipe.
										</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-card-title>
						</v-col>
					</v-row>
				</div>
			</div>
		</v-expand-transition>
    </v-card>
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
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MenuScrole from '@/components/Menu_scrole'
  export default {
	components:{
		MenuScrole,Navbar
	},
    data: () => ({
		icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
		show: false,
    }),
  }
</script>
<style scoped>
.photo_appropos{
}
.menu_apropos{
	display: none;
}
.sous_titre_appropos{
	display: block;
	padding: 1%;
	font-size: 1.1rem;
}
.papa{
	position: relative;
}
.icon_approps{
	height: 46px !important;
	font-size: 46px !important;;
	width: 46px !important;;
}
.titre_profil{
}
@media only screen and (max-width: 600px){
	.menu_apropos{
		display: block;
	}
	.navbar_apropos{
		display: none;
	}
}
</style>