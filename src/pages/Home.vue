<script lang="ts" setup>
import TextCard from '../components/TextCard.vue';
import { communicationSamples } from '../lib/texts'
</script>

<template>
    <div class="grid md:grid-cols-2 gap-2">
        <div v-for="sample in communicationSamples" :key="sample.id">
            <TextCard :key="sample.id" :id="sample.id" :text="sample.text" :category="sample.category" />
        </div>
    </div>
</template>
