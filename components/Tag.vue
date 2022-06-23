<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <NuxtLink :to="`/articles/${title}`">
    {{ title }}
  </NuxtLink>
</template>
