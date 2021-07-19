<template>
<div class=" decouvre text-center">
    <v-dialog v-model="dialog" persistent >
      <template class="boutton_blog" v-slot:activator="{ on, attrs }">
        <v-btn class="blog" color="red lighten-2" dark v-bind="attrs" v-on="on">Mon Blog</v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Privacy Policy </v-card-title>
        <v-card-text>
          Lorem ipsum dolor  sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style scoped>
.decouvre{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 63px;
}
.boutton_blog{
	border: 2px solid blue;
	padding: 14px 14px !important;
}
.blog{
	border: 2px solid blue;
	padding: 24px 24px !important;
}
</style>