<template>
  <n-config-provider :theme-overrides="theme">
    <router-view></router-view>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { theme } from './utils/naiveUI'

export default defineComponent({
  name: 'App',
  setup() {
    return {
      theme
    }
  }
})
</script>
