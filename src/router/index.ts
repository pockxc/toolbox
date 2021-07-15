import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { scheduleApp } from './apps'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/schedule'
  },
  ...scheduleApp
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
