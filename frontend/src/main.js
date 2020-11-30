import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'

import VueSocketIO from 'vue-socket.io'

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

Vue.config.productionTip = false

Vue.use(VuePlyr, {
  plyr: {}
})

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8081',
}))

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
