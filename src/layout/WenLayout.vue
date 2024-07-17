<!--
 * @Author:
  components: { WenLayoutSider }, suwenmao shenming26@outlook.com
 * @Date: 2024-07-12 14:06:19
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-17 12:51:29
 * @FilePath: \wen_tools\src\layout\WenLayout.vue
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <a-layout class="wen-layout" has-sider>
    <wen-layout-main></wen-layout-main>
  </a-layout>
</template>

<script setup lang="ts">
import WenLayoutMain from './WenLayoutMain.vue'
</script>

<style>
.wen-layout {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.wen-layout-sider {
  background-color: var(--color-border-2);
}

.wen-layout .wen-layout-main {
  background-color: var(--color-bg-1);
}

.wen-layout .wen-layout-main .wen-layout-main-header {
  background-color: var(--color-bg-1);
  height: 30px;
}

.wen-layout .wen-layout-main .wen-layout-main-main {
  background-color: var(--color-bg-1);
}

.wen-layout-titlebar-grid .arco-col {
  height: 30px;
  line-height: 30px;
  color: var(--color-white);
  text-align: center;
}

.wen-layout-titlebar-grid .arco-col:nth-child(n) {
  background-color: var(--color-fill-3);
}

.wen-layout-titlebar-grid .arco-col .wen-layout-titlebar-grid-1 .arco-col {
  text-align: center;
}
</style>
