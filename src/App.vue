<script lang="ts" setup>
import NavbarVue from './components/Navbar.vue'
</script>

<template>
  <NavbarVue />

  <main class="p-4 mt-[80px]">
    <RouterView />
  </main>
</template>
