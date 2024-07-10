<!--
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-07 18:05:17
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-08 11:07:49
 * @FilePath: \wen_tools\src\components\titlebar\WindowIcon.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <n-icon
    size="30"
    @click="titlebar_minimize"
    class="titlebar-button"
    style="right: 60px"
  >
    <svg class="wen-icon" aria-hidden="true">
      <use xlink:href="#icon-suoxiao"></use>
    </svg>
  </n-icon>
  <n-icon
    size="30"
    @click="titlebar_maximize"
    class="titlebar-button"
    style="right: 30px"
  >
    <svg class="wen-icon" aria-hidden="true">
      <use xlink:href="#icon-fangda"></use>
    </svg>
  </n-icon>
  <n-icon size="30" @click="titlebar_close" class="titlebar-button">
    <svg class="wen-icon" aria-hidden="true">
      <use xlink:href="#icon-guanbi2"></use>
    </svg>
  </n-icon>
</template>

<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'

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

var titlebar_close_zhi = 0
async function titlebar_close() {
  console.log('结束进程')
  console.log(titlebar_close_zhi)
  if (titlebar_close_zhi >= 10) {
    await appWindow.close()
  } else {
    alert('即将关闭窗口')
    console.log(titlebar_close_zhi)
    titlebar_close_zhi = titlebar_close_zhi + 1
  }
}
</script>

<style>
:root {
  --wen-titlebar-height: 30px;
  --wen-titlebar-width: 30px;
}

.titlebar-button {
  height: var(--wen-titlebar-height);
  width: var(--wen-titlebar-width);
  position: fixed;
  right: 0px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: var(--wen-titlebar-height);
  height: var(--wen-titlebar-height);
}
</style>
