<!--
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-22 20:37:47
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-23 13:24:51
 * @FilePath: \wen_tools\src\layout\WenLayoutSider.vue
 * @Description:  
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="logo">
    <a-space size="large">
      <a-avatar
        size="32"
        style="width: 32px; height: 32px"
        imageUrl="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      >
      </a-avatar>
    </a-space>
    <div class="logo-title">わたぃ</div>
  </div>
  <a-menu
    :defaultOpenKeys="['1']"
    :defaultSelectedKeys="['0_3']"
    @menuItemClick="onClickMenuItem"
    :style="{ width: '100%' }"
    style="height: calc(100% - 48px)"
  >
    <router-link to="/">
      <a-menu-item key="0">
        <wen-icons-sider-menu-xiangqing />
        简单预览
      </a-menu-item>
    </router-link>
    <router-link to="/home">
      <a-menu-item key="1">
        <wen-icons-sider-menu-home />
        苏文猫 の 家
      </a-menu-item>
    </router-link>
    <a-sub-menu key="2">
      <template #icon><wen-icons-sider-menu-huodong /></template>
      <template #title>工作站</template>
      <router-link to="/workplace">
        <a-menu-item key="2_0"> 简述 </a-menu-item>
      </router-link>
      <a-menu-item key="2_1"> 项目 </a-menu-item>
    </a-sub-menu>
    <router-link to="/cajianzhu">
      <a-menu-item key="3">
        <wen-icons-sider-menu-quanbu />
        插件组
      </a-menu-item>
    </router-link>
    <router-link to="/filemanager">
      <a-menu-item key="5">
        <wen-icons-sider-menu-wenjianjia />
        文件管理器
      </a-menu-item>
    </router-link>
    <router-link to="/about">
      <a-menu-item key="8">
        <wen-icons-sider-menu-guangyu />
        关于
      </a-menu-item>
    </router-link>
    <router-link to="/settings">
      <a-menu-item key="9">
        <wen-icons-sider-menu-settings />
        设置
      </a-menu-item>
    </router-link>
  </a-menu>
</template>

<script setup></script>

<style>
.logo {
  height: 32px;
  margin: 8px;
  position: relative;
  display: block;
  overflow: hidden;
}

.logo .logo-title {
  position: absolute;
  display: inline-block;
  height: 32px;
  margin: 0px 8px 0px 12px;
  top: 0;
  bottom: 0;
  color: var(--color-text-1);
  text-align: center;
  line-height: 32px;
}

.wen-layout-meun-sider {
  position: relative;
}
</style>
