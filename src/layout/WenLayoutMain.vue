<!--
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-12 14:21:08
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-17 13:46:11
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
  </a-layout-sider>
  <a-layout class="wen-layout-main">
    <a-layout-header data-tauri-drag-region class="wen-layout-main-header">
      <a-row class="wen-layout-titlebar-grid">
        <a-col flex="120px">
          <a-row class="wen-layout-titlebar-grid-1">
            <a-col :span="8">
              <a-button
                type="text"
                style="height: 30px; width: 30px"
                shape="round"
                @click="onCollapse"
              >
                <template #icon v-if="collapsed">
                  <svg aria-hidden="true" style="height: 25px; width: 25px">
                    <use xlink:href="#icon-xiangzuo"></use>
                  </svg>
                </template>
                <template #icon v-else>
                  <svg aria-hidden="true" style="height: 25px; width: 25px">
                    <use xlink:href="#icon-xiangyou"></use>
                  </svg>
                </template>
              </a-button>
            </a-col>
            <a-col :span="8">
              <a-button type="text" style="height: 30px; width: 30px">
                <template #icon>
                  <svg aria-hidden="true" style="height: 25px; width: 25px">
                    <use xlink:href="#icon-shijian"></use>
                  </svg>
                </template>
              </a-button>
            </a-col>
            <a-col :span="8">
              <a-button type="text" style="height: 30px; width: 30px"
                ><template #icon>
                  <svg aria-hidden="true" style="height: 30px; width: 30px">
                    <use xlink:href="#icon-close1"></use></svg
                ></template>
              </a-button>
            </a-col>
          </a-row>
        </a-col>
        <a-col flex="auto">
          <div></div>
        </a-col>
        <a-col flex="120px">
          <a-row class="wen-layout-titlebar-grid-1">
            <a-col :span="8">
              <a-button
                type="text"
                style="height: 30px; width: 30px"
                @click="titlebar_maximize"
              >
                <template #icon>
                  <svg aria-hidden="true" style="height: 20px; width: 20px">
                    <use xlink:href="#icon-zhifeiji1"></use>
                  </svg>
                </template>
              </a-button>
            </a-col>
            <a-col :span="8">
              <a-button
                type="text"
                style="height: 30px; width: 30px"
                @click="titlebar_minimize"
              >
                <template #icon>
                  <svg aria-hidden="true" style="height: 25px; width: 25px">
                    <use xlink:href="#icon-suoxiao"></use>
                  </svg>
                </template>
              </a-button>
            </a-col>
            <a-col :span="8">
              <a-button
                type="text"
                style="height: 30px; width: 30px"
                @click="titlebar_close"
                ><template #icon>
                  <svg aria-hidden="true" style="height: 25px; width: 25px">
                    <use xlink:href="#icon-close1"></use></svg
                ></template>
              </a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <a-button type="primary" @click="wen_theme">Primary</a-button>
    </a-layout-header>
    <a-layout-content class="wen-layout-main-main"> </a-layout-content>
  </a-layout>
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
  if (titlebar_close_zhi >= 4) {
    await appWindow.close()
  } else {
    alert('即将关闭窗口')
    console.log(titlebar_close_zhi)
    titlebar_close_zhi = titlebar_close_zhi + 1
  }
}

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

<style></style>

function onClickMenuItem() { throw new Error('Function not implemented.'); }
function onClickMenuItem() { throw new Error('Function not implemented.'); }
