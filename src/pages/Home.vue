<script lang="ts" setup>
import TextCard from '../components/TextCard.vue';
import { communicationSamples } from '../lib/texts'
</script>

<template>
    <div v-for="sample in communicationSamples" :key="sample.text">
        <TextCard :text="sample.text" :category="sample.category" />
    </div>
</template>