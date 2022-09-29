<template>
  <div>
    <header text-2xl text-center mt-12 text-default>
      <span muted>Schachfreunde</span><br>
      <span font-medium>Heilbronn-Biberach</span>
    </header>
    <main class="px-4 py-12">
      <slot />
      <Footer />
    </main>
    <Navbar />
  </div>
</template>
