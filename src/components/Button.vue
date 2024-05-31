<script lang="ts" setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
    <button v-motion :initial="{ scale: 0 }" :enter="{
        scale: 1, transiton: {
            type: 'spring',
        }
    }" :duration="600" v-bind="attrs"
        class="bg-gradient-to-tr from-primary to-secondary text-white font-bold py-2 px-4 rounded">
        <slot />
    </button>
</template>