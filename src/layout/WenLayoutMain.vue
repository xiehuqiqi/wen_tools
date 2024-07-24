<!--
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-12 14:21:08
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-23 15:27:07
 * @FilePath: \wen_tools\src\layout\WenLayoutMain.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <a-layout-sider
    collapsible
    breakpoint="xl"
    class="wen-layout-sider"
    hide-trigger
    :collapsed="collapsed"
  >
    <wen-layout-sider />
  </a-layout-sider>
  <a-layout class="wen-layout-main">
    <a-layout-header class="wen-layout-main-header">
      <a-row class="wen-layout-titlebar-grid">
        <a-col flex="96px" data-tauri-drag-region>
          <a-row class="wen-layout-titlebar-grid-1">
            <a-col :span="12" data-tauri-drag-region>
              <a-button
                type="text"
                style="height: 48px; width: 48px"
                shape="round"
                @click="onCollapse"
              >
                <template #icon v-if="collapsed">
                  <wen-icons-sider-button-if />
                </template>
                <template #icon v-else>
                  <wen-icons-sider-button-else />
                </template>
              </a-button>
            </a-col>
            <a-col :span="12" data-tauri-drag-region>
              <a-button
                type="text"
                style="height: 48px; width: 48px"
                @click="wen_theme"
              >
                <template #icon>
                  <wen-icons-theme />
                </template>
              </a-button>
            </a-col>
          </a-row>
        </a-col>
        <a-col flex="auto" data-tauri-drag-region>
          <div></div>
        </a-col>
        <a-col flex="144px" data-tauri-drag-region>
          <a-row class="wen-layout-titlebar-grid-1" data-tauri-drag-region>
            <a-col :span="8" data-tauri-drag-region>
              <wen-icons-windows-maximize />
            </a-col>
            <a-col :span="8" data-tauri-drag-region>
              <wen-icons-windows-minimize />
            </a-col>
            <a-col :span="8" data-tauri-drag-region>
              <wen-icons-windows-close />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content class="wen-layout-main-main">
      <div class="wen-layout-main-main-ye">
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
const collapsed = ref(true)
function onCollapse() {
  collapsed.value = !collapsed.value
}

var wen_theme_func = 0
function wen_theme() {
  if (wen_theme_func == 0) {
    document.body.setAttribute('arco-theme', 'dark')
    wen_theme_func = 1
  } else {
    document.body.removeAttribute('arco-theme')
    wen_theme_func = 0
  }
}
</script>

<style>
.wen-layout .wen-layout-main .wen-layout-main-main {
  background-color: var(--color-bg-1);
}

.wen-layout .wen-layout-main .wen-layout-main-main .wen-layout-main-main-ye {
  background-color: rgb(var(--arcoblue-2));
  /* background-color: blue; */
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  margin: 4px;
  border-radius: 5px;
  border-color: rgb(var(--orange-5));
  border-style: solid;
  border-width: 1px;
}
</style>
