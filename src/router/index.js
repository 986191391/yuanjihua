import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeIndex from '../views/homeIndex/homeIndex.vue'
import About from '../views/about/about.vue'
import Plan from '../views/plan/plan.vue'
import Legends from '../views/legends/legends.vue'
import login from '../views/login/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeIndex',
    component: HomeIndex
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/plan',
    name: 'plan',
    component: Plan
  },
  {
    path: '/legends',
    name: 'legends',
    component: Legends
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
