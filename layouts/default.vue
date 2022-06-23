<template>
  <header text-2xl text-center mt-12 text-default>
    <span muted>Schachfreunde</span><br>
    <span font-medium>Heilbronn-Biberach</span>
  </header>
  <main class="py-20 px-10 text-center">
    <slot />
    <Footer />
  </main>
  <Navbar />
</template>
