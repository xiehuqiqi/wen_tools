<template>
  <a-button
    type="text"
    style="height: 48px; width: 48px"
    @click="titlebar_maximize"
  >
    <template #icon>
      <svg aria-hidden="true" style="height: 20px; width: 20px">
        <use xlink:href="#icon-zhifeiji1"></use>
      </svg>
    </template>
  </a-button>
</template>
<script setup>
import { getCurrentWindow } from '@tauri-apps/api/window'
import '@/assets//font_icon/iconfont'

const appWindow = getCurrentWindow();
// var titlebar_maximize_true = 0
async function titlebar_maximize() {
  console.log('窗口最大化')

  await appWindow.toggleMaximize();

  // if (titlebar_maximize_true == 0) {
  //   console.log(titlebar_maximize_true)
  //   await appWindow.maximize()
  //   titlebar_maximize_true = 1
  // } else {
  //   await appWindow.unmaximize()
  //   console.log(titlebar_maximize_true)
  //   titlebar_maximize_true = 0
  // }
}
</script>
