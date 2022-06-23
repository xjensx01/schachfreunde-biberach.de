<script setup>
useHead({
  title: 'Schachfreunde Biberach',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  margin: 0;
  padding: 0;
}

body {
  @apply font-sans;
}

html.dark {
  @apply bg-dark-body;
  color: white;
}
</style>
