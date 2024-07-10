/*
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-02 09:48:13
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-04 12:55:37
 * @FilePath: \wen_tools\src\main.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import {
  setupCustomComponents,
  setupGlobalMethods,
  setupDirectives,
  setupAssets
} from '@/plugins'
import App from './App.vue'

async function bootStrap() {
  // 设置样式加载
  setupAssets()
  // 创建vue
  const app = createApp(App)
  // 全局加载
  // 注册全局常用的 组件
  setupCustomComponents(app)

  // 注册全局方法
  setupGlobalMethods(app)

  // 注册全局自定义指令
  setupDirectives(app)

  // 挂载状态管理

  // 挂载路由
  await setupRouter(app)

  app.mount('#app')
}
bootStrap()
