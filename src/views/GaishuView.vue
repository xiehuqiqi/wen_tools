<script setup lang="ts">
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp'
]
const handleChange = (value: any) => {
  console.log(value)
}
</script>

<template>
  <main class="wen-view-gaishu">
    <a-space direction="vertical" :size="16" style="display: block">
      <a-row class="wen-view-gaishu-yeshoutu">
        <a-col :span="24">
          <a-carousel
            :style="{
              width: '100%',
              height: '100%'
            }"
            :default-current="2"
            @change="handleChange"
            :auto-play="true"
            show-arrow="hover"
            indicator-type="slider"
            :indicator-position="outer"
          >
            <a-carousel-item v-for="image in images">
              <img
                :src="image"
                :style="{
                  width: '100%'
                }"
              />
            </a-carousel-item>
          </a-carousel>
        </a-col>
      </a-row>
    </a-space>
    <a-row
      class="wen-view-gaishu-xxxxx"
      style="marginbottom: 16px; backgroundcolor: var(--color-fill-2)"
    >
      <a-col :span="8">col - 8</a-col>
      <a-col :span="8" :offset="8"> col - 8 | offset - 8 </a-col>
    </a-row>
    <a-row
      class="wen-view-gaishu-xxxxx"
      style="marginbottom: 16px; backgroundcolor: var(--color-fill-2)"
    >
      <a-col :span="6" :offset="8"> col - 6 | offset - 8 </a-col>
      <a-col :span="6" :offset="4"> col - 6 | offset - 4 </a-col>
    </a-row>
    <a-row
      class="wen-view-gaishu-xxxxx"
      style="backgroundcolor: var(--color-fill-2)"
    >
      <a-col :span="12" :offset="8"> col - 12 | offset - 8 </a-col>
    </a-row>
  </main>
</template>

<style>
.wen-view-gaishu {
  height: 100%;
  width: 100%;
}

.wen-view-gaishu-background {
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
.wen-view-gaishu .wen-view-gaishu-yeshoutu {
  height: 240px;
}
.wen-view-gaishu .wen-view-gaishu-yeshoutu .arco-col {
  height: 100%;
}

.wen-view-gaishu-xxxxx .arco-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.wen-view-gaishu-xxxxx .arco-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.wen-view-gaishu-xxxxx .arco-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}

.wen-view-gaishu .arco-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.wen-view-gaishu .arco-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.wen-view-gaishu .arco-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>
