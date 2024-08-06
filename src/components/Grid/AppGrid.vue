<template>
  <div class="grid">
    <AppGridItem v-for="item in items" :key="item.imdbID" :item="item" />
  </div>
</template>
<script setup lang="ts">
import type { IGridProps } from '@/types/components/grid'
import AppGridItem from './AppGridItem.vue'

defineProps<IGridProps>()
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
