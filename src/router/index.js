import Vue from 'vue'
import Router from 'vue-router'
import CrashList from '@/components/CrashList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CrashList',
      component: CrashList
    }
  ]
})
