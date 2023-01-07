import Vue from 'vue'
import App from './App.vue'
import './assets/scss/responsive.scss'
import vuetify from './plugins/vuetify'
import router from './router'
import './assets/js/script'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
