import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import $ from 'jquery'
import VueKinesis from 'vue-kinesis'
import { VueTypedJs } from 'vue-typed-js'
import 'vue-flipper/dist/vue-flipper.css';
import Flipper from 'vue-flipper';

Vue.component('flipper', Flipper);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  $,
  VueTypedJs,
  VueKinesis,
  render: h => h(App)
}).$mount('#app')
