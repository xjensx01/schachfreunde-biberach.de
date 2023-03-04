<script setup lang="ts">
const items = [
  { url: '/', label: 'Aktuelles', icon: 'i-fa6-solid-newspaper' },
  { url: '/teams', label: 'Teams', icon: 'i-fa6-solid-user-group' },
  { url: '/turniere', label: 'Turniere', icon: 'i-fa6-solid-trophy' },
  { url: '/verein', label: 'Verein', icon: 'i-fa6-solid-chess' },
]
</script>

<template>
  <div w-full fixed bottom-0 bg-surface rounded-t-2xl md:hidden>
    <nav max-w-lg h-16 mx-auto flex justify-around text-gray-200>
      <NuxtLink v-for="item in items" :key="item.url" :to="item.url" flex justify-center items-center text-default muted basis-20>
        <div flex flex-col items-center>
          <div pill>
            <span :class="item.icon" />
          </div>
          <div font-medium text-center text-xs pt-1>
            {{ item.label }}
          </div>
        </div>
      </NuxtLink>
    </nav>
  </div>
  <div h-16 />
</template>

<style scoped>
  .router-link-active [pill] {
    @apply bg-highlight text-primary;
  }

  .router-link-active {
    opacity: 1;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }
</style>
