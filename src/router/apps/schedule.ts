import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/schedule',
    name: 'scheduleIndex',
    component: () => import('@/apps/schedule/index.vue')
  }
]

export default routes
