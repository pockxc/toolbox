<template>
  <div class="todo-app">
    <div class="todo-app-wrapper">
      <todo-container></todo-container>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import todoContainer from './components/container.vue'

export default defineComponent({
  name: 'todoIndex',
  components: { todoContainer },
  setup() {}
})
</script>
<style lang="less" scoped>
.todo-app {
  box-sizing: border-box;
  padding: 20px 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  &-wrapper {
    width: 400px;
    background: #fff;
    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
    border-radius: 16px;
  }
}
</style>
