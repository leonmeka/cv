<template>
  <nav class="bg-gray-800" id="nav">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-12 w-auto"
              src="../static/logo.svg"
              alt="Workflow"
            />
            <div class="flex-shrink-0 flex items-center">
              <img
                class="hidden lg:block h-12 w-auto"
                src="../static/logo.svg"
                alt="cvflow"
              />
            </div>
          </div>
        </div>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <a
            class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            >Public Beta</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  components: {},
  setup() {},
});
</script>
<style lang="postcss"></style>
