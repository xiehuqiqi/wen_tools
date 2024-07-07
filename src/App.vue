<!--
 * @Author:
  components: { WenMain }, suwenmao shenming26@outlook.com
 * @Date: 2024-07-02 09:48:14
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-04 17:14:22
 * @FilePath: \wen_tools\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->

<script setup lang="ts"></script>

<script lang="ts">
import type { GlobalTheme } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import { darkTheme } from 'naive-ui'

export default defineComponent({
  setup() {
    return {
      darkTheme,
      theme: ref<GlobalTheme | null>(null)
    }
  }
})
</script>

<template>
  <n-config-provider :theme="theme">
    <wen-main></wen-main>
    <n-card class="xxxx">
      <n-space>
        <n-button @click="theme = darkTheme"> 深色 </n-button>
        <n-button @click="theme = null"> 浅色 </n-button>
      </n-space>
    </n-card>
  </n-config-provider>
</template>

<style>
.xxxx {
  position: fixed;
  bottom: 0px;
}
</style>
