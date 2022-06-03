<script setup lang="ts">
const items = [
  { url: '/', label: 'Eingang', icon: 'i-fa6-solid-envelope' },
  { url: '/inboxes', label: 'Postfächer', icon: 'i-fa6-solid-inbox' },
  { url: '/settings', label: 'Einstellungen', icon: 'i-fa6-solid-gear' },
]
</script>

<template>
  <div w-full fixed bottom-0 bg-fuchsia rounded-t-2xl md:hidden shadow-2xl shadow-gray-400>
    <nav max-w-lg h-16 mx-auto flex justify-around text-gray-200>
      <router-link v-for="item in items" :key="item.url" :to="item.url" flex justify-center items-center text-bechtle-wintergrau basis-20>
        <div flex flex-col items-center>
          <div pill>
            <span :class="item.icon" />
          </div>
          <div font-medium text-center text-xs pt-1>
            {{ item.label }}
          </div>
        </div>
      </router-link>
    </nav>
  </div>
  <div h-16 />
</template>

<style scoped>
  .router-link-active [pill] {
    @apply bg-amber text-white;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }
</style>
