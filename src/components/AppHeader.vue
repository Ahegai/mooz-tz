<template>
  <header class="header">
    <div class="header-body">
      <h2 class="header-title">Movie Catalog</h2>
      <div class="header-search">
        <svg-icon
          @click="isMobileSearch = !isMobileSearch"
          class="header-search__button"
          type="mdi"
          :path="mdiMagnify"
          color="white"
        ></svg-icon>
        <AppSearch
          class="header-search__input"
          v-model="search"
          id="search"
          placeholder="Search movie"
          @search="searchMovie"
        ></AppSearch>
      </div>
      <div class="header-avatar">
        <svg-icon type="mdi" :path="mdiAccount" color="white"></svg-icon>
        <h3>Argen Khegay</h3>
      </div>
    </div>
    <transition>
      <AppSearch
        v-if="isMobileSearch"
        v-model="search"
        id="search"
        placeholder="Search movie"
        @search="searchMovie"
      ></AppSearch>
    </transition>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AppSearch from './AppSearch.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiMagnify } from '@mdi/js'
import { useSearchStore } from '@/stores/search'

const search = ref<string>('')
const isMobileSearch = ref<boolean>(false)

const store = useSearchStore()

const searchMovie = () => {
  store.search(search.value, 1)
}
</script>
<style lang="scss" scoped>
.header {
  margin-bottom: 20px;
  background-color: #212121;
  padding: 12px 40px;
  box-sizing: border-box;
  box-shadow:
    0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 5px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
  &-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    gap: 20px;
    margin: 0 auto;
  }
  &-avatar {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &-search {
    width: 60%;
    &__button {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    &-body {
      gap: 0;
      justify-content: normal;
    }
    &-search {
      width: max-content;
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      margin-right: 20px;
      &__button {
        display: block;
      }
      &__input {
        display: none;
      }
    }
    &-avatar {
      & h3 {
        display: none;
      }
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
