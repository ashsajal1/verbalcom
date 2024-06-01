<script lang="ts" setup>
import { defineProps } from 'vue'
import Button from '../components/Button.vue';

defineProps<{ text: string, category: string }>()
</script>

<template>
    <div v-motion-roll-top :duration="600" class="flex flex-col border shadow p-4 rounded my-4">
        <p class="font-extralight text-2xl">{{ text }}</p>
        <p class="font-bold text-sm">{{ category }}</p>
        <Button class="mt-2 hover:to-violet-700 hover:from-teal-700">Practice</Button>
    </div>
</template>
