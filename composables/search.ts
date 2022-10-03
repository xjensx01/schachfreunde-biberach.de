import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSearch = defineStore('search', () => {
  const input = ref('')
  const query = ref()

  return {
    input,
    query,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearch, import.meta.hot))

