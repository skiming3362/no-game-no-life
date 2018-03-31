import Vue, { AsyncComponent } from 'vue'
import axios from 'axios'

const App: AsyncComponent = (): any => import('./App.vue')
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
