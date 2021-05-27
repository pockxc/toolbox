<template>
  <div>Home</div>
  <div>count: {{ count }}</div>
  <div>double: {{ double }}</div>
  <a-button @click="increment" type="primary">increment</a-button>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    return {
      count: computed(() => store.state.count),
      double: computed(() => store.getters.double),
      increment: () => store.dispatch('increment')
    }
  }
})
</script>
