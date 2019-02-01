import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import '@/css/index.scss';
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
