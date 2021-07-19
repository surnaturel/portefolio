<template>
	<div class="page_acceuil">
		<v-img class='img_img' src="@/assets/edou4.jpeg" gradient="to bottom left, rgba(0,0,0,0), rgba(0,0,0,1)" >
			<MenuScrole class='menuScrole-home'/>
			<Navbar class='nav-home'/>
			<div class="carte_titre_home pa-2" outlined tile>
					<v-list-item three-line >
						<v-list-item-content class='mr_nom_contact'>
							<div class='titre_mr_home pa-2'>Mr</div>
							<v-list-item-title class="titre_nom_home mb-1">Edou Essoh  Yannick Franck</v-list-item-title>
							<v-list-item-title class="titre_nom_home3 mb-1">Edou Essoh <br/> Yannick Franck</v-list-item-title>
							<v-list-item-subtitle class='action1_home pa-0'><Ecrit class='ecriture'/></v-list-item-subtitle>
							<v-card-actions class='action2_home'>
								<ButtonAni/>
							</v-card-actions>
						</v-list-item-content>
					</v-list-item>
				</div>
			
		</v-img>
		<div class="carte_titre_home2 pa-2" outlined tile>
			<v-list-item three-line >
				<v-list-item-content class='mr_nom_contact2'>
					<div class='titre_mr_home2 pa-2'>Bienvenue Dans mon monde</div>
					<v-list-item-title class="titre_nom_home2 mb-1">Vous trouverez toutes les informations sur moi,</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</div>
		<Footer/>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MenuScrole from '@/components/Menu_scrole'
import Ecrit from '../components/Ecrit'
import ButtonAni from '../components/ButtonAni'
import Footer from '@/components/Footer.vue'
export default {
	components: {Navbar,MenuScrole, Ecrit, ButtonAni,Footer},
}
</script>

<style>
.menuScrole-home{
	display: none;
}
.carte_titre_home2{
	display: none;
}
.titre_nom_home3{
	display: none;
}
.nav-home{
}
.page_acceuil{
	width: 100%;
	height: 100vh;
}
.img_img{
	height: 100%;
}
.carte_titre_home{
	width: 50%;
	position: relative;
	top: 20vh;
	left: 50%;
}
.mr_nom_contact{
	color: white;
}
.titre_mr_home{
	font-size: 3.9rem;
	margin-bottom: 1% !important;
	font-family: 'Source Serif Pro', serif;
	animation: HomeT 2s ease-in-out 1s 1 ;
}
.titre_nom_home{
	font-size: 3.1rem;
	padding-bottom: 2%;
	white-space: normal;

}
.action2_home{
	font-family: "Lato", sans-serif;
	color: white !important;
	filter: url('#goo');
	padding-left: 12%;
}
.action1_home{
}
@keyframes HomeT{
	
}
@media only screen and (max-width: 600px){
	.menuScrole-home{
		display: block;
	}
	.nav-home{
		display: none;
	}
    .titre_nom_home{
		display: none;
	}
	.titre_nom_home3{
		display: block;
	}
	.page_acceuil{
		width: 100%;
		height: 90vh;
	}
	.img_img{
		height: 60vh;
	}
	.ecriture{
		display: none;
	}
	.carte_titre_home{
		width: 65%;
		position: relative;
		top: 10vh;
		left:35%;
		padding-left: 3%;
	}
	.carte_titre_home2{
		display: block;
		background-color: #dbcece;
	}
	.titre_mr_home{
		font-size: 2.9rem;
		margin-bottom: 1% !important;
	}
	.titre_nom_home3{
		font-size: 1.9rem;
		padding-bottom: 2%;
	}
	.titre_mr_home2{
		width: 100%;
		font-size: 2.8rem;
		padding:0% !important;
		font-family: 'Source Serif Pro', serif;
		text-align: center;
	}
	.v-application{
		padding:0% !important;
	}
	.titre_nom_home2{
		font-size: 1.1rem;
		text-align: center;
		white-space: normal;
	}
}
</style>