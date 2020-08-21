import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import './components/index'
import './styles/index.scss'
import './plugins'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
})
app.$mount('#app')
