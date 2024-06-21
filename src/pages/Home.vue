<script lang="ts" setup>
import TextCard from '../components/TextCard.vue';
import { communicationSamples } from '../lib/texts';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '@/stores/search';
import Button from '@/components/Button.vue';
import HeroSection from '@/components/HeroSection.vue';

const router = useRouter()
const { hasSearched, searchText } = storeToRefs(useSearchStore());
const { setHasSearched } = useSearchStore();

const route = useRoute();
const searchQueryText = computed(() => route.query.search as string | undefined);

const filteredSamples = computed(() => {
    if (!searchQueryText.value) return communicationSamples;
    const searchTerms = searchQueryText.value.toLowerCase().split(' ');
    return communicationSamples.filter((sample) =>
        searchTerms.some(
            (term) =>
                sample.text.toLowerCase().includes(term) ||
                sample.category.toLowerCase().includes(term)
        )
    );
});

const handleReset = () => {
    searchText.value = ''
    setHasSearched(false)
    router.push({ query: {} })
}
</script>

<template>
    <HeroSection />
    <div class="border p-4 mb-4 rounded dark:border-gray-700 flex items-center justify-between" v-if="hasSearched">
        <p>Searched items for : <span class="font-bold">{{ searchQueryText }}</span></p>

        <Button @click="handleReset" variant="ghost">
            <span class="pi pi-times"></span>
        </Button>
    </div>

    <div class="flex flex-col gap-3 justify-center items-center" v-if="!filteredSamples.length">
        <span class="font-light text-3xl">No item found</span>
        <div class="flex items-center gap-2">
            <Button @click="handleReset" class="shadow" variant="ghost">Go to Home</Button>
        </div>
    </div>
    <div class="grid md:grid-cols-2 gap-2">
        <div v-for="sample in filteredSamples" :key="sample.id">
            <TextCard :key="sample.id" :id="sample.id" :text="sample.text" :category="sample.category" />
        </div>
    </div>
</template>