<template>
  <div class="input">
    <input
      v-model="model"
      :placeholder="placeholder"
      class="input-body"
      :id="id"
      type="text"
      @keydown.enter="emit('search')"
    />
    <button class="input-append" @click="emit('search')">
      <svg-icon type="mdi" :path="mdiMagnify" color="white"></svg-icon>
    </button>
  </div>
</template>
<script setup lang="ts">
import type { ISearchProps } from '@/types/components/search'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMagnify } from '@mdi/js'

defineProps<ISearchProps>()
const model = defineModel({
  default: '',
  required: true,
  type: String
})
const emit = defineEmits(['search'])
</script>
<style lang="scss" scoped>
.input {
  width: 100%;
  position: relative;
  &-body {
    outline: none;
    border: 2px solid transparent;
    width: 100%;
    background-color: #181818;
    padding: 20px 40px 20px 12px;
    box-sizing: border-box;
    border-radius: 6px;
    transition: all 0.3s ease;
    color: white;
    &:focus {
      border: 2px solid #4527a0;
    }
  }
  &-append {
    outline: none;
    border: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    background: none;
  }
}
</style>
