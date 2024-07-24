<template>
  <a-button
    type="text"
    style="height: 48px; width: 48px"
    @click="titlebar_close"
    ><template #icon>
      <svg aria-hidden="true" style="height: 25px; width: 25px">
        <use xlink:href="#icon-close1"></use></svg
    ></template>
  </a-button>
</template>

<script setup>
import { getCurrentWindow } from '@tauri-apps/api/window'
import '@/assets/font_icon/iconfont'

const appWindow = getCurrentWindow();

var titlebar_close_zhi = 0
async function titlebar_close() {
  console.log('结束进程')
  console.log(titlebar_close_zhi)
  if (titlebar_close_zhi >= 4) {
    await appWindow.close()
  } else {
    alert('即将关闭窗口')
    console.log(titlebar_close_zhi)
    titlebar_close_zhi = titlebar_close_zhi + 1
  }
}
</script>
