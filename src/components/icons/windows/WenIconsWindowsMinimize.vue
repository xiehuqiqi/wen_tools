<template>
  <a-button
    type="text"
    style="height: 48px; width: 48px"
    @click="titlebar_minimize"
  >
    <template #icon>
      <svg aria-hidden="true" style="height: 25px; width: 25px">
        <use xlink:href="#icon-suoxiao"></use>
      </svg>
    </template>
  </a-button>
</template>

<script setup>
import { appWindow } from '@tauri-apps/api/window'
import '@/assets//font_icon/iconfont'

async function titlebar_minimize() {
  console.log('窗口最小化')
  await appWindow.minimize()
}
</script>
