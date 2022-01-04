<template>
  <main class="main-wrapper font-sans">
    <nuxt />
  </main>
</template>
<style lang="postcss">
.main-wrapper {
  background-color: rgba(238, 242, 245, 1);
}

@media screen and (min-width: 1024px) {
  .main-wrapper {
    @apply w-screen h-screen overflow-hidden;
  }

  html {
    @apply w-screen h-screen overflow-hidden;
  }
}
</style>
