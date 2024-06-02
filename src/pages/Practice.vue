<script lang="ts" setup>
import { communicationSamples } from '@/lib/texts';
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.query.id as string
const praciceText = ref(communicationSamples.filter(text => text.id === id)[0])
console.log(praciceText.value)
</script>

<template>
    <h1>Practice page:</h1>
    <p>The ID passed from the previous page is: {{ id }}</p>
</template>