<script lang="ts" setup>
import { useAttrs, withDefaults } from 'vue'
import { cn } from '../lib/utils'
import { type ClassValue } from "clsx";

interface Props {
  variant?: "solid" | "outline" | "ghost"
}

withDefaults(defineProps<Props>(), {
  variant: "solid"
})

const attrs = useAttrs()
</script>

<template>
  <button v-motion :initial="{ scale: 0 }" :enter="{
    scale: 1,
    transition: {
      type: 'spring'
    }
  }" :tapped="{ scale: 1.02 }" :duration="600"
    :class="cn(
      'font-bold py-2 px-4 rounded',
      attrs.class ? (attrs.class as ClassValue[]) : [], variant === 'solid' ? 'bg-gradient-to-tr from-primary to-secondary text-white' : '', variant === 'ghost' ? 'dark:hover:bg-slate-700 hover:bg-slate-300' : '', variant === 'outline' ? 'border text-primary hover:text-secondary border-primary hover:border-secondary' : '')">
    <slot />
  </button>
</template>