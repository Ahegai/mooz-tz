<template>
  <AppHeader></AppHeader>
  <AppLoader v-if="store.isLoading"></AppLoader>
  <section class="container" v-else-if="store.totalResults !== 0">
    <h2>{{ `You searched for: ${store.searchValue}, ${store.totalResults} results found` }}</h2>
    <AppGrid :items="store.items"></AppGrid>
    <AppPagination
      :totalItems="store.totalResults"
      :itemsPerPage="10"
      :max-visible-pages="3"
    ></AppPagination>
  </section>
  <AppPlaceholder
    v-if="store.searchValue.length === 0"
    :path="mdiMovieSearch"
    text="Enter the name of the movie to search for it"
  ></AppPlaceholder>
  <AppPlaceholder
    v-else-if="!store.isLoading && store.totalResults == 0"
    :path="mdiEmoticonSad"
    :text="`A search for ${store.searchValue} did not return any results`"
  ></AppPlaceholder>
</template>
<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppGrid from './components/Grid/AppGrid.vue'
import AppLoader from './components/AppLoader.vue'
import AppPlaceholder from './components/AppPlaceholder.vue'
import AppPagination from './components/AppPagination.vue'
import { mdiMovieSearch } from '@mdi/js'
import { mdiEmoticonSad } from '@mdi/js'
import { useSearchStore } from '@/stores/search'

const store = useSearchStore()
</script>
<style lang="scss" scoped>
@keyframes l1 {
  0% {
    background-size:
      20% 100%,
      20% 100%,
      20% 100%;
  }
  33% {
    background-size:
      20% 10%,
      20% 100%,
      20% 100%;
  }
  50% {
    background-size:
      20% 100%,
      20% 10%,
      20% 100%;
  }
  66% {
    background-size:
      20% 100%,
      20% 100%,
      20% 10%;
  }
  100% {
    background-size:
      20% 100%,
      20% 100%,
      20% 100%;
  }
}
</style>
