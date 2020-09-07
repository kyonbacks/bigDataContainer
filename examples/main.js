import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 导入组件库
import pack from '../packages';
// 注册组件库
Vue.use(pack);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
