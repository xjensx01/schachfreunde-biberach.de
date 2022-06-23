<script setup lang="ts">
</script>

<template>
  <label bg-highlight rounded-2xl text-primary px-4 py-3 flex items-center gap-2>
    <div i-fa6-solid-magnifying-glass text-lg />
    <input type="text" placeholder="Suche" w-full bg-transparent outline-none>
  </label>
</template>

<style scoped>
input::before {
  content: "🔍";
  margin-right: 0.5rem;
}
</style>
