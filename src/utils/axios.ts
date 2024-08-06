import axios from 'axios'
import type { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&',
  headers: {
    'Content-type': 'application/json'
  }
})

export default api
