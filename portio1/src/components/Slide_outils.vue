<template>
<v-card class="cadre_icone" color="black" dark flat tile>
    <v-window v-model="onboarding">
		<v-window-item >
			<v-card color="transparent" height="200" >
				<v-row class="fill-height group_icon" align="center" justify="center">
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
				</v-row>
			</v-card>
		</v-window-item>
		<v-window-item >
			<v-card color="transparent" height="200" >
				<v-row class="fill-height group_icon" align="center" justify="center">
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
								<v-img max-height="76" max-width="75" src="@/assets/npm.png"></v-img>
							</v-sheet>
						</template>
						<span>NPM</span>
					</v-tooltip>
				</v-row>
			</v-card>
		</v-window-item>
		<v-window-item >
			<v-card color="transparent" height="200" >
				<v-row class="fill-height group_icon" align="center" justify="center">
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
				</v-row>
			</v-card>
		</v-window-item>
    </v-window>
    <v-card-actions class="justify-space-between action_btn">
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ active, toggle }">
          <v-btn :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    data: () => ({
      length: 3,
      onboarding: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  }
</script>

<style>
.cadre_icone{
	width: 100% !important;
	margin: 0;
}
.group_icon{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 0px;
}
.icon_service{
	margin: 0px 6px;
	border: 2px solid blue;
	display: flex;
	align-items: center;
	justify-content: center;
}
.action_btn{

}
</style>