import { createRouter, createWebHistory } from 'vue-router'
import GaishuView from '@/views/GaishuView.vue'
import { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gaishu',
      component: GaishuView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/cajianzhu',
      name: 'cajianzhu',
      component: () => import('@/views/CajianzhuView.vue')
    },
    {
      path: '/filemanager',
      name: 'filemanager',
      component: () => import('@/views/FileManagerView.vue')
    },
    {
      path: '/workplace',
      name: 'workplace',
      component: () => import('@/views/WorkplaceView.vue')
    }
  ]
})

export async function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  // 路由准备就绪后挂载APP实例
  await router.isReady()
}

export default router
