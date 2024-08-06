interface ISearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface ISearchResult {
  Search: Array<ISearchItem>
  totalResults: number
  Response: string
}

export type { ISearchResult, ISearchItem }
