import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/UserInfoView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/UserSettingView.vue')
    },
    {
      path: '/UserSetting',
      name: 'usersetting',
      component: () => import('../views/UserSettingView.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/ReportedInfoView.vue')
    }
  ]
})

export default router
