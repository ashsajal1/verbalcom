<script lang="ts" setup>
import Button from './components/Button.vue';
import NavbarVue from './components/Navbar.vue'
import { communicationSamples } from './lib/texts'
</script>

<template>
  <NavbarVue />

  <main class="p-4 mt-[80px]">
    <div v-for="sample in communicationSamples" :key="sample.text">
      <div v-motion-roll-top :duration="600" class="flex flex-col border shadow p-4 rounded my-4">
        <p class="font-extralight text-2xl">{{ sample.text }}</p>
        <p class="font-bold text-sm">{{ sample.category }}</p>
        <Button class="mt-2 hover:to-violet-700 hover:from-teal-700">Practice</Button>
      </div>
    </div>
  </main>
</template>
