<template>
  <flipper class="Card" width="350px" height="450px" :flipped="isFlipped" @click="isFlipped = !isFlipped">
    <div class="Card__face" slot="front">
      <v-img class='Card__ma_photo demo' src="@/assets/tof1.jpg"></v-img>
    </div>

   <figure class="Card__pattern" slot="back">
		<v-img class='Card__ma_photo demo' src="@/assets/edou2.jpeg"></v-img>
	</figure> 
  </flipper>
</template>

<script>
import Flipper from "vue-flipper";

export default {
  components: { Flipper },
  data: () => ({ isFlipped: false })
};
</script>

<style src="vue-flipper/dist/vue-flipper.css" />

<style lang="scss">
.Card {
  &__face,
  &__pattern {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0 3px 4px rgba(#000, 0.45) !important;
    cursor: pointer;
  }
	&__ma_photo{
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}
}
</style>
