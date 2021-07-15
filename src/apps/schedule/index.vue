<template>
  <div class="schedule-wrapper gri">
    <div v-for="day in days" :key="day">{{ day }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useCalendar } from './hooks'

export default defineComponent({
  name: 'scheduleIndex',
  setup() {
    const { days } = useCalendar()
    return { days }
  }
})
</script>
<style lang="less" scoped>
.schedule-wrapper {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
}
</style>
