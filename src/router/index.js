import Vue from 'vue'
import VueRouter from 'vue-router'
import ON from '../views/ON.vue'
import OFF from '../views/OFF.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: OFF
  },{
    path: '/off',
    name: 'OFF',
    component: OFF
  },{
    path: '/on',
    name: 'ON',
    component: ON
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
