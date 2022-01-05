<template>
  <main class="main-wrapper font-sans">
    <nuxt />
  </main>
</template>
<style lang="postcss">
.main-wrapper {
  background-color: rgba(238, 242, 245, 1);
}

textarea,
input {
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
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
