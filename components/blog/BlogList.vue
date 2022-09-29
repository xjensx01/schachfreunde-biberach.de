<script setup lang="ts">
const search = useSearch()
const query = ref(await queryContent('blog').where({ $or: [{ title: { $icontains: search.input } }, { description: { $contains: search.input } }] }).find())

watch(search, async (search) => {
  query.value = await queryContent('blog').where({ $or: [{ title: { $icontains: search.input } }, { description: { $contains: search.input } }] }).find()
})
</script>

<template>
  <div>
    <h2 font-black text-lg>
      Aktuelle Beiträge
    </h2>
    <!-- {{ query }} -->
    <!-- TODO: Fix https://github.com/nuxt/content/issues/1570 -->

    <div v-for="article in query" :key="article._path">
      <NuxtLink :to="article._path">
        <h2 text-xl font-bold>
          {{ article.title }}
        </h2>
      </NuxtLink>
      <p>{{ article.description }}</p>
    </div>

    <!-- <ContentList :query="query" path="/blog">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path">
          ---
          {{ article }}
          <NuxtLink :to="article._path">
            <h2 text-xl font-bold>
              {{ article.title }}
            </h2>
          </NuxtLink>
          <p>{{ article.description }}</p>
        </div>
      </template>
      <template #empty>
        <p>No articles found</p>
      </template>
      <template #not-found>
        <p>No articles found</p>
      </template>
    </ContentList> -->
  </div>
</template>
