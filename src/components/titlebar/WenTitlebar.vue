<template>
  <n-layout-header 
        data-tauri-drag-region 
        bordered
        class="wen-titlebar"
      >
        <n-icon 
          @click="titlebar_minimize"
          class="titlebar-button"
          style="right: 60px;"
        >
          <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
          />
        </n-icon>
        <n-icon 
          size="30"
          @click="titlebar_maximize"
          class="titlebar-button"
          style="right: 30px;"
        >
          <img
            src="https://api.iconify.design/mdi:window-maximize.svg"
            alt="maximize"
          />
        </n-icon>
        <n-icon 
          size="30"
          @click="titlebar_close"
          class="titlebar-button"
          >
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </n-icon>
      </n-layout-header>
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

async function titlebar_close() {
  console.log('结束进程')
  var titlebar_close_zhi = 0
  if (titlebar_close_zhi == 10) {
    await appWindow.close()
  } else {
    alert('即将关闭窗口')
    console.log(titlebar_close_zhi)
    titlebar_close_zhi == titlebar_close_zhi + 1
  }
}
</script>

<style>
:root {
  --wen-titlebar-height: 40px;
  --wen-titlebar-width: 30px;
}

.wen-titlebar {
  height: var(--wen-titlebar-height);
  user-select: none;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
.titlebar-button:hover {
  background: #5bbec3;
}
</style>