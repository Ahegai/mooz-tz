<template>
  <section class="container placeholder">
    <svg-icon type="mdi" :path="path" key="white" size="300"></svg-icon>
    <h1>{{ text }}</h1>
    <slot></slot>
  </section>
</template>
<script setup lang="ts">
import type { IPlaceholderProps } from '@/types/components/placeholder'
import SvgIcon from '@jamescoyle/vue-icon'

defineProps<IPlaceholderProps>()
</script>
<style lang="scss" scoped>
.placeholder {
  display: flex;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
  & h1 {
    max-width: 500px;
    text-align: center;
  }
}
</style>
