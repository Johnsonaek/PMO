import Vue from 'vue'
import Router from 'vue-router'
import views from './views'


Vue.use(Router)

export default new Router({
 // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'home',
      component: views.Home,
    },
    {
      path: '/addpage',
      name: 'add',
      component: views.Add,
    }
  ]
})
