<script lang="ts" setup>
import { communicationSamples } from './lib/texts'
</script>

<template>
  <div v-for="sample in communicationSamples" :key="sample.text">
    <div v-motion-roll-visible-once-top :duration="600" class="flex flex-col border shadow p-4 rounded my-4">
      <p>{{ sample.text }}</p>
      <p>{{ sample.category }}</p>
    </div>
  </div>
</template>
