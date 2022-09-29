<script setup lang="ts">
const search = useSearch()
const query = ref()

watchEffect(async () => {
  query.value = await queryContent('blog').where({ $or: [{ title: { $icontains: search.input } }, { description: { $contains: search.input } }] }).find()
})
</script>

<template>
  <div>
    <h2 font-black text-lg>
      Aktuelle Beiträge
    </h2>
    <div v-for="article in query" :key="article._path">
      <NuxtLink :to="article._path">
        <h2 text-xl font-bold>
          {{ article.title }}
        </h2>
      </NuxtLink>
      <p>{{ article.description }}</p>
    </div>
  </div>
</template>
