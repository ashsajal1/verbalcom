<script lang="ts" setup>
import { useAttrs } from 'vue'
import { cn } from '../lib/utils'
import { type ClassValue } from "clsx"

const attrs = useAttrs()
</script>

<template>
  <button
    v-motion
    :initial="{ scale: 0 }"
    :enter="{
      scale: 1,
      transition: {
        type: 'spring'
      }
    }"
    :duration="600"
    :class="cn(
      'bg-gradient-to-tr from-primary to-secondary text-white font-bold py-2 px-4 rounded',
      attrs.class ? (attrs.class as ClassValue[]) : []
    )"
  >
    <slot />
  </button>
</template>