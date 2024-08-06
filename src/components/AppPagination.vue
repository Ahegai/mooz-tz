<template>
  <div class="pagination">
    <button
      :disabled="store.currentPage === 1"
      @click="changePage(store.currentPage - 1)"
      class="pagination-button"
    >
      <svg-icon type="mdi" :path="mdiChevronLeft" color="black"></svg-icon>
    </button>

    <button v-if="showFirst" @click="changePage(1)" class="pagination-button">1</button>
    <span v-if="showFirst">...</span>

    <button
      v-for="page in visiblePages"
      :key="page"
      @click="changePage(page)"
      :class="['pagination-button', { active: page === store.currentPage }]"
    >
      {{ page }}
    </button>

    <span v-if="showLast">...</span>
    <button v-if="showLast" @click="changePage(totalPages)" class="pagination-button">
      {{ totalPages }}
    </button>

    <button
      :disabled="store.currentPage === totalPages"
      @click="changePage(store.currentPage + 1)"
      class="pagination-button"
    >
      <svg-icon type="mdi" :path="mdiChevronRight" color="black"></svg-icon>
    </button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronLeft } from '@mdi/js'
import { mdiChevronRight } from '@mdi/js'
import type { IPaginationProps } from '@/types/components/pagination'
import {useSearchStore} from "@/stores/search";

const props = defineProps<IPaginationProps>()
const store = useSearchStore()
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

const changePage = async (page: number) => {
  if (page > 0 && page <= totalPages.value) {
    await store.changePage(page)
  }
}

const visiblePages = computed(() => {
  const pages = []
  const half = Math.floor(props.maxVisiblePages / 2)
  let start = Math.max(store.currentPage - half, 1)
  let end = Math.min(start + props.maxVisiblePages - 1, totalPages.value)

  if (end - start < props.maxVisiblePages - 1) {
    start = Math.max(end - props.maxVisiblePages + 1, 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

const showFirst = computed(() => visiblePages.value[0] > 1)
const showLast = computed(
  () => visiblePages.value[visiblePages.value.length - 1] < totalPages.value
)
</script>
<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 20px;
  &-button {
    border: none;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #f0f0f0;
    border-radius: 4px;
    transition: all 0.3s ease;
    &.active {
      background-color: #4527a0;
      color: #fff;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #212121;
    }
  }
}
</style>
