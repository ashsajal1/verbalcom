<script lang="ts" setup>
import { communicationSamples } from './lib/texts'
</script>

<template>
  <header class="flex items-center justify-between p-4">
    <p class="text-3xl font-bold">VerbalCom</p>
    <div>
      <div class="border rounded p-2 flex items-center focus-within:border focus-within:border-teal-600">
        <input class="outline-none" type="text" placeholder="Search sample...">
        <button class="rounded bg-teal-600 p-1 text-sm text-white text-center flex items-center justify-between">Search</button>
      </div>
    </div>
  </header>
  <div v-for="sample in communicationSamples" :key="sample.text">
    <div v-motion-roll-visible-once-top :duration="600" class="flex flex-col border shadow p-4 rounded my-4">
      <p class="font-extralight text-2xl">{{ sample.text }}</p>
      <p class="font-bold text-sm">{{ sample.category }}</p>
    </div>
  </div>
</template>
