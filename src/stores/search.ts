import { defineStore } from 'pinia'
import type { ISearchItem } from '@/types/api/search'
import SearchApi from '@/api/search'

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      items: [] as Array<ISearchItem>,
      totalResults: 0 as number,
      searchValue: '' as string,
      currentPage: 1 as number,
      isLoading: false as boolean
    }
  },
  actions: {
    async search(value: string, page: number) {
      this.isLoading = true
      this.searchValue = value
      this.currentPage = page
      const result = await SearchApi.search(value, page)
      if (result.data.Response === 'True') {
        this.items = result.data.Search
        this.totalResults = result.data.totalResults
      } else {
        this.items = []
        this.totalResults = 0
      }
      this.isLoading = false
    },
    async changePage(page: number) {
      this.currentPage = page
      await this.search(this.searchValue, this.currentPage)
    }
  }
})
