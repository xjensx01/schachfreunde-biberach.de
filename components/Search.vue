<script setup lang="ts">
const search = useSearch()
</script>

<template>
  <label bg-highlight rounded-2xl text-primary px-4 py-3 flex items-center gap-2>
    <div i-fa6-solid-magnifying-glass text-lg />
    <input v-model="search.input" type="text" placeholder="Suche" spellcheck="false" w-full bg-transparent outline-none>
  </label>
</template>
