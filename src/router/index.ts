import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/',
      component: () => import('../views/IndexView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/UserInfoView.vue')
        },
        {
          path: 'userinfo',
          component: () => import('../views/UserInfoView.vue')
        },
        {
          path: 'reports',
          name: 'reports',
          component: () => import('../views/ReportsView.vue')
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('../views/SettingView.vue')
        },
        {
          path: 'modify',
          name: 'modify',
          component: () => import('../views/ModifyView.vue')
        },

      ]


    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    }
  ]
})

export default router
