<!--
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-23 14:17:25
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-27 09:23:50
 * @FilePath: \wen_tools\src\views\SettingsView.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts"></script>

<template>
  <main class="wen-view-settings">
    <a-row class="wen-view-settings-layout">
        <a-col :span="4">
          <div>6 - 25%</div>
        </a-col>
        <a-col :span="20">
          <div>6 - 25%</div>
        </a-col>
      </a-row>

  </main>
</template>

<style>
.wen-view-settings {
  min-height: 100%;
  width: 100%;
}
.wen-view-settings-layout-background {
  background-image: linear-gradient(
    90deg,
    var(--color-fill-2) 4.16666667%,
    transparent 4.16666667%,
    transparent 8.33333333%,
    var(--color-fill-2) 8.33333333%,
    var(--color-fill-2) 12.5%,
    transparent 12.5%,
    transparent 16.66666667%,
    var(--color-fill-2) 16.66666667%,
    var(--color-fill-2) 20.83333333%,
    transparent 20.83333333%,
    transparent 25%,
    var(--color-fill-2) 25%,
    var(--color-fill-2) 29.16666667%,
    transparent 29.16666667%,
    transparent 33.33333333%,
    var(--color-fill-2) 33.33333333%,
    var(--color-fill-2) 37.5%,
    transparent 37.5%,
    transparent 41.66666667%,
    var(--color-fill-2) 41.66666667%,
    var(--color-fill-2) 45.83333333%,
    transparent 45.83333333%,
    transparent 50%,
    var(--color-fill-2) 50%,
    var(--color-fill-2) 54.16666667%,
    transparent 54.16666667%,
    transparent 58.33333333%,
    var(--color-fill-2) 58.33333333%,
    var(--color-fill-2) 62.5%,
    transparent 62.5%,
    transparent 66.66666667%,
    var(--color-fill-2) 66.66666667%,
    var(--color-fill-2) 70.83333333%,
    transparent 70.83333333%,
    transparent 75%,
    var(--color-fill-2) 75%,
    var(--color-fill-2) 79.16666667%,
    transparent 79.16666667%,
    transparent 83.33333333%,
    var(--color-fill-2) 83.33333333%,
    var(--color-fill-2) 87.5%,
    transparent 87.5%,
    transparent 91.66666667%,
    var(--color-fill-2) 91.66666667%,
    var(--color-fill-2) 95.83333333%,
    transparent 95.83333333%
  );
}
.wen-view-settings-layout .arco-col {
  min-height: 1000px;
  /* line-height: 48px; */
  color: var(--color-white);
  text-align: center;
}
.wen-view-settings-layout .arco-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.wen-view-settings-layout .arco-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>
