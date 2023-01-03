import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroComp from '../components/IntroComp.vue'
import LauraView from '../views/LauraView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroComp
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/laura',
    name: 'laura',
    component: LauraView
  },
]

const router = new VueRouter({
  routes
})

export default router
