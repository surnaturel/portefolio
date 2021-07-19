<template>
<div class=" menu_srcole text-center">
    <v-dialog class="le_dialoge" v-model="dialog" persistent >
		<template class="boutton_blog" v-slot:activator="{ on, attrs }">
			<div class="blog" color="red lighten-2" background-color='black' v-bind="attrs" v-on="on">
				<v-icon class="icone_deroulant">mdi-format-align-justify</v-icon>
			</div>
		</template>
		<v-card class="carte_bloc mx-auto" dark tile>
			<v-list dense>
				<v-list-item-group v-model="selectedItem" color="primary">
					<v-list-item v-for="(item, i) in items" :key="i" @click="dialog = false" router :to='item.lien'>
					<v-list-item-icon>
						<v-icon v-text="item.icon"></v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title v-text="item.text"></v-list-item-title>
					</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-card>
    </v-dialog>
</div>
</template>

<script>

export default {
  components: { },
  data(){
	return{
		selectedItem: 1,
		items: [
			{ text: 'Dashboard', icon: 'mdi-view-dashboard',lien: '/' },
			{ text: 'A propos', icon: 'mdi-help-box', lien: '/appropos'},
			{ text: 'CV', icon: 'mdi-account-box', lien: '/cv' },
			{ text: 'Services', icon: 'mdi-flag',lien: '/services' },
			{ text: 'Work', icon: 'mdi-forum',lien: '/work' },
		],
		dialog : false
	}
  }
};
</script>

<style>
.blog{
}
.v-dialog{
	width: 35%;
}

.carte_bloc{
	width: 35%;
}
.menu_srcole{
	width: 44px;
	cursor: pointer;
	position: absolute;
	top: 1%;
	right: 5%;
}
.icone_deroulant{
	font-size: 42px !important;
}

</style>
