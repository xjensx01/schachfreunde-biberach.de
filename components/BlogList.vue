<script setup lang="ts">

</script>

<template>
  <div>
    <ContentList path="/blog">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path">
          ---
          <NuxtLink :to="article._path">
            <h2 text-xl font-bold>
              {{ article.title }}
            </h2>
          </NuxtLink>
          <p>{{ article.description }}</p>
        </div>
      </template>
      <template #not-found>
        <p>No articles found</p>
      </template>
    </ContentList>
  </div>
</template>
