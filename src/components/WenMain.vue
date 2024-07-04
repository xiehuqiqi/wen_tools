<!--
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-02 18:32:22
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-04 19:04:39
 * @FilePath: \wen_tools\src\components\WenMain.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'

// onMounted(() => {
//   async function titlebar_minimize() {
//     await document
//       .getElementById("titlebar_minimize")!
//       .addEventListener('click', () => appWindow.minimize())
//   }
//   document.getElementById("titlebar_maximize")!.addEventListener('click', () => appWindow.maximize())
//   document.getElementById("titlebar_close"   )!.addEventListener('click', () => appWindow.close()   )
// });

async function titlebar_minimize() {
  console.log('窗口最小化')
  await appWindow.minimize()
}

var titlebar_maximize_true = 0
async function titlebar_maximize() {
  console.log('窗口最大化')

  if (titlebar_maximize_true == 0) {
    console.log(titlebar_maximize_true)
    await appWindow.maximize()
    titlebar_maximize_true = 1
  } else {
    await appWindow.unmaximize()
    console.log(titlebar_maximize_true)
    titlebar_maximize_true = 0
  }
}

async function titlebar_close() {
  console.log('结束进程')
  let titlebar_close_zhi = 0
  if (titlebar_close_zhi = 10) {
    await appWindow.close()
  } else {
    alert('即将关闭窗口')
    console.log(titlebar_close_zhi)

    titlebar_close_zhi = titlebar_close_zhi + 1
  }
}
</script>

<template>
  <n-layout-header data-tauri-drag-region class="titlebar">
    <div
      class="titlebar-button"
      id="titlebar-minimize"
      @click="titlebar_minimize"
    >
      <img
        src="https://api.iconify.design/mdi:window-minimize.svg"
        alt="minimize"
      />
    </div>
    <div
      class="titlebar-button"
      id="titlebar-maximize"
      @click="titlebar_maximize"
    >
      <img
        src="https://api.iconify.design/mdi:window-maximize.svg"
        alt="maximize"
      />
    </div>
    <div class="titlebar-button" id="titlebar-close" @click="titlebar_close">
      <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
    </div>
  </n-layout-header>
</template>

<style scoped>
.n-layout-header {
  background: rgba(128, 128, 128, 0.2);
}

.titlebar {
  height: 30px;
  background: #329ea3;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
.titlebar-button:hover {
  background: #5bbec3;
}
</style>
