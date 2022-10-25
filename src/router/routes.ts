import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { setProgressBar } from './guards'
import { Pages } from '~/enums'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Pages.Home,
    component: () => import('~/pages/Home.vue'),
    children: [],
  },
  {
    path: '/auth',
    name: Pages.Auth,
    component: () => import('~/pages/Auth.vue'),
    meta: {
      isAuthPage: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: Pages.Error404,
    component: () => import('~/pages/404.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

setProgressBar(router)
