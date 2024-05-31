<script lang="ts" setup>
import { useAttrs } from 'vue'
import { cn } from '../lib/utils'

const attrs = useAttrs()
// console.log(attrs.class)
</script>

<template>
    <button v-motion :initial="{ scale: 0 }" :enter="{
        scale: 1, transition: {
            type: 'spring',
        }
    }" :duration="600"
        :class="cn('bg-gradient-to-tr from-primary to-secondary text-white font-bold py-2 px-4 rounded', attrs.class)">
        <slot />
    </button>
</template>