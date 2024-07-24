<script setup lang="ts">
import { ref } from 'vue'

let count = 1
const data = ref([
  {
    key: '1',
    title: 'Tab 1',
    content: 'Content of Tab Panel 1'
  }
])

const handleAdd = () => {
  const number = count++
  data.value = data.value.concat({
    key: `${number}`,
    title: `New Tab ${number}`,
    content: `Content of New Tab Panel ${number}`
  })
}
const handleDelete = (key: string) => {
  data.value = data.value.filter((item) => item.key !== key)
}
</script>

<template>
  <a-tabs
    type="card-gutter"
    :editable="true"
    @add="handleAdd"
    @delete="handleDelete"
    show-add-button
    auto-switch
  >
    <a-tab-pane
      v-for="(item, index) of data"
      :key="item.key"
      :title="item.title"
      :closable="index !== 2"
    >
      {{ item?.content }}
    </a-tab-pane>
  </a-tabs>
</template>
