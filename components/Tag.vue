<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <NuxtLink :to="`/blog/${title}`">
    {{ title }}
  </NuxtLink>
</template>
