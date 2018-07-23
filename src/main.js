import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/app.scss'

require('mockjs')

Vue.config.productionTip = false
Vue.use(ElementUI)
/*eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*Vue.filter('getYMD', function(input) {
  return input.split(' ')[0];
})*/
