<script lang="ts" setup>
import { communicationSamples } from '@/lib/texts';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import Button from '@/components/Button.vue';

const route = useRoute()
const id = route.query.id as string
const praciceSample = ref(communicationSamples.filter(text => text.id === id)[0])
</script>

<template>
    <div>
        <h1 class="text-2xl font-extralight py-4">{{ praciceSample.text }}</h1>
        <textarea placeholder="Write text" class="p-2 rounded border w-full"></textarea>
        <Button class="w-full mt-3">Submit</Button>
    </div>
</template>