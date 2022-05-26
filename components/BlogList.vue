<script setup lang="ts">

</script>

<template>
  <div>
    <ContentList path="/blog">
      <template #default="{ list }">
        {{ list }}
        <div v-for="article in list" :key="article._path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </div>
      </template>
      <template #not-found>
        <p>No articles found</p>
      </template>
    </ContentList>
  </div>
</template>
