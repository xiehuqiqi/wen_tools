<!--
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-07 18:05:17
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-17 13:48:03
 * @FilePath: \wen_tools\src\components\titlebar\WindowIcon.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <n-icon size="30" class="titlebar-button" style="right: 60px">
    <svg class="wen-icon" aria-hidden="true">
      <use xlink:href="#icon-suoxiao"></use>
    </svg>
  </n-icon>
  <n-icon size="30" class="titlebar-button" style="right: 30px">
    <svg class="wen-icon" aria-hidden="true">
      <use xlink:href="#icon-fangda"></use>
    </svg>
  </n-icon>
  <n-icon size="30" class="titlebar-button">
    <svg class="wen-icon" aria-hidden="true">
      <use xlink:href="#icon-guanbi2"></use>
    </svg>
  </n-icon>
</template>

<script setup lang="ts"></script>

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
