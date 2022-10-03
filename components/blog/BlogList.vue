<script setup lang="ts">
const search = useSearch()
const query = ref(await queryData())

watch(search, async () => query.value = await queryData())

function queryData() {
  return queryContent('blog').where({ $or: [{ title: { $icontains: search.input } }, { description: { $contains: search.input } }] }).only(['_path', 'title', 'description']).find()
}
</script>

<template>
  <div>
    <h2 font-black text-lg>
      Aktuelle Beiträge
    </h2>
    <div v-for="article in query" :key="article._path">
      <NuxtLink :to="article._path">
        <h3 text-xl font-bold>
          {{ article.title }}
        </h3>
      </NuxtLink>
      <p>{{ article.description }}</p>
    </div>
  </div>
</template>

