import Vue from 'vue'
import Router from 'vue-router'
import With from '@/components/with'
import Work from '@/components/work'
import Show from '@/components/show'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/with',
    },
    {
      path: '/with',
      name: 'with',
      component: With
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    }
  ]
})
