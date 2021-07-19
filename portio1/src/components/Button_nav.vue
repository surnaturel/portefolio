<template>
  <v-card class="button_nav mx-auto" max-width="70" tile>
    <v-list button_nav dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon class="nav_icon">
            <v-icon class="nav_icon2" v-text="item.icon"></v-icon>
			<v-spacer></v-spacer>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      selectedItem: 1,
      items: [
        {icon: 'mdi-facebook' },
        {icon: 'mdi-twitter' },
        {icon: 'mdi-linkedin' },
		{icon: 'mdi-instagram' },
      ],
    }),
  }
</script>

<style scoped>
.button_nav{
	position: absolute;
	top: 50%;
	left: 1%;
	transform: translateY(-50%);
}
.nav_icon{

}
.nav_icon2{
	font-size: 2.3rem;
}
</style>