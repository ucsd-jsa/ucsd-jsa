import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Board from '@/components/Board'
import Contact from '@/components/Contact'
import About from '@/components/About'

Vue.use(Router)
/* eslint-disable */
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/board',
            name: 'Board',
            component: Board
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})
