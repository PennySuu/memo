import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Add from '@/views/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addition',
      name: 'Add',
      component: Add
    }
  ]
})
