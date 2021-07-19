<template>
	<v-item-group class="groupe_containe">
		<Navbar2 class="navbar"/>
		<div class='main'>
			<MenuScrole class='menuScrole'/>
			<v-row no-gutters class="ligne_service" v-if='!apparition'>
				<v-col cols="12" sm="12" md="12" lg='6'>
					<div class="group_text">
						<span class="service_desc_titre">
							<p class="service">MES SERVICES</p>
							<h1 class="desc_titre">Quelles sont mes compétences en programmation incluses ?</h1>
						</span>
						<span class="desc">
							<p class="titre_desc">Je développe une interface utilisateur simple, intuitive et réactive qui aide les 
							utilisateurs à faire les choses avec moins d'effort et de temps avec ces technologies.</p>
						</span>
						<v-btn depressed  disabled color="primary" dis class='btn_service '> services </v-btn>
                        <v-btn depressed color="error"  @click='outils' class='btn_service '> outils</v-btn>
					</div>
				</v-col>
				<v-col cols="12" sm="12" md="12" lg='6'>
					<SlideCompetence class='slide_competence'/>
					<div class="group_icon groupe_service_icon">
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img class='image_icon' max-height="76" max-width="75" src="@/assets/css.png"></v-img>
								</v-sheet>
							</template>
							<span>CSS</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img class='image_icon' max-height="76" max-width="75" src="@/assets/html.png"></v-img>
								</v-sheet>
							</template>
							<span>HTML</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img class='image_icon' max-height="76" max-width="75" src="@/assets/bulma2.jpeg"></v-img>
								</v-sheet>
							</template>
							<span>BULMA</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img class='image_icon' max-height="76" max-width="75" src="@/assets/node.png"></v-img>
								</v-sheet>
							</template>
							<span>NODEJS</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img class='image_icon' max-height="76" max-width="75" src="@/assets/logo.png"></v-img>
								</v-sheet>
							</template>
							<span>VUEJS</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img class='image_icon' max-height="76" max-width="75" src="@/assets/vuetify.png"></v-img>
								</v-sheet>
							</template>
							<span>VUETIFY</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img class='image_icon' max-height="76" max-width="75" src="@/assets/js.png"></v-img>
								</v-sheet>
							</template>
							<span>JS</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img class='image_icon' max-height="76" max-width="75" src="@/assets/firebase.png"></v-img>
								</v-sheet>
							</template>
							<span>FIREBASE</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img class='image_icon' max-height="76" max-width="75" src="@/assets/canva-logo.png"></v-img>
								</v-sheet>
							</template>
							<span>CANVA</span>
						</v-tooltip>
					</div>
				</v-col>
			</v-row>
			<v-row no-gutters class="ligne_service" v-if='apparition'>
				<v-col cols="12" sm="12" md="12" lg='6'>
					<div class="group_text">
						<span class="service_desc_titre">
							<p class="service">LES OUTILS</p>
							<h1 class="desc_titre">Quelles sont mes Outils  qui me permetrons de bien m'organiser ?</h1>
						</span>
						<span class="desc">
							<p class="titre_desc">Je développe une interface utilisateur simple, intuitive et réactive qui aide les 
							utilisateurs à faire les choses avec moins d'effort et de temps avec ces technologies.</p>
						</span>
						<v-btn  color="primary" class='btn_service'  @click='service'> services </v-btn>
                        <v-btn  disabled color="error" class='btn_service' > outils</v-btn>
					</div>
				</v-col>
				<v-col cols="12" sm="12" md="12" lg='6'>
					<SlideOutils class='slide_outils'/>
					<div class="group_icon service_outils_icon">
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img max-height="76" max-width="75" src="@/assets/cmd.png"></v-img>
								</v-sheet>
							</template>
							<span>CMD</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img max-height="76" max-width="75" src="@/assets/git.png"></v-img>
								</v-sheet>
							</template>
							<span>GIT</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img max-height="76" max-width="75" src="@/assets/npm.png"></v-img>
								</v-sheet>
							</template>
							<span>NPM</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img max-height="76" max-width="75" src="@/assets/trello.jpeg"></v-img>
								</v-sheet>
							</template>
							<span>TRELLO</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img max-height="76" max-width="75" src="@/assets/vscode.jpeg"></v-img>
								</v-sheet>
							</template>
							<span>VS-CODE</span>
						</v-tooltip>
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-sheet class="icon_service" v-on="on" v-bind="attrs" color="white" elevation="1" height="100" width="100">
									<v-img max-height="76" max-width="75" src="@/assets/webpack.png"></v-img>
								</v-sheet>
							</template>
							<span>WEBPACK</span>
						</v-tooltip>
					</div>
				</v-col>
			</v-row>
		</div>
		<Footer/>
	</v-item-group>
	
</template>

