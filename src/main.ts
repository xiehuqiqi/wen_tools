/*
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-02 09:48:13
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-11 12:11:03
 * @FilePath: \wen_tools\src\main.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupAssets } from '@/plugins'
import App from './App.vue'

async function bootStrap() {
  // 设置样式加载
  setupAssets()
  // 创建vue
  const app = createApp(App)

  await setupRouter(app)

  app.mount('#app')
}
bootStrap()
