// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
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
Vue.use(require('vue-moment'))
Vue.use(VueMq, {
    breakpoints: {
        phone: 600,
        tablet: 900,
        laptop: 1440,
        desktop: Infinity
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
