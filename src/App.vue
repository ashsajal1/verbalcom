<script lang="ts" setup>
import NavbarVue from './components/Navbar.vue'
import TextCard from './components/TextCard.vue';
import { communicationSamples } from './lib/texts'
</script>

<template>
  <NavbarVue />

  <main class="p-4 mt-[80px]">
    <div v-for="sample in communicationSamples" :key="sample.text">
      <TextCard :text="sample.text" :category="sample.category" />
    </div>
  </main>
</template>
