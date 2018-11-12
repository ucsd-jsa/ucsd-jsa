import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
import TestComponent from './components/TestComponent'
import Header from './components/Header'

Vue.component('helloWorld', HelloWorld)
Vue.component('testComponent', TestComponent)
Vue.component('myHeader', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app'
})
