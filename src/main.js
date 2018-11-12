// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'
import Footer from './components/Footer'
Vue.config.productionTip = false

Vue.use(VueCarousel)
Vue.use(VueFullpage)
Vue.use(Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
