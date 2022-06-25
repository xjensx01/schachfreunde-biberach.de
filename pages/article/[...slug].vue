<template>
  <main>
    {{ $route.path }}
    <ContentDoc :path="$route.path.split('/article')[1]" />
  </main>
</template>
