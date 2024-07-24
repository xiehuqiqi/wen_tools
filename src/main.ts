/*
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-02 09:48:13
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-23 14:43:54
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
  const app = createApp(App)

  await setupAssets()

  await setupRouter(app)

  app.mount('#app')
}
bootStrap()
