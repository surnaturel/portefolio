<template>
	<div class='mon_cv' dark>
		<MenuScrole class='menuScrole-cv'/>
		<Navbar2 class='nav-cv'/>
		<v-container class='main'>
			<template>
				<div class="contenu_cv ">
					<v-row class="ligne1">
						<v-col cols="12" sm="12" md="6" class="colon_nom_prenom pa-2">
							<div class="colon_nom_prenom pa-2" >
								<v-list-item three-line class="profil_cv">
									<v-list-item-content>
										<v-list-item-title class="nom_cv mb-2">Edou Essoh Yannick Franck</v-list-item-title>
										<div class=" naissaance_nomCV mb-3">Née le 07/12/88 (Ivoirien/Gabonais)</div>
										<v-list-item-subtitle class='contacte_cv'>Contact : +225(0140185656/0757958785) <br>+241(77351510/74433279)</v-list-item-subtitle>
										<h3 class="mt-1" >Permis : ABCDE</h3>
									</v-list-item-content>
								</v-list-item>
								<v-btn class='telecharge'  color="primary">Telecharge le CV (pdf)</v-btn>
							</div>
						</v-col>
						<v-col class='photo_cv colone' cols="12" sm="6" md="6">
							<v-img class='img_cv' src="@/assets/imgCV40.jpg"></v-img>
						</v-col>
					</v-row>
				</div>
			</template>
			<div class="informatio_titre demoT2"><h2>Curcus Academique</h2></div>
			<div class="Curus_Academique">
				<v-row class="mb-6">
					<v-col sm='12' md="7" class='curcus coloneT'>
						<v-switch v-model="reverse" label="Tu peux renverser"></v-switch>
						<v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
							<v-timeline-item v-for="curcu1 in curcus1" :key="curcu1.id">
								<span slot="opposite">{{curcu1.annee}}</span>
								<v-card class="elevation-2">
									<v-card-title class="text-h5">
										{{curcu1.niveau}}
									</v-card-title>
									<v-card-text>
										<h4>{{curcu1.nom}}</h4>
										{{curcu1.ecole}}
									</v-card-text>
								</v-card>
							</v-timeline-item>
						</v-timeline>
						<v-timeline :reverse="reverse" dense>
							<v-timeline-item v-for="curcu1 in curcus2" :key="curcu1.id">
								<span slot="opposite">{{curcu1.annee}}</span>
								<v-card class="elevation-2">
									<v-card-title class="text-h5">
										{{curcu1.niveau}}({{curcu1.annee}})
									</v-card-title>
									<v-card-text>
										<h4>{{curcu1.nom}}</h4>
										{{curcu1.ecole}}
									</v-card-text>
								</v-card>
							</v-timeline-item>
						</v-timeline>
					</v-col>
					<v-col sm='5' md="5" class="colone">
						<div class="photo_curcus">
							<v-img class='img_curcus' src="@/assets/imgCV3443.webp"></v-img>
							<div class="informatio_titre demoT"><h2>Curcus Academique</h2></div>
						</div>
					</v-col>
				</v-row>
			</div>
			<div class="informatio_titre demoT2"><h2>Experience Professinelles</h2></div>
			<div class="experience_professionelles">
				<v-row class="mb-6">
					<v-col sm='5' md="5" class="colone">
						<div class="photo_curcus">
							<v-img class='img_curcus' src="@/assets/imgCV90.webp"></v-img>
							<div class="informatio_titre demoT"><h2>Experience Professinelles</h2></div>
						</div>
					</v-col>
					<v-col sm='12' md="7" class="experience coloneT">
						<div class="pa-2 experience">
							<v-timeline>
								<v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
								<template v-slot:opposite>
									<span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
								</template>
								<div class="py-4">
									<h3 :class="`headline font-weight-light mb-4 ${year.color}--text`">{{year.entreprise}}</h3>
									<div><h4> {{year.description}} :</h4>{{year.experience}} </div>
								</div>
								</v-timeline-item>
							</v-timeline>
						</div>
					</v-col>
				</v-row>
			</div>
			<div class="informatio_titre demoT2"><h2>Competence</h2></div>
			<div class="competence">
				<v-row>
					<v-col xs='12' sm='12' md="7" class='Competence coloneT'>
						<v-timeline class="mt-6" :dense="$vuetify.breakpoint.smAndDown">
							<v-timeline-item color="green lighten-2" fill-dot right>
								<v-card>
									<v-card-title class="green lighten-2">
										<v-icon dark size="32" class="mr-2">
											mdi-magnify
										</v-icon>
										<h2 class="text-h5 white--text font-weight-light">
											Programation WEB
										</h2>
									</v-card-title>
									<v-container>
									<v-row class='titre_compo'>
										<v-col cols="12" md="7">
											<template>
												<v-treeview rounded hoverable activatable :items="items"></v-treeview>
											</template>
										</v-col>
										<v-col class="hidden-sm-and-down text-right" md="5">
											<v-icon size="54">
												mdi-calendar-text
											</v-icon>
										</v-col>
									</v-row>
									</v-container>
								</v-card>
							</v-timeline-item>
							<v-timeline-item color="purple lighten-2" fill-dot left="">
								<v-card>
									<v-card-title class="purple lighten-2">
									<h2 class="text-h5 white--text font-weight-light">
										Administrateur B.D
									</h2>
									</v-card-title>
									<v-container>
									<v-row>
										<v-col cols="12" md="7">
											Mysql : Sql <br>Gestion des bases de données Mysql: Workbench
											<template>
												<v-treeview rounded hoverable activatable :abc="abc"></v-treeview>
											</template>
										</v-col>
										<v-col class="hidden-sm-and-down text-right" md="5">
										<v-icon size="64">
											mdi-calendar-text
										</v-icon>
										</v-col>
									</v-row>
									</v-container>
								</v-card>
							</v-timeline-item>
							<v-timeline-item color="red lighten-1" fill-dot right="" small>
								<v-card>
									<v-card-title class="red lighten-1 justify-end">
									<h2 class="text-h5 mr-3 white--text font-weight-light">Automatisation</h2>
									<v-icon dark size="32">mdi-account-multiple-outline</v-icon>
									</v-card-title>
									<v-container>
									<v-row>
										<v-col class="hidden-sm-and-down" md="2">
										<v-icon size="34">mdi-server-network</v-icon>
										</v-col>
										<v-col cols="12" md="10">
											Raccordement et configuration des automates  : TSX Micro SCHEIDER, S7 300/400 de SIEMES, PL7 PRO/MICRO/WIN/SIMATIC MANAGER' <br>
											<template>Langage : LADDER et CONT
												<v-treeview rounded hoverable activatable :item3s="item3s"></v-treeview>
											</template>
										</v-col>
									</v-row>
									</v-container>
								</v-card>
							</v-timeline-item>
						</v-timeline>
					</v-col>
					<v-col xs='12' sm='5' md="5" class="colone">
						<div class="photo_curcus">
							<v-img class='img_curcus' src="@/assets/imgCV55.jpg"></v-img>
							<div class="informatio_titre demoT"><h2>Competence</h2></div>
						</div>
					</v-col>
				</v-row>
			</div>
		</v-container>
		<div class="footer">
				<template>
					<v-footer
						dark padless>
						<v-card class="flex" flat tile>
							<v-card-title class="teal">
								<div class="langue">
									<v-list-item two-line>
										<v-list-item-content>
											<v-list-item-title>Langage</v-list-item-title>
											<v-list-item-subtitle>Francais : Lu et ecrit (Connaissance fondamentale)</v-list-item-subtitle>
											<v-list-item-subtitle>Anglais : Lu et ecrit (Niveau Basic)</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</div>
								<v-spacer></v-spacer>
								<div class="sport">
									<v-list-item two-line>
										<v-list-item-content>
											<v-list-item-title>Sport</v-list-item-title>
											<v-list-item-subtitle>Hand Ball</v-list-item-subtitle>
											<v-list-item-subtitle>Basket Ball</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</div>
								<v-spacer></v-spacer>
								<div class="Loisirs">
									<v-list-item two-line>
										<v-list-item-content>
											<v-list-item-title>loisirs</v-list-item-title>
											<v-list-item-subtitle>Music</v-list-item-subtitle>
											<v-list-item-subtitle>Lectures</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</div>
							</v-card-title>
							<v-card-text class="py-2 white--text text-center">
								<v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
									<v-icon size="24px">
										{{ icon }}
									</v-icon>
								</v-btn>
								{{ new Date().getFullYear() }} — <strong>Porte Folio</strong>
							</v-card-text>
						</v-card>
					</v-footer>
				</template>
			</div>
	</div>
