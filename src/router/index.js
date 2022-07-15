import Vue from 'vue'
import VueRouter from 'vue-router'
import Shouye from '../views/shouye/shouye.vue'
import About from '../views/about/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shouye',
    component: Shouye
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