<script>
import Navbar2 from '@/components/Navbar2.vue'
import Footer from '@/components/Footer.vue'
import MenuScrole from '@/components/Menu_scrole'
import SlideCompetence from '@/components/Slide_competence'
import SlideOutils from '@/components/Slide_outils.vue'
export default {
	components:{
		Navbar2,
		Footer,
		MenuScrole,
		SlideCompetence,
		SlideOutils
	},
	data(){
		return{
			apparition : false,
		}
	},
	methods:{
		outils(){
			console.log('outil')
			this.apparition = true
		},
		service(){
			console.log('service')
			this.apparition = false
		}

	}
}
</script>
<style scoped>
.menuScrole{
	display: none;
}
	.slide_outils{
		display: none;
	}
.slide_competence{
	display: none;
}
.btn_service{
	padding: 24px 32px;
	margin-left: 12px;
}
.groupe_containe{
	background-color: #666161;
	width:100% ;
	height: 100vh;
}
.ligne_service{
	margin-top: 0%;
	background-color: #f4f6f8;
	height: 87vh;
}
.group_text{
	width: 100%;
	padding: 34px;
	margin-top: 18%;
}
.service_desc_titre{
	display: flex; 
}
.service{
	writing-mode: vertical-rl;
	text-orientation: mixed;
	margin-right: 23px;
}
.desc_titre{
	line-height:40px;
	font-size: 2vw;
}
.titre_desc{
	border-left: 2px solid black;
	font-size: 1.5vw;
	padding: 12px;
	margin-left: 15%;
}
.group_icon{
	width: 80%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 34px;
	margin: 18% auto;
}
.icon_service{
	margin-left: 22px;
	margin-top: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
}
@media only screen and (max-width: 600px){
	.navbar{
		display: none;
	}
	.menuScrole{
		display: block;
	}
	.groupe_service_icon{
		display: none;
	}
	.service_outils_icon{
		display: none;
	}
	.groupe_containe{
		background-color: #666161;
		width:90% ;
		height: 100vh;
	}
	.ligne_service{
		margin-top: 0%;
		height: 95vh;
	}
	.group_text{
		width: 100% ;
		margin-top: 12%;
		padding: 22px;
	}
	.service_desc_titre{
	}
	.slide_competence{
		display: block;
	}
	.slide_outils{
		display: block;
		margin-top:0 !important ;
	}
	.service_desc_titre{
		display: flex;
		
	}
	.desc_titre{
		font-size: 1.4rem;
		height: 100px;
		line-height:30px;
	}
	.titre_desc{
		padding: 12px;
		font-size: 1.2rem;
		margin-left: 3%;
		border-left: 2px solid black;
	}
}
@media only screen and (max-width: 710px) and (min-width: 601px){
	.navbar{
		display: none;
	}
	.menuScrole{
		display: block;
	}
	.groupe_service_icon{
		display: none;
	}
	.service_outils_icon{
		display: none;
	}
	.ligne_service{
		margin-top: 0%;
		height: 100vh;
		border: 2px solid green;
	}
	.group_text{
		width: 100% ;
		margin-top: 7%;
		border: 2px solid green;
	}
	.slide_competence{
		display: block;
	}
	.slide_outils{
		display: block;
	}
	.service_desc_titre{
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid green;
	}
	.desc_titre{
		font-size: 2.1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.service_desc_titre{
		display: flex;
		margin-top: 2%;
		border: 2px solid green;
	}
	.titre_desc{
		font-size: 1.4rem;
		margin-left: 8%;
	}
}
@media only screen and (max-width: 960px) and (min-width: 711px){
	.navbar{
		display: none;
	}
	.menuScrole{
		display: block;
	}
	.ligne_service{
		margin-top: 0%;
		height: 100vh;
		border: 2px solid red;
	}
	.group_text{
		width: 100% ;
		margin-top: 5%;
		border: 2px solid red;
	}
	.service_desc_titre{
		width: 90% ;
		display: flex;
		margin-left: 7%;
		margin-top: 2%;
		border: 2px solid red;
	}
	.desc_titre{
		font-size: 2.2rem;
		height: 100px;
		
	}
	.titre_desc{
		font-size: 1.2rem;
		margin-left:13%;
	}
	.group_icon{
		width: 100%;
		padding: 14px;
	}
	.icon_service{
		margin-left: 15px;
		margin-top: 12px;
	}
}
@media only screen and (max-width: 1264px) and (min-width: 961px){
	.main{
		width: 100%;
	}
	.groupe_containe{
	}
	.navbar{
		display: none;
	}
	.menuScrole{
		display: block;
	}
	.slide_outils{
		display: none;
	}
	.ligne_service{
		margin-top: 0%;
		height: 100vh;
		width: 100%;
		border: 2px solid blue;
	}
	.group_text{
		width: 90% ;
		margin-top: 3%;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		border: 2px solid blue;
	}
	.service_desc_titre{
		width: 90% ;
		display: flex;
		margin-left: 7%;
		border: 2px solid blue;
	}
	.desc_titre{
		font-size: 2.6rem;
		height: 100px;
		
	}
	.titre_desc{
		font-size: 1.9rem;
		margin-left:13%;
	}
	.group_icon{
		width: 90%;
		padding: 12px;
		border: 2px solid blue;
		position: relative;
		left: 50%;
		transform: translateX(-55%);
	}
	.icon_service{
		margin-left: 12px;
		margin-top: 1px;
	}
}
</style>