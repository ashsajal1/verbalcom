<script lang="ts" setup>
import Footer from './components/Footer.vue';
import NavbarVue from './components/Navbar.vue'
</script>

<template>
  <NavbarVue />

  <main class="p-4 mt-[80px]">
    <router-view />
  </main>

  <Footer />
</template>
