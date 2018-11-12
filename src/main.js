// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'
import Footer from './components/Footer'
import VueAgile from 'vue-agile'
import VueMq from 'vue-mq'

Vue.config.productionTip = false
Vue.use(VueFullpage)
Vue.use(Footer)
Vue.use(VueAgile)
Vue.use(VueMq, {
  breakpoints: {
    desktop: Infinity,
    laptopL: 1440,
    laptopS: 1024,
    tablet: 768,
    phone: 425
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
