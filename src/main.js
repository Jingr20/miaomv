import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
Vue.prototype.$axios = axios   // 可以通过this直接使用axios
axios.defaults.baseURL = '/api'   // 自动在请求前面加上 /api

Vue.config.productionTip = false

Vue.filter('setWH',(url,arg) => {
  return url.replace(/w\.h/,arg);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
