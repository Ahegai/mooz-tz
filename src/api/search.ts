import api from '@/utils/axios'
import type { ISearchResult } from '@/types/api/search'
import type { AxiosResponse } from 'axios'

class SearchApi {
  search(search: string, page: number): Promise<AxiosResponse<ISearchResult>> {
    return api.get(`&s=${search}&page=${page}`)
  }
}

export default new SearchApi()
