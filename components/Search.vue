<script setup lang="ts">
const search = useSearch()
const input = ref('')

let debounce = null as NodeJS.Timeout | null

function debounceSearch() {
  if (debounce !== null)
    clearTimeout(debounce)

  debounce = setTimeout(() => {
    search.input = input.value
  }, 300)
}

function triggerSearch() {
  if (debounce !== null)
    clearTimeout(debounce)

  search.input = input.value
}
</script>

<template>
  <label bg-highlight rounded-2xl text-primary px-4 py-3 flex items-center gap-2>
    <div i-fa6-solid-magnifying-glass text-lg />
    <input v-model="input" type="text" placeholder="Suche" spellcheck="false" w-full bg-transparent outline-none @input="debounceSearch" @enter="triggerSearch">
  </label>
</template>
