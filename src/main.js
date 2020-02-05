import Vue from 'vue'
import App from './App'
import router from './router'
import {Lazyload} from 'vant';

Vue.config.productionTip = false
Vue.use(Lazyload, {
  lazyComponent: true
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
