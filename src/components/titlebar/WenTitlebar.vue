<template>
  <n-layout-header data-tauri-drag-region bordered class="wen-titlebar">
    <n-avatar round :size="24" src="/icons/icon.png" bordered="true" />
    <window-icon></window-icon>
  </n-layout-header>
</template>

<script setup lang="ts"></script>

<style>
.wen-titlebar {
  height: var(--wen-titlebar-height);
  user-select: none;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