</template>
<script>
import Navbar2 from '@/components/Navbar2.vue'
import MenuScrole from '@/components/Menu_scrole'
export default {
	name: 'Cv',
	components: {Navbar2,MenuScrole},
	data(){
		return{
			isFlipped: false,
			reverse: true,
			items : [
				{
					id: 1,
					name: 'Langages :',
					children: [
						{ id: 2, name: 'Programation : JS, NodeJS; Vuejs' },
						{ id: 3, name: 'Balisage : HTML, CSS' },
						{ id: 4, name: 'FremeWork : Vuetify, BULMA; BOOTSTRAP, ' },
					],
				},
			],
			abc : [
				{
					id: 1,
					name: 'Administrateur des bases de données :',
					children: [
						{ id: 2, name: 'Mysql : Sql' },
						{ id: 3, name: "Gestion des bases de données Mysql: Workbench" },
					]
				},
			],
			item3s : [
				{
					id: 1,
					name: 'Automatisation :',
					children: [
						{ id: 2, name: 'Raccordement et configuration des automates  : TSX Micro SCHEIDER, S7 300/400 de SIEMES, PL7 PRO/MICRO/WIN/SIMATIC MANAGER' },
						{ id: 3, name: 'Langage : LADDER et CONT' },
					]
				},
			],
		
			curcus1 :[
				{
					annee : '2015 --> 2016',
					niveau : 'Licence 3',
					nom : 'Genie Electrique et Informatique',
					ecole : "Groupe LOKO d'Abidjan UTT"
				},
				{
					annee : '2015 --> 2016',
					niveau : 'BTS',
					nom : 'MAINTENANCE des SYSTEMES DE PRODUCTIONS',
					ecole : "Ecole Superieur de technologies LOKO d'Abidjan"
				}
			],
			curcus2 :[
				{
					annee : '2011 --> 2012',
					niveau : "BAC E",
					nom : 'Terminal',
					ecole : "Lycee Technique Omar Bongon (Gabon)"
				}
			],
			years: [
				{
				color: 'cyan',
				year: '03/10/20 --> 03/01/21',
				entreprise: 'Nerrone Social Learning',
				description : 'Developpeur Web frontend',
				experience : "J'ai appris beauncoup avec Neerone ,Comment travailler en equipe dans le delet , etre productif "
				},
				{
				color: 'green',
				year: '25/10/17 --> 21/04/18',
				entreprise: "Labo du lycee tecnhique d'Abidjan",
				description : "Programateur d'automate",
				experience : "c'etait un stage de fomartion sur les automates programables (TSX LICRO SCHNEIDER, S7 300/400 de SIEMENS, l'or de la fromation j'ai appris le travaille en equipe)  "
				},
				{
				color: 'pink',
				year: '18/03/17 --> 18/09/17',
				entreprise: 'SOTHEVE SA Zone Industrielle Koumassi',
				description : 'Maintenance Electromecanique',
				experience : "J'ai appris beauncoup avec Neerone ,Comment travailler en equipe dans le delet , etre productif "
				},
			],
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
<style >
.mon_cv{
}
.menuScrole-cv{
	display: none;
}
.contenu_cv{
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;

}
.ligne1{
	background-color: white;
	height: 70vh;
}
.colon_nom_prenom{
	height: 100%;
	
}
.profil_cv{
	width: 80%;
	margin-top: 12%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
}
.nom_cv{
	font-size: 2.0rem;
}
.photo_cv{
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.img_cv{
	width: 80%;
	height: 100%;
}
.naissaance_nomCV{
	font-size: 1.5rem;
	padding: 5% 5%;
	
}
.contacte_cv{
	font-size: 1.3rem;
}
.telecharge{
	padding: 4% 4% !important;
	margin-left: 12%;
}
.informatio_titre{
	font-size: 1.8rem;
	text-align: center;
	background-color: #666161;
	border-radius: 8px;
	color: white;
}
.demoT2{
	display: none;
}
.demoT{
	background-color: white;
	color: black;
}
div.Curus_Academique{
	margin-top: 1%;
}
.curcus{
}
.photo_curcus{
	width: 100%;
}
.img_curcus{
	width: 50%;
	margin: 1% auto;
}
.experience_professionelles{
	margin-top: 1%;
}
div.competence{
	margin-top: 1%;
}

.colone{
	display: flex;
	justify-content: center;
	align-items: center;
}
.titre{
	font-size: 1.3rem !important;
	text-align: center;
	
}
@media only screen and (max-width: 600px){
	.nav-cv{
		display: none;
	}
	.photo_cv{
		display: none;
	}
	.menuScrole-cv{
		display: block;
		margin: 0;
	}
	.img_curcus{
		display: none;
	}
	.colone{
		display: none;
	}
	.mon_cv{
		
	}
	.contenu_cv{
		height: 50vh;
	}
	.ligne1{
		width: 100%;
		height: 30vh;
		margin: 0 0%;
	}
	.demoT2{
		display: block;
		font-size: 1.0rem;
	}
	.demoT{
		display: none;
	}
	.coloneT{
		width: 100% !important;
	}
	.profil_cv{
		width: 100%;
		margin: 0%;
		position: relative;
		top: 0%;
		left: 0%;
		right: 0%;
		transform: translateX(0%);
	}
	.nom_cv{
		font-size: 1.8rem;

	}
	.contacte_cv{
		font-size: 1.1rem;
	}
	.naissaance_nomCV{
		font-size: 1.5rem;
		padding: 0% 5%;
	}
}
@media only screen and (max-width: 710px) and (min-width: 601px){
	.nav-cv{
		display: none;
	}
	.photo_cv{
		display: none;
	}
	.menuScrole-cv{
		display: block;
		margin: 0;
	}
	.img_curcus{
		display: none;
	}
	.colone{
		display: none;
	}
	.mon_cv{
	}
	.contenu_cv{
		height: 70vh;
	}
	.ligne1{
		width: 100%;
		height: 50vh;
		margin: 0 0%;
	}
	.demoT2{
		display: block;
		font-size: 1.0rem;
	}
	.demoT{
		display: none;
	}
	.coloneT{
		width: 100% !important;
	}
	.profil_cv{
		width: 100%;
		margin: 0%;
		position: relative;
		top: 0%;
		left: 0%;
		right: 0%;
		transform: translateX(0%);
	}
	.nom_cv{
		font-size: 1.8rem;
	}
	.contacte_cv{
		font-size: 1.3rem;
	}
}
@media only screen and (max-width: 960px) and (min-width: 711px){
	.mon_cv{
	}
	.colone{
		display: none;
	}
	.demoT2{
		display: block;
		font-size: 1.0rem;
	}
	.demoT{
		display: none;
	}
	.contenu_cv{
		height: 60vh;
	}
	.ligne1{
		width: 100%;
		height: 60vh;
	}
	.informatio_titre{
		font-size: 1.5rem;
	}

	.nom_cv{
		font-size: 2.3rem;
	}
	.contacte_cv{
		font-size: 1.3rem;
	}
	.naissaance_nomCV{
		font-size: 1.8rem;
		padding: 0% 5%;
	}
	.telecharge{
		padding: 2% 2% !important;
		margin-left: 12%;
	}
	
}
@media only screen and (max-width: 1264px) and (min-width: 961px){
	.mon_cv{
	}
}
</style>