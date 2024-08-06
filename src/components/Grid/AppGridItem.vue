<template>
  <div class="item">
    <div class="item-image">
      <img
        :src="item.Poster"
        :alt="`Poster_${item.imdbID}`"
        @error="isImageBroken($event as EventImage<HTMLImageElement>)"
      />
    </div>
    <div class="item-body">
      <p>{{ `Title: ${item.Title}` }}</p>
      <p>{{ `Year: ${item.Year}` }}</p>
      <p>{{ `IMDB ID: ${item.imdbID}` }}</p>
      <p>{{ `Type: ${item.Type}` }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ISearchItem } from '@/types/api/search'

interface EventImage<T extends EventTarget> extends Event {
  target: T
}

defineProps<{
  item: ISearchItem
}>()

const isImageBroken = (event: EventImage<HTMLImageElement>) => {
  event.target.src = 'placeholder.jpg'
}
</script>
<style lang="scss" scoped>
.item {
  box-shadow:
    0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 8px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
  background-color: #212121;
  border-radius: 6px;
  &-body {
    padding: 8px 20px;
  }
  &-image {
    height: 330px;
    width: 100%;
    & img {
      border-radius: 6px 6px 0 0;
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 960px) {
    &-image {
      height: 550px;
    }
  }
  @media screen and (max-width: 600px) {
    &-image {
      height: 350px;
    }
  }
}
</style>
