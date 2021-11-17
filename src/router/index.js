import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import appcontainer from '../views/appcontainer.vue'
import login from '../views/login.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'appcontainer',
    component: appcontainer,
    childree: [ 
      {
      path: '/home',
      name: 'Home',
      component: Home
    },
    ]
    
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]

const router = new VueRouter({
  routes
})

export default router

