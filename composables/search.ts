import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSearch = defineStore('search', () => {
  const input = ref('')

  return {
    input,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearch, import.meta.hot))

