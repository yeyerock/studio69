import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroComp from '../components/IntroComp.vue'

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
]

const router = new VueRouter({
  routes
})

export default router
